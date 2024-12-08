import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StandarLayout from './Layout/StandarLayout'
import Home from '../src/Pages/Home'
import NotFound from '../src/Pages/NotFound'
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import Panel from '../src/Pages/Panel'
import NewAuthor from './Components/New/NewAuthor'
import NewManga from './Components/New/NewManga'
import NewCompany from './Components/New/NewCompany'
import NewChapter from './Components/New/NewChapter'
import NewRole from './Components/New/NewRole'
import Chapters from './Pages/Chapters'
import Mangas from './Pages/Mangas'
import EditAuthor from './Components/Edit/EditAuthor'
import EditChapter from './Components/Edit/EditChapter'
import EditManga from './Components/Edit/EditManga'
import EditCompany from './Components/Edit/EditCompany'

const router = createBrowserRouter([
    {
        element: <StandarLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/mangas', element: <Mangas></Mangas> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/*', element: <NotFound></NotFound> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: "/panel", element: <Panel></Panel> },
            { path: "/newAuthor", element: <NewAuthor/> },
            { path: "/newChapter", element: <NewChapter/> },
            { path: "/newManga", element: <NewManga/> },
            { path: "/newCompany", element: <NewCompany/> },
            { path: "/newRole", element: <NewRole/> },
            { path: '/chapters', element: <Chapters /> },
            { path: '/editAuthor', element: <EditAuthor /> },
            { path: '/editChapter', element: <EditChapter /> },
            { path: '/editManga', element: <EditManga /> }, 
            { path: '/editCompany', element: <EditCompany /> },
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

