import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    if( user.isLogged ) {
        localStorage.setItem('lastPath', pathname + search);
    }

    return user.isLogged
        ? children
        : <Navigate to='/login'/>
};
