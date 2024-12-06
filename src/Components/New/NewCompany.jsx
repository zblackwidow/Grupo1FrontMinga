import { useState } from "react";
import axios from 'axios'; 

function NewCompany() {
    const [formData, setFormData] = useState({
        nombre: '',
        website: '',
        photo: '',
        description:''
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
            const response = await axios.post('http://localhost:8080/api/company/create', formData);
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
                    <h1 className="text-2xl text-center font-bold mb-6">New Company</h1>
                    {message && <p className={`text-center ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                    <div className="mb-6">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
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
                            placeholder="Descruption"
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

export default NewCompany;
