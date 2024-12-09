import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { login } from '../../Store/actions/authActions';
import { useDispatch } from 'react-redux';

//import axios from 'axios';
import logo from '../../../public/logo.png'; // Ajusta la ruta según tu estructura de archivos

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const dispatch = useDispatch()
//    const auth = useSelector((state) => state.auth)

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        dispatch(login({ email, password }))
        
    };

    const handleGoogleSignIn = () => {
        window.location.href = "http://localhost:8080/api/auth/signIn/google";
    };

    return (
        <main className="w-full flex justify-center items-center font-poppins">
            <div className="hidden md:block md:w-[50%]">
                <img className='w-full h-screen object-cover' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="" />
            </div>
            <div className="w-full mt-36 md:w-[50%] flex justify-center">
                <div className="md:w-[20vw] w-[80vw]">
                    <div className='flex flex-col items-center'>
                        <img src={logo} alt="logo" className="object-contain w-[127px]" />
                        <div className='flex font-bold text-2xl'>
                            <h1 className="text-gray-900 mr-2 mb-4">Welcome</h1>
                            <p className='text-[#f8781a]'>back!</p>
                        </div>
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
                            Sign in
                        </button>
                    </form>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full mt-4 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800"
                    >
                        Sign in with Google
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-gray-500">
                            You don’t have an account yet? <NavLink to="/register" className="text-[#f8781a] font-bold hover:underline">Sign up</NavLink>
                        </p>
                        <p className="text-gray-500">
                            Go back to <NavLink to="/" className="text-[#f8781a] font-bold hover:underline">home page</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
