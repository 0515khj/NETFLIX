import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/module/authSlice";
import { LoginWrap } from "./LoginStyle";
import Footer from "./Footer";


const Login = () => {

    const [user , setUser] = useState({
        email:'', password:''
    })
    const {email,password}=user;
    const emailref=useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = e =>{
        e.preventDefault();
        if(!email || !password) return
        setUser({
            email:'',
            password:''
        })
        dispatch(login(user))
        navigate('//')
        emailref.current.focus()
    }

    const onInput = e =>{
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value,
        })
    }


    return (
        <LoginWrap>
            <div className="inner">
            <h2>LOGIN</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label> 이메일 </label>
                    <input type="email" name='email' ref={emailref} onChange={onInput} value={email} placeholder="aaa@naver.com" />
                </p>
                <p>
                    <label> 비밀번호 </label>
                    <input type="password" name="password" ref={emailref} onChange={onInput} value={password} placeholder="****" />
                </p>
                <p><button type="submit"> LOGIN </button></p>
            </form>
            </div>
            <Footer/>
        </LoginWrap>
    );
};

export default Login;