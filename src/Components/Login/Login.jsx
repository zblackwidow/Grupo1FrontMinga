
import { NavLink } from 'react-router-dom';

import logo from '../../../public/logo.png'; // Ajusta la ruta según tu estructura de archivos

function Login() {

   
    return (
        <main className="w-full h-screen flex justify-center items-center font-poppins">
            <div className="hidden md:block md:w-[50%]">
                <img className='w-full' src="https://s3-alpha-sig.figma.com/img/cd7b/cfec/c07083cef0707bd5864b287bac613f2b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aa72~qaQ-Re8JBUPxzkxXnEmKnF~Nksubt4JQlzlSyaNzCKI0yOFHb4M3jaIdNjawWVO7VvkTsBWhTN03z4KsmZA8WhV2jMxWVM2PJAnD0piJN30WPlc~QnVykKFP4CwvEbbwihCfqj9VoAAHWocAqPpcZDmnlZvtbifXp5LaI6iv8fUVn5-MuCjlzaYt1mRYVISghahbU3i2vVtbPt5V7gYm5Kq6vJX4et7u36v8lwqsnUviMfvNVJlj3t1c8l6vYcPmsBFDMzEU~6r3HAvc-IIchLyEBooDoJHVTy9IaK2pFeS-Gwe3nW6UApCQiKHRAitgbRjVrp7MqrZqRXw4g__" alt="" />
            </div>
            <div className="w-full md:w-[50%] flex justify-center">
                <div className=" md:w-[20vw] w-[80vw]">
                    <div className='flex flex-col items-center'>
                        <img src={logo} alt="logo" className="object-contain w-[127px]" />
                        <div>
                        <h1 className="text-2xl text-gray-900 font-bold mb-6">Welcome</h1><p className='text-[#f8781a]'>back!</p>
                        </div>
                        
                        <p className='text-gray-500 font-semibold text-center'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                    </div>
                    <form >
                        <div className="my-4">
                            <label className="block text-[#f8781a]">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-3 py-2 border rounded-lg" 
                                placeholder="Email" 
                               
                            />
                        </div>
                        
                        <div className="my-4">
                            <label className="block text-[#f8781a]">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-3 py-2 border rounded-lg" 
                                placeholder="Password" 
                              
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#f8781a] text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Sign in
                        </button>
                    </form>
                    <button className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                        Sign in with Google
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-gray-500">
                            You don't have an account yet? <NavLink to="/register" className="text-[#f8781a] font-bold hover:underline">Sign UP</NavLink>
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
