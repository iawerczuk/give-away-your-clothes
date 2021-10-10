import React from 'react'

import decoration from '../../assets/decoration.svg';

const TitleDecor =(props) =>{
    return (
        <div className={props.customClass ? props.customClass : ""}>
            <h2 className='title'>
                {props.children}
            </h2>
            <img src={decoration} alt=""/>
        </div>
    )
}

export default TitleDecor;