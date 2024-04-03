import React, { useRef, useState } from 'react';
import { HeaderWrap } from './headerStyle';
import {  Link, useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaBars , FaRandom } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { GoHomeFill } from "react-icons/go";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { RiMovieLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

const Header = () => {

    const [open , setOpen]=useState(false);
    const [menu , setMenu]=useState(false);
    const [select , setSelect]=useState(0);
    const navigate = useNavigate();


    const MenuOption=[
    {name:"홈" , icon:<GoHomeFill /> , path:"//"},
    {name:"콘텐츠 랜덤재생" , icon:<FaRandom />, path:"//"},
    {name:"TV프로그램" , icon:<PiTelevisionSimpleBold />, path:"//"},
    {name:"영화" , icon:<RiMovieLine />, path:"//"},
    {name:"내가 찜한 콘텐츠", icon:<TiPlus />, path:"//"},
]


    const toggle = () =>{
        setMenu(!menu);
    }

    const menuclick=(khj)=>{
        setMenu(false);
        setSelect(khj)
        navigate(khj.path)
    }

    const seeopen = () =>{
        setOpen(!open);
    }
   


    return (
        <HeaderWrap>
            <div className="main">

            <div className="bar"></div>
            <div className="topleft">
                <button className='barbtn'><FaBars /></button>
                <h1><Link to="//"><img src="./images/logo2.jpg" alt="" /></Link> </h1>
            </div>

            <div className="topright">
                {open && <input type="text" placeholder='Serch' />}
                <button className='seebtn' onClick={seeopen}><HiOutlineMagnifyingGlass /></button>


                <button className='jumbtn' onClick={toggle}><TfiMoreAlt /></button>
                {menu && ( <ul>{MenuOption.map((item , index)=>
                ( <li key ={index} onClick={()=> menuclick(item)}> <span>{item.icon}</span>{item.name}</li> ))}</ul> )}
            </div>

            </div>

        </HeaderWrap>
    );
};

export default Header;