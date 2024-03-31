import React, { useState } from 'react';
import { NetflixItemWrap } from './NexStyle';
import { VscChevronRight,VscChevronLeft  } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';



const NetflixItem = ({item}) => {
    const {title , img} = item
    const [idx , setIdx] = useState(0);
    const [pop , setPop] = useState(false);
    const [popupIdx, setPopupIdx] = useState(0);


    const navigate = useNavigate();

    const gogodetail = (img1) =>{
        navigate(`/detail/${img1.id}`,{state:{imgdetail:img1}});
    }

    const clickprev = () =>{
        setIdx(idx > 0 ? idx -1 : img.length -1);
    };

    const clicknext = () =>{
      setIdx(idx < img.length -1 ? idx + 1 :0);
    }

    const toggle = (index) =>{
        setPopupIdx(index);
        setPop(true);
    }

    const imgsize = 210;
    const marginLeft = -idx * imgsize;

    /* const clickimg = () =>{
        addEventListener('click',e=>{
            e.target.classList.replace('','pop')
        })
    } */

    return (
        <NetflixItemWrap>
            <div className="inner">

            <h2>{title}</h2>

           <button onClick={clickprev} className='prevbtn' ><VscChevronLeft /></button>

            <div className="image" style={{marginLeft:marginLeft , width: img.length * imgsize}}>
            {
                img.map((imags , index)=> (<img key={index} src={imags.imageUrl} alt="" onClick={()=>toggle(index)}/>))
            }
            </div>
            <button onClick={clicknext} className='nextbtn'  ><VscChevronRight /></button>

            </div>
            {
                pop && (
                    <div className="modal">
                        <div className="modal-content">

                            <div className="popleft">
                            <img src={img[popupIdx].imageUrl} alt="" />
                            </div>

                            <div className="popright">
                                <div className="popinfo">
                            <p>제목: {img[popupIdx].filmTitle}</p>
                            <p>개봉일: {img[popupIdx].releaseDate}</p>
                            <p> {img[popupIdx].rating}</p>
                                </div>
                            <div className="popsinob">
                            <p>시놉시스 : {img[popupIdx].summary}</p>
                            </div>
                            <button onClick={()=>gogodetail(img[popupIdx])}>영화보기</button>
                            </div>
                            
                            {/* <button onClick={()=>setPop(false)}>&times;</button> */}
                        </div>
                    </div>
                )
            }
            {pop && ( <div className="back" onClick={()=>setPop(false)}> </div> )}

        
        </NetflixItemWrap>
    );
};

export default NetflixItem;