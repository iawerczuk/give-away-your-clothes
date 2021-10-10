import React from 'react';

import people from '../../assets/people.png';
import TitleDecor from '../utils/TitleDecor';
import signature from '../../assets/signature.svg';

const HomeAbout= () => {
    return (
            <section className="about-container" id="about">
                <div className="about-title">
                    <TitleDecor>
                        O nas 
                    </TitleDecor>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className='signature-div'>
                        <img className='signature' src={signature} alt=""/>
                    </div>
                </div>
                <div className='people-img'>
                     <img className='people' src={people} alt=""/>
                </div>
            </section>
    )
}

export default HomeAbout;