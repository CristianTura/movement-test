import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const PrivateRoute = ({ children }) => {

    const { user, setRouteName } = useContext(AppContext);

    const { pathname:route } = useLocation();

    useEffect(() => {
        setRouteName(route);
    }, [route, setRouteName])
    

    return user.login 
        ? children
        : <Navigate to="/" />
}

export default PrivateRoute