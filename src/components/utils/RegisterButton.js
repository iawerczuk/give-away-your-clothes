import React from 'react';
import { Link } from "react-router-dom";

const RegisterButton= (props) => {
    return (
        <Link to='/rejestracja'>
          <button className='register button'> 
                {props.children}
          </button>
        </Link>
    )
}

export default RegisterButton;