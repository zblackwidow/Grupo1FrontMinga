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
import Mangas from './Pages/Mangas'
import LayoutExceptFooter from './Layout/LayoutExceptFooter'
import CommentSection from './Components/Manga/Comment'
import Profile from './Pages/Profile'
import Companies from './Pages/Companies'
import PrivateRouteUser from './Components/Basic/PrivateRouteUser'
import PrivateRouterAuthorCompany from './Components/Basic/PrivateRouterAuthorCompany'
import PrivateRouterAdmin from './Components/Basic/PrivateRouterAdmin'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/mangas', element: <PrivateRouteUser><Mangas></Mangas></PrivateRouteUser>  },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/panel', element: <PrivateRouterAdmin><Panel></Panel></PrivateRouterAdmin> },
            { path: '/chapters', element: <PrivateRouterAuthorCompany><Chapters /></PrivateRouterAuthorCompany> },
            { path: '/comment', element: <PrivateRouterAuthorCompany><CommentSection /></PrivateRouterAuthorCompany> },
            { path: '/profile', element: <PrivateRouterAuthorCompany><Profile /></PrivateRouterAuthorCompany> },
            { path: '/companies', element: <PrivateRouterAuthorCompany><Companies /></PrivateRouterAuthorCompany> },
        ],
    },
    {
        element: <LayoutExceptFooter />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '/newAuthor', element: <PrivateRouteUser><NewAuthor /></PrivateRouteUser> },
            { path: '/newChapter', element: <PrivateRouterAuthorCompany><NewChapter /></PrivateRouterAuthorCompany> },
            { path: '/newManga', element: <PrivateRouterAuthorCompany><NewManga /></PrivateRouterAuthorCompany> },
            { path: '/newCompany', element: <PrivateRouteUser><NewCompany /></PrivateRouteUser> },
            { path: '/newRole', element: <PrivateRouteUser><NewRole /></PrivateRouteUser> },
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
