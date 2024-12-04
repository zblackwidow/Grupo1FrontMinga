import React from 'react'
//import NavBarComponents from '../Components/NavBarComponents'
import { Outlet } from 'react-router-dom'
//import FooterComponents from '../Components/FooterComponents'
import '../index.css'

export default function StandarLayout() {
    return (
        <>
            {/* <NavBarComponents /> */}

            <main>
                <Outlet />
            </main>
            {/* <FooterComponents /> */}
        </>
    )
}