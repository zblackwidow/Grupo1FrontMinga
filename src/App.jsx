import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './Layout/StandarLayout'
import Home from '../src/Pages/Home'
import NotFound from '../src/Pages/NotFound'
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import Panel from '../src/Pages/Panel'
import NewAuthor from './Components/New/NewAuthor'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: "/panel", element: <Panel></Panel> },
            { path: "/newAuthor", element: <NewAuthor/> },
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

