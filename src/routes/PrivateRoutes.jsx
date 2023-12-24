/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useMyContext();
    const location = useLocation();

    if (loading) return <span className="loading loading-bars loading-lg flex justify-center items-center text-center text-accent"></span>;

    if (user?.email) return children;

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;