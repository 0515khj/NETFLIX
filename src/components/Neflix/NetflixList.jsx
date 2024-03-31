import React from 'react';
import { NetflixListWrap } from './NexStyle';
import NetflixItem from './NetflixItem';

const NetflixList = ({data}) => {
    return (
        <NetflixListWrap>
            
            {
                data.map(item=> <NetflixItem key={item.id} item={item}/>)
            }
        </NetflixListWrap>
    );
};

export default NetflixList;