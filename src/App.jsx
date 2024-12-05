import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                </Routes>
        </Router>
    );
}

export default App;
