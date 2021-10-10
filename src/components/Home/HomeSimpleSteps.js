import React from 'react';

import LoginButton from '../utils/LoginButton';
import TitleDecor from '../utils/TitleDecor';

import icon1 from '../../assets/shirt.png';
import icon2 from '../../assets/download.png';
import icon3 from '../../assets/Icon.png';
import icon4 from '../../assets/reload.png';
 
const HomeSimpleSteps= () => {
    return (
        <>
        <section className="steps-container" id='simple-steps'>
            <TitleDecor>
                Wystarczą 4 proste kroki
           </TitleDecor>
            <div className="steps">
                <div className="step">
                    <img src={icon1} alt='wybierz rzeczy'></img>
                     <h3>Wybierz rzeczy</h3>
                     <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <img src={icon2} alt='Spakuj je'></img>
                     <h3>Spakuj je</h3>
                     <p>skorzystaj w worków na śmieci</p>
                </div>
                <div className="step">
                    <img src={icon3} alt='zdecyduj komu chcesz pomóc'></img>
                     <h3>Zdecydej komu chcesz pomóc</h3>
                     <p>wynierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <img src={icon4} alt='zamów kuriera'></img>
                     <h3>Zamów kuriera</h3>
                     <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
                <div className='give-away'>
                    <LoginButton>
                        oddaj <br></br>rzeczy
                    </LoginButton>
                </div>
              </section>
          </>
    )
}

export default HomeSimpleSteps;