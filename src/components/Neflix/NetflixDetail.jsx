import React, { useEffect, useState } from 'react';
import { NetflixDetailWrap } from './NexStyle';
import { useLocation } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";



const NetflixDetail = () => {

    const location = useLocation();
    const {imgdetail} = location.state || {};
    
    const [movieList, setMovieList] = useState([]);

    useEffect(() =>{
        const  fetch = async () =>{
            const data=[];
            setMovieList(data); 
        }
        fetch();
    },[]);



    return (
        <NetflixDetailWrap>
    <div className="main">

        <div className="inner">

            <div className="detail">
                    
                <div className="left">
                    {/* <img src="./images/logo.jpg" alt="" /> */}
                    <div className="info">
                    <h2>{imgdetail.filmTitle}</h2>
                    <div className="info2">
                    <p>{imgdetail.rating}</p>
                    <p>{imgdetail.releaseDate}</p>
                    </div>
                    <p className='sum'>{imgdetail.summary}</p>
                    </div>
                    <div className="btn">
                    <button className='playbtn'><FaPlay />  재생</button>
                    <button className='infobtn'><IoMdInformationCircle />  상세정보</button>
                    </div>
                </div>
                
                <div className="right">
                    <img src={imgdetail.imageUrl} alt=""/>
                </div>

            </div>

        </div>

    </div>


        </NetflixDetailWrap>
    );
};

export default NetflixDetail;