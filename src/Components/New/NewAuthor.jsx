import { useState } from "react";
import axios from 'axios';

function NewAuthor() {
    const [formData, setFormData] = useState({
        nombre: '',
        surname: '',
        city: '',
        birthday: '',
        photo: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            await axios.post('http://localhost:8080/api/author/create', formData);
            setMessage('Author created successfully!');
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
            <div className="w-full flex justify-center items-center">
                <div className="md:w-1/2 my-16 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex flex-col w-[90vw] md:w-[40vw] gap-4 p-4">
                        <h1 className="text-2xl text-center font-bold mb-6">New Author</h1>
                        {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                        <div className="mb-6">
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Surname"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="City"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="date"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent"
                                placeholder="Photo URL"
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-3xl hover:bg-blue-700">
                            Send
                        </button>
                    </form>
                </div>
                <div className="md:w-1/2 hidden md:block">
                    <img className='w-full h-[100vh] object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="" />
                </div>
            </div>
        </>
    );
}

export default NewAuthor;
