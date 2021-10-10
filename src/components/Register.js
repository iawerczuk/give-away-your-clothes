import React from 'react';

import HeaderActions from './Home/HeaderActions';
import HeaderNav from './Home/HeaderNav';
import TitleDecor from './utils/TitleDecor';
import LoginButton from './utils/LoginButton';
import RegisterButton from './utils/RegisterButton';

const Register= () => {
    return (
        <div className='log'>
            <HeaderActions/>
         <HeaderNav/>
        <div className='log-in'>
            <TitleDecor>
                Załóż konto
            </TitleDecor>
            <form className='login'>
                <div className='form-inputs'>
                <label>
                    Email
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder=""
                    />
                </label>
                <label>
                    Hasło
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder=""
                    />
                </label>
                <label>
                    Powtórz hasło
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder=""
                    />
                </label>
                </div>
            </form>

            <div className='give-away'>
                <LoginButton>
                    zaloguj się
                </LoginButton>
                <RegisterButton>
                    załóż konto
                </RegisterButton>
            </div>
         </div>
    </div>
    )
}

export default Register;