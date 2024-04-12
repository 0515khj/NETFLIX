import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import{useDispatch} from "react-redux";
import { singup } from '../../store/module/authSlice';
import { JoinWrap } from './LoginStyle';
import Footer from './Footer';


const Join = () => {
    const [user , setUser]=useState({
        username:'',
        tel:'',
        email:'',
        password:''
    })

    const {username , tel , email , password} =user;

    const Ref = useRef();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const oninput = e =>{
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit = e =>{
        e.preventDefault()
        if(!username || !tel || !email || !password) return
        dispatch(singup(user))
        navigate(`/login`)
        setUser({username:'',tel:'',email:'',password:''})
        Ref.current.focus()
    }

    return (
        <JoinWrap>
            <div className="inner">
            <h2>회원가입</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label> 이름 : </label>
                    <input type="text" name='username' ref={Ref} onChange={oninput} value={username} placeholder='name' />
                </p>
                <p>
                    <label> 번호 : </label>
                    <input type="tel" name='tel'  onChange={oninput} value={tel} placeholder='tel' />
                </p>
                <p>
                    <label> 이메일 : </label>
                    <input type="email" name='email'  onChange={oninput} value={email} placeholder='aaa@naver.com' />
                </p>
                <p>
                    <label > 비밀번호 : </label>
                    <input type="password" name='password'  onChange={oninput} value={password} placeholder='****' />
                </p>
                <p>
                    <button type='submit'>회원가입</button>
                    <button onClick={()=>navigate(-1)}>취소</button>
                </p>
            </form>
            </div>
            <Footer/>
        </JoinWrap>
    );
};

export default Join;