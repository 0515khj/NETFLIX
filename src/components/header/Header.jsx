import React from 'react';
import { HeaderWrap } from './headerStyle';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";

const Header = () => {
    return (
        <HeaderWrap>
            <div className="main">

            <div className="topleft">
                <button className='barbtn'><FaBars /></button>
                <h1><img src="./images/logo2.jpg" alt="" /></h1>
            </div>

            <div className="topright">
                <button className='seebtn'><HiOutlineMagnifyingGlass /></button>
                <button className='jumbtn'><TfiMoreAlt /></button>
            </div>

            </div>

        </HeaderWrap>
    );
};

export default Header;