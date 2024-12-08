import Navbar from '../Components/Basic/NavBar'
import { Outlet } from 'react-router-dom'
import '../index.css'



export default function LayoutExceptFooter() {
    return (
        <>

            <Navbar />
            <Outlet />

        </>
    )
}