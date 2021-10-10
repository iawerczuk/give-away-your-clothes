import React from 'react';

const Pagination = ({ postsPerPage, totalPosts}) => {
    const pageNumbers=[];

    for (let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {pageNumbers.map(number =>{
                <li key={number} className="page-part">
                    <a href='!' className= "link-page">
                        {number}
                    </a>
                </li>
            })}
        </ul>
    );
};

export default Pagination;