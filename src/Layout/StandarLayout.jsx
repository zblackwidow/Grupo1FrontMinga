import Navbar from '../Components/Basic/NavBar'
import { Outlet } from 'react-router-dom'
//import FooterComponents from '../Components/FooterComponents'
import '../index.css'

export default function StandarLayout() {
    return (
        <>
           <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            </div>
        </>
    )
}