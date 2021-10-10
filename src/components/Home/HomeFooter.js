import React from 'react';

import facebook from '../../assets/Facebook.svg';
import instagram from "../../assets/Instagram.svg";

const HomeFooter= () => {
    return (
        <section className="home-footer">
            <div></div>
            <div><p>Copyright by Coders Lab</p></div>
            <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
            </div>
        </section>
    )
}

export default HomeFooter;