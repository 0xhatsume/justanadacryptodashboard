import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGetShortList } from '../../state/gs/hooks';

const Home: React.FC = () => {

    const shortlist = useGetShortList();
    
    //test render on homepage
    const testrenders = shortlist.map((d, i)=>{
        return (<li key={i}>{d.Ticker}</li>)
    })
    return (
        <div>
            <div>Front Page Blah Blah. Pls wait while devs do something.</div>
            <NavLink to="/admin">Go to Admin Page</NavLink>
            <br/>
            <br/>
            <ul style={{listStyleType:"none"}}>
                {testrenders}
            </ul>
        </div>
    )
}

export default Home