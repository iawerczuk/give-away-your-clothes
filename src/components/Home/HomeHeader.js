import React from 'react';

import HeaderActions from './HeaderActions';
import HomeHeaderMain from './HeaderMain';
import HeaderNav from './HeaderNav';

const HomeHeader= () => {
    return (
         <section className="header">
            <HeaderActions/>
            <HeaderNav/>
            <HomeHeaderMain/>
          </section>
    )
}

export default HomeHeader;