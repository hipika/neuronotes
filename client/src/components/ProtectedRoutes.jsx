import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

    // get current token  
    const token = localStorage.getItem('jwt');
    // if exists navigate to /upload else back to login
    return token ? <Outlet /> : <Navigate to="/login"/>

}

export default ProtectedRoutes