import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useGetShortList } from '../../state/gs/hooks';
import HorizontalPriceSection from '../../components/sections';

import PriceTable from '../../components/pricetables';

const Home: React.FC = () => {

    const shortlist = useGetShortList();
    
    return (
        <>
            <HorizontalPriceSection title="CEX">
                    <PriceTable />
                </HorizontalPriceSection>
            
            <HorizontalPriceSection title="DEX">
                    hellos homies
                </HorizontalPriceSection>
        </>
    )
}


export default Home