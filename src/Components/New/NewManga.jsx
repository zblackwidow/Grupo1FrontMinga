import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../Store/actions/categoryActions'

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'



function NewManga() {
   

    let infoUser = JSON.parse(localStorage.getItem('userManga'))
    //console.log(infoUser)
    let token = infoUser?.token
    let idUser = infoUser?.user?.id
    let idUser2 = infoUser?.user?._id

    //console.log(token)
    //console.log(idUser)
    //console.log(idUser2)

    let cont = ''

    if (!idUser) {
        cont = idUser2
    }
    if (!idUser2) {
        cont = idUser
    }
    console.log(cont)

    const { user } = useSelector((state) => state.auth)

    console.log(user)

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

    useEffect(() => {
        const resp = axios
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
                console.log(res)
                console.log(resp)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    console.log(formDataUpdate)

    const { categories } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories({}))
    }, [dispatch])

    console.log(categories)

    const [selected, setSelected] = useState(categories[3])

    const [formData2, setFormData2] = useState({
        title: '',
        category: '',
        photo: '',
        description: '',
        author_id: formDataUpdate._id,
    })

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData2({ ...formData2, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        console.log(formData2)
        /*try {
            await axios.post('http://localhost:8080/api/manga/create', formData2);
            setMessage('Author created successfully!');
        } catch (error) {
            if (error.response) {
                setMessage(`Error: ${error.response.data.message}`);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }*/
    }

    return (
        <>
            {/* contenedor principal */}
            <div className="w-full h-[100vh] flex items-center justify-center">
                {/* contenedor de formulario */}
                <div className="md:w-1/2 my-32 md:my-16 flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col w-[80vw] md:w-[40vw] gap-4 p-4"
                    >
                        <h1 className="text-2xl text-center font-bold mb-6">New Manga</h1>
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
                        <div className="mb-6">
                            <input
                                type="text"
                                name="title"
                                value={formData2.title}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        

                        

                        <div className="mb-6">
                            <input
                                type="url"
                                name="photo"
                                value={formData2.photo}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert cover photo"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="description"
                                value={formData2.description}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Description"
                            />
                        </div>

                        <Listbox value={selected} onChange={setSelected}>
                            <Label className="block text-sm/6 font-medium text-gray-400">
                            Insert Category
                            </Label>
                            <div className="relative mt-2">
                                <ListboxButton className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent">
                                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                        
                                        <span className="block truncate">{selected.name}</span>
                                    </span>
                                    <ChevronUpDownIcon
                                        aria-hidden="true"
                                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </ListboxButton>

                                <ListboxOptions
                                    transition
                                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                >
                                    {categories.map((person) => (
                                        <ListboxOption
                                            key={person.id}
                                            value={person}
                                            placeholder="Select a person"
                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                                        >
                                            <div className="flex items-center">
                                                
                                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                                    {person.name}
                                                </span>
                                            </div>

                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                                <CheckIcon aria-hidden="true" className="size-5" />
                                            </span>
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                        <button
                            type="submit"
                            className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-3xl hover:bg-blue-700 my-4"
                        >
                            Send
                        </button>
                    </form>
                </div>
                {/* contenedor de imagen */}
                <div className="md:w-1/2 hidden md:block ">
                    <img
                        className="w-full h-[100vh] object-cover"
                        src="https://s3-alpha-sig.figma.com/img/b8b4/c1ca/d91c01d1ff2a1a1341ce3c24609e0349?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqOlUaZrihLOcb8a3YFZ7Ab9cCdJgSozuary8Lfwzg~Qm2qbvbDU7onI-m8Wdue-ZUDzDAUmJ9BbtX6RUVGlUJLA-AZz~32HVTU7TcptrojKmmyc~IA~TEPcBiJP8gUvBfi1bctlKNkVBGklXo4n0gmdvoQwdmOARzm52LnXUUZQ0aXouvrCPWcePVswxYiZGXb36tHY0HccbIPF~SyUNto3ev7kZ1I2SZ4PtmrV2wvPGljVAdz-oGf4F-v0Stw68W2D9j2ycWUCLrwR06bmfID5lbvsWHvMYp7BULmbAqHLjBigaQdqyjOE-TRopZYkpOCjB0bYBsgHHqGxlaA1cg__"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default NewManga
