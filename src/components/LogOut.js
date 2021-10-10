import React from 'react';
import { Link } from "react-router-dom";


import HeaderActions from './Home/HeaderActions';
import HeaderNav from './Home/HeaderNav';
import TitleDecor from './utils/TitleDecor';
import LoginButton from './utils/LoginButton';

const LogOut= () => {
    return (
        <>
        <HeaderActions/>
        <HeaderNav/>
        <div className='title-logout'>
            <TitleDecor>
                Wylogowanie nastąpiło <br></br> pomyślnie
            </TitleDecor>
        </div>
        <div  className='button-logout'>
            <LoginButton>
            <Link to='/'>
                Strona główna
            </Link>
            </LoginButton>
         </div>
        </>
    )
}

export default LogOut;