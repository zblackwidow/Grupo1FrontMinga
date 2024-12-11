import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { validateToken } from '../../Store/actions/authActions'
import { Navigate } from 'react-router-dom'
import { logout } from '../../Store/actions/authActions.js'
import '../../../public/erroruser.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [dataUser, setDataUser] = useState(null)
    const [UserLogeado, setUserLogeado] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const closeMenu = () => setIsMenuOpen(false)
    const handleError = (e) => {
        e.target.src = "../../../public/erroruser.png";
    };
 
    let localData = JSON.parse(localStorage.getItem('userManga'))
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const userToken = params.get('token') 

        if (userToken) {
            dispatch(validateToken(userToken)).then((response) => {
                if (response) {
                    setDataUser(response) 
                    localStorage.setItem(
                        'userManga',
                        JSON.stringify({ user: response?.payload?.user, token: userToken })
                    )
                    setUserLogeado(true)
                    navigate('/') 
                } else {
                    console.error('Invalid Token')
                    localStorage.removeItem('userManga')
                    window.location.reload()
                }
            })
        } else {
            const storedUser = JSON.parse(localStorage.getItem('userManga'))
            if (storedUser) {
                setDataUser(storedUser) 
                dispatch(validateToken(storedUser.token)).then((response) => {
                    if (response) {
                        setDataUser(response)
                        setUserLogeado(true)
                    } else {
                        setDataUser(null)
                        console.error('Invalid Token')
                        localStorage.removeItem('userManga')
                        window.location.reload()
                    }
                })
            }
        }
    }, [dispatch, navigate])

    const logoutt = () => {
        localStorage.removeItem('userManga')
        setUserLogeado(false)

        dispatch(logout());

        return <Navigate to="/" />;
    };

    useEffect(() => {
        if (!UserLogeado) {
            setDataUser(false)
        }
    }, [UserLogeado])


    return (
        <nav className="absolute flex w-full h-15 justify-between items-center bg-transparent text-white z-50">
            {/* Menú hamburguesa */}
            <button className="text-orange-500 ml-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                    width="57"
                    height="55"
                    viewBox="0 0 57 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.3999 16H38.3454"
                        stroke="url(#paint0_linear_2617_3467)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11.3999 27H38.3454"
                        stroke="url(#paint1_linear_2617_3467)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11.3999 39H38.3454"
                        stroke="url(#paint2_linear_2617_3467)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_2617_3467"
                            x1="3.03428"
                            y1="15.9469"
                            x2="3.05341"
                            y2="17.6209"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF5722" />
                            <stop offset="0.666667" stopColor="#F97316" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_2617_3467"
                            x1="3.03428"
                            y1="26.9469"
                            x2="3.05341"
                            y2="28.6209"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF5722" />
                            <stop offset="0.666667" stopColor="#F97316" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_2617_3467"
                            x1="3.03428"
                            y1="38.9469"
                            x2="3.05341"
                            y2="40.6209"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FF5722" />
                            <stop offset="0.666667" stopColor="#F97316" />
                        </linearGradient>
                    </defs>
                </svg>
            </button>

            {isMenuOpen && (
                <div className=" bg-black bg-opacity-50 z-0" onClick={closeMenu}></div>
            )}

            {isMenuOpen && (
                <div className="fixed  inset-0 bg-gradient-to-b from-[#FF5722] to-[#F97316] text-white p-4 shadow-md sm:inset-x-0
                 sm:inset-y-0 sm:w-[50%] sm:right-0 lg:w-[25%] flex flex-col  items-center">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#fff"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <ul className="mt-4 w-full">
                        {dataUser && (
                            <li className="text-center">
                                <div className="cursor-pointer flex justify-center items-center gap-3 mb-2">
                                    {
                                        <img
                                            src={dataUser?.payload?.user?.photo}
                                            alt="user"
                                            className="w-10 h-10 rounded-full"
                                            onError={handleError}
                                        />
                                    }
                                    {
                                        <p className=" text-white">
                                            {dataUser?.payload?.user.email}
                                        </p>
                                    }
                                </div>
                            </li>
                        )}
                        {!UserLogeado && (
                            <>
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/home"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        href="/home"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/mangas"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Mangas
                                    </NavLink>
                                </li>
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/register"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/login"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Sign In
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {UserLogeado && (
                            <>
                                {user.role > 0 ? (
                                    <li className="w-full mb-4">
                                        <NavLink
                                            to="/company"
                                            className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                            href="/company"
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                ) : (
                                    ''
                                )}
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/home"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        href="/home"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/mangas"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        Mangas
                                    </NavLink>
                                </li>

                                {user.role === 0 && (
                                    <li className="w-full mb-4">
                                        <NavLink
                                            to="/newRole"
                                            className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                            Chooise: Author or Company
                                        </NavLink>
                                    </li>
                                )}
                                
                                {user.role === 3 && (
                                    <li className="w-full mb-4">
                                        <NavLink
                                            to="/panel"
                                            className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        >
                                            Panel
                                        </NavLink>
                                    </li>
                                )}

                                <li className="w-full mb-4">
                                    <NavLink
                                        to="/"
                                        className="block cursor-pointer rounded-md hover:text-[#FF5722] hover:bg-white px-3 py-2  font-medium text-center"
                                        onClick={logoutt}
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        <img src="../../../public/logo.png" alt="logo" className="hidden md:block w-40 mr-8 h-32 object-contain" />
        <p id="border" className=' md:hidden text-white  m-8 text-4xl '>雪</p>
        </nav>
    )
}

export default Navbar
