import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useGetShortList } from '../../state/gs/hooks';
import HorizontalPriceSection from '../../components/sections';

const Home: React.FC = () => {

    const shortlist = useGetShortList();
    
    return (
        <>
            <HorizontalPriceSection title="CEX">
                    hellos homies
                </HorizontalPriceSection>
            
            <HorizontalPriceSection title="DEX">
                    hellos homies
                </HorizontalPriceSection>
        </>
    )
}


export default Home