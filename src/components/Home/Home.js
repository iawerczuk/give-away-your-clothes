import React from 'react';

import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAbout from './HomeAbout';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactFooter from './HomeContactFooter';

const Home= () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAbout/>
            <HomeWhoWeHelp/>
            <HomeContactFooter/>
        </>
    )
}

export default Home;