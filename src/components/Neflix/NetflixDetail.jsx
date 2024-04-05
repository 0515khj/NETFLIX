import React, { useEffect, useState } from 'react';
import { NetflixDetailWrap } from './NexStyle';
import { useLocation } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { VscChevronRight,VscChevronLeft  } from "react-icons/vsc";
import netdetaildata from '../../assets/api/netdetaildata';



const NetflixDetail = () => {
    const [detaildata , setDetaildata] = useState(netdetaildata[0]);
    const [movieList, setMovieList] = useState([]);
    const [pro , setPro] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const location = useLocation();

    const imageToShow = 7; 
    const totalImages = detaildata.img.length;
    
    const {imgdetail} = location.state || {};

    const prevclick = ()=>{
        setPro(prev => prev > 0 ? prev - 1 : totalImages - imageToShow);
    }
    const nextclick =() =>{
        setPro(prev => prev < totalImages - imageToShow ? prev + 1 : 0);
    }


    useEffect(() =>{
        const  fetch = async () =>{
            const data=[];
            setMovieList(data); 
        }
        fetch();
    },[]);
    const goclick=()=>{
        alert('영화 준비중...')
    }


    

    return (
        <NetflixDetailWrap>
    <div className="main">

        <div className="inner">

            <div className="detail">
                    
                <div className="left">
                    <div className="info">
                    <h2>{imgdetail.filmTitle}</h2>

                    <div className="info2">
                    <p>{imgdetail.rating}</p>
                    <p>{imgdetail.releaseDate}</p>
                    </div>

                    <p className='sum'>{imgdetail.summary}</p>
                    
                    </div>
                    <div className="btn">
                    <button className='playbtn' onClick={goclick}><FaPlay />  재생</button>
                    <button className='infobtn'><IoMdInformationCircle />  상세정보</button>
                    </div>
                </div>{/* left */}
                
                <div className="right">
                    <img src={imgdetail.imageUrl} alt=""/>
                </div>{/* right */}

            </div>{/* 디테일 */}

        <div className="detailbottom">
            <h2>{detaildata.title}</h2>

            <button className='prevbtn' onClick={prevclick}><VscChevronLeft /></button>

                <div className="image-slider"> 
                {detaildata.img.slice(pro, pro + imageToShow).map((image, index) => 
                ( <a href="/"><img key={index} src={image.imageUrl} alt="" /></a>))} 
                </div>

            <button className='nextbtn' onClick={nextclick}><VscChevronRight /></button>
        </div>

        </div> {/* 이너 */}

    </div> {/* 메인 */}

        </NetflixDetailWrap>
    );
};

export default NetflixDetail;