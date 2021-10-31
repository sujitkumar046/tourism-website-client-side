import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h2>This page doesn't exist</h2>
            <Link to='/home'>
                <button className='btn btn-success'>Go to HomePage</button>
            </Link>
            
        </div>
    );
};

export default PageNotFound;