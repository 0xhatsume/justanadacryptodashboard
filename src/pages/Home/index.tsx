import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <div>Front Page Blah Blah. Pls wait while devs do something.</div>
            <NavLink to="/admin">Go to Admin Page</NavLink>
        </div>
    )
}

export default Home