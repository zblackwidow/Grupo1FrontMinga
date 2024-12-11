import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../Store/actions/categoryActions'

function NewManga() {
    const navigate = useNavigate()

    const { categories } = useSelector((state) => state.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories({}))
    }, [dispatch])

    //console.log(categories)

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
    //console.log(cont)

    const { user } = useSelector((state) => state.auth)

    //console.log(user)

    const [autor, setAutor] = useState(null)

    const [formData2, setFormData2] = useState({
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

                setFormData2({ ...formData2, _id: res.data.response[0]._id })
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

    //console.log(formDataUpdate)

    const [message, setMessage] = useState('')

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        cover_photo: '',
        description: '',
        category_id: '',
        user_id: cont,
    })

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        console.log(name);
        console.log(value);
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        console.log(formData)
        
        try {
            await axios.post('http://localhost:8080/api/manga/create', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setMessage('Author created successfully!')
            setTimeout(() => {
                return navigate('/company')
            }, 1000)
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
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-6">
                            <select
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparen"
                                value={formData.category_id}
                                name="category_id"
                                onChange={handleChange}
                            >
                                {categories.map((i) => (
                                    <option key={i._id} value={i._id}>
                                        {i.name}
                                    </option>
                                ))}
                            </select>

                            {/* <input
                                list="categoryOptions"
                                name="category"
                                value={formData.category_id}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert Category"
                            />

                            <datalist id="categoryOptions" className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <option value="67539793281cd2607766f72e" />
                                <option value="67539793281cd2607766f72f" />
                                <option value="67539793281cd2607766f730" />
                                <option value="67539793281cd2607766f731" />
                            </datalist> */}
                        </div>

                        <div className="mb-6">
                            <input
                                type="url"
                                name="cover_photo"
                                value={formData.cover_photo}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Insert cover photo"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Description"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-3xl hover:bg-blue-700"
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
