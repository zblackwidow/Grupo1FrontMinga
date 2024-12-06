import Navbar from '../Components/Basic/NavBar'
import { Outlet } from 'react-router-dom'
import '../index.css'
import Footer from '../Components/Basic/Footer'


export default function StandarLayout() {
    return (
        <>
           <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            </div>
            <Footer />  
        </>
    )
}