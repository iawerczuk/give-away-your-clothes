import React from 'react';
import { Link } from "react-router-dom";

const LoginButton=(props) => {
    return (
        <Link to='/logowanie'>
            <button className='give-away button'>
                 {props.children}
            </button>
        </Link>
    )
}

export default LoginButton;