import React from 'react';

import LoginButton from '../utils/LoginButton';
import RegisterButton from '../utils/RegisterButton';
import TitleDecor from '../utils/TitleDecor';

const HeaderMain = () => {
    return (
        <div className='header-main'>
            <div></div>
            <div className='header-txt'>
                <div className='header-title'>
                <TitleDecor>
                    Zacznij pomagać<br></br> oddaj niechciane rzeczy w zaufane ręce
                </TitleDecor>
                </div>
                <div className="buttons">
                    <LoginButton>
                        oddaj <br></br>rzeczy
                    </LoginButton>
                    <RegisterButton>
                        zorganizuj <br></br>zbiórkę
                    </RegisterButton>
                </div>
            </div>
        </div>
    )
};

export default HeaderMain