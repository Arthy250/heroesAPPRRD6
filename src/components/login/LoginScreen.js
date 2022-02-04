import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleClick = () => {
        const actionLogin = {
            type: types.login,
            payload:{ name:'Arturo' }
        }
        dispatch(actionLogin);
        navigate(lastPath, {replace: true});
    }

    return (
        <div className='container mt-5'>
            <h1>Hola desde LoginScreen</h1>
            <hr/>

            <button className='btn btn-primary' onClick={handleClick}>Click aquí</button>
        </div>
    )
}
