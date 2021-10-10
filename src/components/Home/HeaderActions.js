import React from 'react';

import LoginButton from '../utils/LoginButton';
import RegisterButton from '../utils/RegisterButton';

const HeaderActions= () => {
    return (
        <section className="header-actions">
            <LoginButton>
                Zaloguj
            </LoginButton>
            <RegisterButton>
                Załóz konto
             </RegisterButton>
         </section>
    )
}

export default HeaderActions;