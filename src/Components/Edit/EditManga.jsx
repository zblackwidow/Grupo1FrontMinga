import { useState } from "react";
import axios from "axios";

function EditManga() {
    const [formData, setFormData] = useState({
        title: '',
        photo: '',
        category: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.put('http://localhost:8080/api/manga/update', formData);
            
            console.log('Respuesta del servidor:', response.data); 
        } catch (error) {
            console.error('Error al realizar la solicitud:', error); 
        }
    };

    return (
        <>  
        {/* Contenedor principal */}
        <div className="w-full flex items-center justify-center">
            {/* contenedor de formulario */}
            <div className="md:w-1/2 my-32 md:my-16 flex flex-col items-center justify-center"> 
                <h1 className="text-2xl text-center font-bold mb-6">Edit Manga</h1>
                <form onSubmit={handleSubmit} className="w-[90vw] md:w-[60vw] lg:w-[40vw] mx-6 flex flex-col gap-4">
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
                            <input list="categoryOptions" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 border-0 outline-none border-b-2 border-gray-400 focus:border-gray-500 bg-transparent" placeholder="Insert Category" />
                            <datalist id="categoryOptions" className="p-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <option value="Shojo" />
                                <option value="Shonen" />
                                <option value="Comics" />
                                <option value="Seinen" />
                            </datalist>
                        </div>

                        <div className="mb-6">
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
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
                    <button type="submit" className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-3xl hover:bg-blue-700">
                        Save
                    </button>
                </form>
            </div>
            {/* Contenedor de imagen */}
            <div className="md:w-1/2 hidden md:block">
                <img className='w-full h-screen object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="Author background" />
            </div>
        </div>
        </>
    );
}  

export default EditManga;
