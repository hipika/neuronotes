import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {

    
    const token = localStorage.getItem('jwt');

    return token ? <Outlet /> : <Navigate to="/login"/>

}

export default ProtectedRoutes