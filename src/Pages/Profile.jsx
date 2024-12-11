import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    let infoUser = JSON.parse(localStorage.getItem('userManga'))
    //console.log(infoUser)
    let token = infoUser?.token
    let idUser = infoUser?.user?.id
    let idUser2 = infoUser?.user?._id

    //console.log(token)
    //console.log(idUser)
    //console.log(idUser2)

    let cont = ''
    //console.log(cont)

    if (!idUser) {
        cont = idUser2
    }
    if (!idUser2) {
        cont = idUser
    }

    //console.log(cont)

    const [autor, setAutor] = useState(null)

    const [formData, setFormData] = useState({
        _id: '',
        user_id: cont,
    })

    const [formDataUpdate, setFormDataUpdate] = useState({
        _id: '',
        name: '',
        lastName: '',
        city: '',
        birthday: '',
        photo: '',
        user_id: cont,
    })

    const onChangeName = (e) => {
        let value = e.target.value
        setFormDataUpdate({ ...formDataUpdate, name: value })
    }

    const onChangeLastName = (e) => {
        let value = e.target.value
        setFormDataUpdate({ ...formDataUpdate, lastName: value })
    }

    const onChangeCity = (e) => {
        let value = e.target.value
        setFormDataUpdate({ ...formDataUpdate, city: value })
    }

    const onChangeBirthday = (e) => {
        let value = e.target.value
        setFormDataUpdate({ ...formDataUpdate, birthday: value })
    }

    const onChangePhoto = (e) => {
        let value = e.target.value
        setFormDataUpdate({ ...formDataUpdate, photo: value })
    }

    React.useEffect(() => {
        const res = axios
            .get(`http://localhost:8080/api/author/idUser/${cont}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setAutor(res.data)

                setFormData({ ...formData, _id: res.data.response[0]._id })
                setFormDataUpdate({
                    ...formDataUpdate,
                    _id: res.data.response[0]._id,
                    name: res.data.response[0].name,
                    lastName: res.data.response[0].lastName,
                    city: res.data.response[0].city,
                    birthday: moment.utc(autor?.response[0].birthday).format('MM/DD/YY'),
                    photo: res.data.response[0].photo,
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    //console.log(autor)

    const [message, setMessage] = useState('')

    let handleDelete = async (e) => {
        e.preventDefault()
        //console.log(token)
        //console.log(cont)
        console.log(formData)

        try {
            const response = await axios.delete(`http://localhost:8080/api/author/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: formData,
            })

            setMessage('Author Deteled successfully!')
            setTimeout(() => {
                return navigate('/')
            }, 1000)
            console.log('BIEN')
        } catch (error) {
            console.log(error)
            if (error.response) {
                setMessage(`Error: ${error.response.data.message}`)
            } else {
                setMessage('An error occurred. Please try again.')
            }
        }
    }

    let newDate = moment.utc(autor?.response[0].birthday).format('MM/DD/YY')

    let handleUpdate = async (e) => {
        e.preventDefault()

        console.log(formDataUpdate)

        try {
            const response = await axios.put(`http://localhost:8080/api/author/update`, formDataUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log('BIEN')
        } catch (error) {
            console.log(error)
            if (error.response) {
                setMessage(`Error: ${error.response.data.message}`)
            } else {
                setMessage('An error occurred. Please try again.')
            }
        }
    }

    return (
        <>
            <div className="z-1">
                <img
                    className="w-full h-[70vh] object-cover brightness-50"
                    src="https://s3-alpha-sig.figma.com/img/10b2/d5ee/20210b0eea83b4ff7cf04e7d9e72c1a2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NK823jbakqxJ4VAwfZgCsQQt-aRhdKMwp65SMiVSLkGTgB~sPwtwJj~j78wYc7nHw1F0Q7DxN3tIYcojpUCr2tqdEk21fJLQNmK7TwYeDTjXfOLS361su3033WsKOylILzA8DOtvjQU9Bq3xuYKnwdMqiDWdm6YSq9YTMS8D3r6jZbKXZgen3af9JxpjgMzxB-lLNGCgL817~4Zak~2fMJsKSWb264wJXr7q4uOx1DtSCYHqs1qPi4JFY4fwsw9iPksACL9iPW0YEtWXn2Nzy9DYTRFp8VOVU~u9v1E0CQzvikTjTp~9k3WpJV353y~l1mxB45HKhxJU1TxaCsUm~A__"
                    alt=""
                />
                <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Profile
                    </h1>
                </div>
            </div>

            <div className="flex justify-center -mt-[100px] z-0">
                <div className="flex justify-around items-center bg-white w-[97%] rounded-lg p-10">
                    <div className="">
                        <form className="flex flex-col w-[300px]  gap-4 p-4">
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="nombre"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    value={formDataUpdate.name}
                                    onChange={onChangeName}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="surname"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    value={formDataUpdate.lastName}
                                    onChange={onChangeLastName}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="city"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    value={formDataUpdate.city}
                                    onChange={onChangeCity}
                                />
                            </div>
                            <div className="mb-6">
                                {}
                                <input
                                    type="text"
                                    name="birthday"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    value={formDataUpdate.birthday}
                                    onChange={onChangeBirthday}
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="url"
                                    name="photo"
                                    className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                    value={formDataUpdate.photo}
                                    onChange={onChangePhoto}
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleUpdate}
                                className="w-full bg-[#34D399]   text-white text-[24px] py-2 px-4 rounded-3xl hover:bg-blue-700"
                            >
                                Save
                            </button>
                            <button
                                type="submit"
                                onClick={handleDelete}
                                className="w-full bg-[#FBDDDC] text-[#EE8380] text-[24px] py-2 px-4 rounded-3xl hover:bg-blue-700"
                            >
                                Delete Account
                            </button>
                        </form>
                        {message && (
                            <p
                                className={`text-center ${
                                    message.includes('successfully')
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                }`}
                            >
                                {message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            <img
                                className="w-[178px] rounded-full"
                                src={autor?.response[0].photo}
                                alt=""
                            />
                        </div>
                        <div className="pt-6">
                            <h2 className="text-[20px]">{autor?.response[0].name}</h2>
                        </div>
                        <div className="">
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-[#9D9D9D]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                    />
                                </svg>

                                <h2 className="text-[16px] text-[#9D9D9D] pl-2">
                                    {autor?.response[0].city}
                                </h2>
                            </div>
                            <div className="flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-5 text-[#9D9D9D]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                    />
                                </svg>

                                <h2 className="text-[16px] text-[#9D9D9D] pl-2">
                                    {autor?.response[0].birthday}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
