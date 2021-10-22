import React, { useState } from 'react';
import Pagination from './Pagination';
import TitleDecor from '../utils/TitleDecor';

const HomeWhoWeHelp = () => {
    const [posts, setPosts]=useState([]);
    const [loading, setLoading]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(3);

    return (
        <section className='help-main-container' id='who-we-help'> 
                <TitleDecor>
                    Komu pomagamy
                </TitleDecor>
                <div className="help-container">
                    <h2 className='title'>Fundacjom</h2>
                    <h2 className='title'>Organizacjom pozarządowym</h2>
                    <h2 className='title'>Organizacjom pozarządowym</h2>
                </div>
                <div className='help-content'>
                    <div className='fund-content'>
                    <div className="fundation">
                            <h2>Lorem ipsum 1</h2>
                            <p>lorem, ipsum, dolor</p>
                        </div>
                        <div className='items'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}/>
                     </div>
                     <div className='fund-content'>
                        <div className="fundation">
                            <h2>Lorem ipsum 1</h2>
                            <p>lorem, ipsum, dolor</p>
                        </div>
                        <div className='items'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                            <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}/>
                     </div>
                     <div className='fund-content'>
                     <div className="fundation">
                            <h2>Lorem ipsum 1</h2>
                            <p>lorem, ipsum, dolor</p>
                        </div>
                        <div className='items'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}/>
                     </div>
             </div>
        </section>
    )
}

export default HomeWhoWeHelp;