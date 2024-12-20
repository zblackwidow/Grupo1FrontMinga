import { Navigate } from "react-router-dom";

function PrivateRouterAuthorCompany({ children }) {
    let dataUser = JSON.parse(localStorage.getItem("userManga"))
    let role = dataUser.user.role
    if (role > 0 ) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
}

export default PrivateRouterAuthorCompany;