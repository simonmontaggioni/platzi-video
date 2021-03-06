import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = ( props ) => {

    const { user } = props;
    const isUserLogged = Object.keys( user ).length > 0;

    const handleLogout = () => {
        props.logoutRequest( {} );
    };

    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={ logo } alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        isUserLogged 
                        ?
                        <img src={ gravatar( user.email ) } alt={ user.email }/>
                        :
                        <img src={ userIcon } alt=""/>
                    }
                </div>
                <div className="header__menu--list">
                    <ul>
                        {
                            isUserLogged
                            ?
                            <li><a href="/"> { user.email} </a></li>
                            :
                            null
                        }
                        <li>
                            {
                                isUserLogged
                                ?
                                <a href='#' onClick={ handleLogout }> Cerrar Sesión </a>
                                :
                                <Link to="/login"> Iniciar Sesión </Link>
                            }
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    );

};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest
};

export default connect ( mapStateToProps, mapDispatchToProps ) (Header);