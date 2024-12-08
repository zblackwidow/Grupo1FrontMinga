import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './Layout/StandarLayout'
import Home from '../src/Pages/Home'
import NotFound from '../src/Pages/NotFound'
import Register from './Components/Login/Register'
import Login from './Components/Login/Login'
import Panel from '../src/Pages/Panel'
import NewAuthor from './Components/New/NewAuthor'
import NewManga from './Components/New/NewManga'
import NewCompany from './Components/New/NewCompany'
import NewChapter from './Components/New/Newchapter'
import NewRole from './Components/New/NewRole'
import Chapters from './Pages/Chapters'
import Mangas from './Pages/Mangas'
import LayoutExceptFooter from './Layout/LayoutExceptFooter'
import CommentSection from './Components/Manga/Comment'
import Profile from './Pages/Profile'
import Companies from './Pages/Companies'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/mangas', element: <Mangas></Mangas> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/panel', element: <Panel></Panel> },
            { path: '/chapters', element: <Chapters /> },
            { path: '/comment', element: <CommentSection /> },
            { path: '/profile', element: <Profile /> },
            { path: '/companies', element: <Companies /> },
        ],
    },
    {
        element: <LayoutExceptFooter />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/newAuthor', element: <NewAuthor /> },
            { path: '/newChapter', element: <NewChapter /> },
            { path: '/newManga', element: <NewManga /> },
            { path: '/newCompany', element: <NewCompany /> },
            { path: '/newRole', element: <NewRole /> },
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
