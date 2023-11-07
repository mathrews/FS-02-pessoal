import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const ProtectRoute = ({ children }) => {
    const { userInfo } = useContext(AuthContext);
    return userInfo.level === 'admin' ? children : <Navigate to='/'/>;
}

export default ProtectRoute;