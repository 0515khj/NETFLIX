import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/module/authSlice';
import { LogoutWrap } from './LoginStyle';
import Footer from './Footer';

const Logout = () => {

    const {authed , user} = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onGo = () =>{
        dispatch(logout());
        navigate(`/login`)
    }

    return (
        <LogoutWrap>
            <div className="inner">
            {
                authed && user ?
                <div className='on'>
                    <h2>방문해주셔서 감사합니다.</h2>
                    <h3><span>{user.username}님</span></h3>
                    <p><button onClick={onGo}>로그아웃</button></p>
                </div>
                :
                <div className='off'>
                    <h2>로그인 정보를 찾을수 없습니다.</h2>
                    <button onClick={()=>navigate('//')}>홈으로가기</button>
                </div>
            }        
            </div>
            <Footer/>    
        </LogoutWrap>
    );
};

export default Logout;