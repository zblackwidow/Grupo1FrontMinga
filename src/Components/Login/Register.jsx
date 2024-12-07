import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../public/logo.png';

function Register() {
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Email y contraseña son requeridos.');
            return;
        }
        if (!photo) {
            setError('La URL de la foto es requerida.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/user/register', {
                email,
                photo,
                password,
            });

            if (response.data.success) {
                console.log("Usuario registrado exitosamente", response.data);
            } else {
                setError('Hubo un problema al registrar al usuario.');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('Hubo un error en el servidor.');
            }
        }
    };

    return (
        <div className="w-full flex justify-center items-center font-poppins">
            <div className="w-full my-16 md:w-[50%] flex justify-center">
                <div className="md:w-[30vw] w-[90vw]">
                    <div className='flex flex-col items-center'>
                        <img src={logo} alt="logo" className="object-contain w-[127px]" />
                        <h1 className="text-2xl text-gray-900 font-bold mb-6">Welcome!</h1>
                        <p className='text-gray-500 font-semibold text-center'>
                            Discover manga, manhua and manhwa, track your progress, have fun, read manga.
                        </p>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <label className="block text-[#f8781a]">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-3 py-2 border rounded-lg" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-4">
                            <label className="block text-[#f8781a]">Photo URL</label>
                            <input 
                                type="url" 
                                className="w-full px-3 py-2 border rounded-lg" 
                                placeholder="Photo URL" 
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </div>
                        <div className="my-4">
                            <label className="block text-[#f8781a]">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-3 py-2 border rounded-lg" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Sign up
                        </button>
                    </form>
                    <button className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                        Sign in with Google
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-gray-500">
                            Already have an account? <NavLink to="/login" className="text-[#f8781a] font-bold hover:underline">Login</NavLink>
                        </p>
                        <p className="text-gray-500">
                            Go back to <NavLink to="/" className="text-[#f8781a] font-bold hover:underline">home page</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[50%] hidden md:block">
                <img className='w-full h-[100vh] object-cover' src="https://s3-alpha-sig.figma.com/img/5d98/eac1/025f012e94a72840af6fc1f67a349f61?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MtGJF7E0D6~8zP9qJDOh~vl~H-KfvC-43eCh-x0l1DphvRvw-q4VjRKc2pvAyU07MpdMI8DnytXVjzZ2sLz7qxUEJFsWD4pJd3VQqkPJmCr-ucqj2OuyAfiYHd8j7zWEzIm8AqrsMcLVWAsQ9E1juZy3ZGgxL5iJZwG5Neuvn~oU-pdeDLybUkdtBxbWN5-VvYmeeteKMPy9WaRQaByX-g4ieNpvdeCUqZngEkVytLr4tbYBe55HhSMhQGvxwwlXEYfkFT9LRvwVOfkCgum2tY4Ry2S~9lVhZTdjAMc~zXjodSKPWOFHggoN4GrSA-qAkaaGbQi0J2xdcEuop1nJkA__" alt="" />
            </div>
        </div>
    );
}

export default Register;
