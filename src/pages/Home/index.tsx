import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useGetShortList } from '../../state/gs/hooks';

const Home: React.FC = () => {

    const shortlist = useGetShortList();
    
    //test render on homepage
    // const testrenders = shortlist.map((d, i)=>{
    //     return (<li key={i}>{d.Ticker}</li>)
    // })
    return (
            <>
                ma homies
            </>
    )
}


export default Home