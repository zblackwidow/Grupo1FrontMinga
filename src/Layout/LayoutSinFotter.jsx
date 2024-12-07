import Navbar from '../Components/Basic/NavBar'
import { Outlet } from 'react-router-dom'
import '../index.css'



export default function LayoutSinFotter() {
    return (
        <>

            <Navbar />
            <Outlet />

        </>
    )
}