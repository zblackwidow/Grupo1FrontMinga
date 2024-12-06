import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './layout/StandarLayout'
import Home from '../src/Pages/Home'
import NotFound from '../src/Pages/NotFound'
import Chapters from './Pages/Chapters'
import Mangas from './Pages/Mangas'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/mangas', element: <Mangas></Mangas> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/chapters', element: <Chapters /> },
        ],
    },
])


export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
