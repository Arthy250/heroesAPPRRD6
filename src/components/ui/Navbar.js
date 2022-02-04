import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);
    const nombreUsuario = user.name;
    
    const navigate = useNavigate();

    const handleLogOut = () => {
        const actionLogout = {
            type: types.logout
        }
        dispatch(actionLogout);

        navigate('/login', {replace:true});
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" }
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" }
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={(navData) => navData.isActive ? "active" : "" }
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>{nombreUsuario}</span>

                    <button 
                        className={(navData) => navData.isActive ? "active" : "" }
                        className="nav-item nav-link btn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}