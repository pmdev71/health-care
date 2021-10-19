import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>
                <img src="https://www.seekpng.com/png/detail/254-2549937_page-not-found-emmbrook-junior-school.png" alt="" />
            </div>
            <Link to="/home"><button className="btn btn-primary">HOME</button></Link>

        </div>
    );
};

export default NotFound;