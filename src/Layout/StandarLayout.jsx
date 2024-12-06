import { Outlet } from 'react-router-dom'
import '../index.css'
import Navbar from '../Components/Basic/NavBar'
import Footer from '../Components/Basic/Footer'


export default function StandarLayout() {
    return (
        <>
            {/* <NavBarComponents /> */}
            <Navbar />
            <main>
                <Outlet />
            </main>
            
            {/* <FooterComponents /> */}
            <Footer />  
        </>
    )
}