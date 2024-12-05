import NavBarComponents from '../Components/NavBarComponents'
import { Outlet } from 'react-router-dom'
//import FooterComponents from '../Components/FooterComponents'
import '../index.css'
import Navbar from '../Components/Basic/NavBar'

export default function StandarLayout() {
    return (
        <>
            {/* <NavBarComponents /> */}
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <FooterComponents /> */}
        </>
    )
}