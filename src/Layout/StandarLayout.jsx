import Navbar from '../Components/Basic/NavBar'
import { Outlet } from 'react-router-dom'
import '../index.css'
import Footer from '../Components/Basic/Footer'


export default function StandarLayout() {
    return (
        <>

            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}