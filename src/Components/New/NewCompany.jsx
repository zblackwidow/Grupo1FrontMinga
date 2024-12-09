import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewCompany() {
    const navigate = useNavigate()

    let dataUser = JSON.parse(localStorage.getItem('userManga'))
    let token = dataUser.token
    let idUser = dataUser.user.id

    const [formData, setFormData] = useState({
        name: '',
        website: '',
        photo: '',
        description: '',
        user_id: idUser,
    })

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
    
        try {
            await axios.post('http://localhost:8080/api/company/create', formData);
    
            // Almacenar el nuevo rol en el localStorage
            const updatedUser = { ...dataUser.user, role: 2 }; // Actualizamos el rol
            localStorage.setItem('userManga', JSON.stringify({
                token: token,
                user: updatedUser,
            }));
    
            setMessage('Author created successfully!');
    
            setTimeout(() => {
                return navigate('/mangas');
            }, 1000);
    
        } catch (error) {
            if (error.response) {
                setMessage(`Error: ${error.response.data.message}`);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };
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
                        <h1 className="text-2xl text-center font-bold mb-6">New Company</h1>
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
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Website"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                className="w-full px-3  border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Photo URL"
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

export default NewCompany
