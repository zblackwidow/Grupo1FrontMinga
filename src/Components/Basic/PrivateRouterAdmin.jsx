import { Navigate } from "react-router-dom";

function PrivateRouterAdmin({ children }) {
    let dataUser = JSON.parse(localStorage.getItem("userManga"))
    let role = dataUser.user.role
    if (role === 3) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
}

export default PrivateRouterAdmin