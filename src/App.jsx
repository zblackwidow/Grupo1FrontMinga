import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './layout/StandarLayout'
import Home from '../src/Pages/Home'
import NotFound from '../src/Pages/NotFound'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/*', element: <NotFound></NotFound> },
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
