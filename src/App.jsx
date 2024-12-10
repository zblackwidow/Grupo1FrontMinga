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
import NewChapter from './Components/New/NewChapter'
import NewRole from './Components/New/NewRole'
import Mangas from './Pages/Mangas'
import EditAuthor from './Components/Edit/EditAuthor'
import EditChapter from './Components/Edit/EditChapter'
import EditManga from './Components/Edit/EditManga'
import EditCompany from './Components/Edit/EditCompany'
import LayoutExceptFooter from './Layout/LayoutExceptFooter'
import CommentSection from './Components/Manga/Comment'
import Profile from './Pages/Profile'
import Companies from './Pages/Companies'
import PrivateRouteUser from './Components/Basic/PrivateRouteUser'
import PrivateRouterAuthorCompany from './Components/Basic/PrivateRouterAuthorCompany'
import PrivateRouterAdmin from './Components/Basic/PrivateRouterAdmin'
import MangaChapterPage from './Pages/MangaChapterPage'
import MangaChapter from './Components/Manga/MangaChapter'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/mangas', element: <Mangas></Mangas>  },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/panel', element: <PrivateRouterAdmin><Panel></Panel></PrivateRouterAdmin> },
            { path: '/chapters/:id', element: <MangaChapterPage /> },
            { path: '/comment', element: <PrivateRouterAuthorCompany><CommentSection /></PrivateRouterAuthorCompany> },
            { path: '/profile', element: <PrivateRouterAuthorCompany><Profile /></PrivateRouterAuthorCompany> },
            { path: '/companies', element: <PrivateRouterAuthorCompany><Companies /></PrivateRouterAuthorCompany> },
        ],
    },
    {
        element: <LayoutExceptFooter />,
        children: [
            { path: '/login', element: <Login /> },
            { path: '/chapterByID/:id', element: <MangaChapter /> },
            { path: '/register', element: <Register /> },
            { path: "/newAuthor", element: <NewAuthor /> },
            { path: "/newChapter", element: <NewChapter /> },
            { path: "/newManga", element: <NewManga /> },
            { path: "/newCompany", element: <NewCompany /> },
            { path: "/newRole", element: <PrivateRouteUser> <NewRole /> </PrivateRouteUser>},
            { path: '/editAuthor', element: <EditAuthor /> },
            { path: '/editChapter', element: <EditChapter /> },
            { path: '/editManga', element: <EditManga /> },
            { path: '/editCompany', element: <EditCompany /> },
            { path: '/*', element: <NotFound /> },
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
