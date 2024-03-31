import React, { useState } from 'react';
import { NetflixWrap } from './NetflixStyle';
import netflixdata from '../assets/api/netflixdata';
import NetflixList from '../components/Neflix/NetflixList';

const Netflix = () => {
    const [data, setData] = useState(netflixdata);

    return (
        <NetflixWrap>

            


            <NetflixList data={data}/>

        </NetflixWrap>
    );
};

export default Netflix;