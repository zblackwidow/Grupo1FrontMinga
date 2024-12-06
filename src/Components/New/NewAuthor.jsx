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
            const response = await axios.post('http://localhost:8080/api/author/create', formData);
            console.log('Form Data Sent:', response.data);
            setMessage('Author created successfully!');
        } catch (error) {
            console.error('Error sending form data:', error);
            if (error.response) {
                console.error('Error details:', error.response.data);
                setMessage(`Error: ${error.response.data.message}`);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[40vw] gap-4  p-4">
                    <h1 className="text-2xl text-center font-bold mb-6">New Author</h1>
                    {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Surname"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="City"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="url"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Photo URL"
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-3xl hover:bg-blue-700">
                        Send
                    </button>
                </form>
            </div>
        </>
    );
}

export default NewAuthor;
