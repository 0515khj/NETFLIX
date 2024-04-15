import styled from 'styled-components'


export const LoginWrap = styled.div`
::placeholder{
    color:red;
}
position: relative;
width:100%;
height:100%;
.inner {position:absolute; top: 50%; left:40%;
    h2{font-size:50px;  font-weight:900;
    display:flex;
    justify-content:center;
    margin:60px 0;
    }
    form{ 
        p{margin-bottom:70px;
            padding-bottom:10px;
            position: relative;
            font-size:20px;
            label{font-weight:600; font-size:25px;}
            input{
                padding-left:15px;
                position:absolute; top:100%; left:0;
                width:300px;
                height: 40px;
                background: #000;
                border-radius:8px;
                color:red;
                caret-color:#000;
               
            }
        }
        button{ cursor: pointer;
            width:250px;height:50px;
            margin:20px 40px;
            font-size:25px;
            border: 2px solid #000;
            border-radius:8px;
            background: none;
            font-weight:900;
            &:hover{
                background: #000;
                color:red;
            }
        }
    }
}
@media (min-width:768px)and (max-width: 1024px) {
    .inner{ position:absolute; top:0; left:15%;
        h2{margin:50px 35px;
            font-size:50px;}
        form{
            p{
                margin-bottom:60px;
                label{ font-size:20px;}
                input{ width:200px; height:30px;}
                button{ font-size:15px; width:100px; margin:0 5px;}
            }

        }
    }
}
@media (min-width:479px)and (max-width: 768px) {
    .inner{ position:absolute; top:0; left:38%;
        h2{margin:50px 32px;
            font-size:40px;}
        form{
            p{
                margin-bottom:40px;
                label{ font-size:20px;}
                input{ width:160px; height:20px;}
                button{ font-size:15px; width:80px; margin:0 5px;}
            }

        }
    }
}
@media all and (max-width:479px) {
    .inner{ position:absolute; top:0; left:30%;
        h2{margin:40px 50px;
            font-size:30px;}
        form{
            p{
                margin-bottom:50px;
                label{ font-size:18px;}
                input{ width:180px; height:30px;
                }
                button{ font-size:18px; width:150px; margin:0 20px;}
            }
        }
    }
}



`
export const LogoutWrap = styled.div`

position: relative;
width:100%;
.inner{
    height:0px;
    .on{position: relative;
        display:flex; justify-content:center;
        h2{margin:100px 0;  font-size:50px;}
        h3{span{
            margin-top:50px;
            font-size:25px;
            width:150px;
            height:40px;
            display:flex; justify-content:center; align-items:center;
            border: 2px solid red;
            border-radius:8px;
            background: #000;
            color:#fff;
            position:absolute; top: 150px; left:40%;}}
        p{button{
            margin-top: 50px;
            width:200px; height:43px; border-radius:8px;
            position:absolute;top:150px; left:50%; 
            border: 2px solid #000;
            background: none;
            font-size:25px;
            font-weight:700;
            cursor: pointer;
            &:hover{
                background: #000;
                color:red;
            }
        }}
    }
    .off{
        position: relative;
        display:flex; justify-content:center;
        h2{font-size:50px; margin-top: 150px;}
        button{ border: 2px solid #000; background: none; border-radius:8px;
        position:absolute; top:250px;
        width:250px; height:45px; font-size:25px; font-weight:700;
        cursor: pointer;

        &:hover{ background: #000; color:red;}
        }
    }
}


`
export const JoinWrap = styled.div`
::placeholder{
    color:red;
}
position: relative;
width:100%;
height:100%;
.inner {position:absolute; top: 50%; left:43%;
    h2{font-size:50px; margin:60px 90px; font-weight:900;}
    form{ 
        p{margin-bottom:70px;
            padding-bottom:10px;
            position: relative;
            font-size:20px;
            margin-top:10px;
            label{font-weight:600; font-size:25px;}
            input{
                padding-left:15px;
                position:absolute; top:100%; left:0;
                width:300px;
                height: 40px;
                background: #000;
                border-radius:8px;
                color:red;
                caret-color:#000;
                
            }
        }
        button{ cursor: pointer;
            width:100px;height:30px;
            margin:0 30px;
            border: 2px solid #000;
            border-radius:8px;
            background: none;
            font-weight:900;
            &:hover{
                background: #000;
                color:red;
            }
        }
    }
}

@media (min-width:768px)and (max-width: 1024px) {
    .inner{ position:absolute; top:0; left:15%;
        h2{margin:50px 35px;
            font-size:50px;}
        form{
            p{
                margin-bottom:60px;
                label{ font-size:20px;}
                input{ width:200px; height:30px;}
                button{ font-size:15px; width:100px; margin:0 5px;}
            }

        }
    }
}
@media (min-width:479px)and (max-width: 768px) {
    .inner{ position:absolute; top:0; left:37%;
        h2{margin:50px 50px;
            font-size:40px;}
        form{
            p{
                margin-bottom:40px;
                label{ font-size:20px;}
                input{ width:160px; height:20px;}
                button{ font-size:15px; width:80px; margin:0 5px;}
            }

        }
    }
}
@media all and (max-width:479px) {
    .inner{ position:absolute; top:0; left:30%;
        h2{margin:40px 50px;
            font-size:30px;}
        form{
            p{
                margin-bottom:40px;
                label{ font-size:18px;}
                input{ width:160px; height:20px;
                
                }
            }
        }
    }
}

`
export const FooterWrap = styled.footer`
width:100%;
height:100%;
position: relative;

.inner1{position:absolute; top: 700px; width:100%; height:151px; background: #000;
}
strong{color:red; font-size:100px; font-weight:900;
    display:flex; justify-content:center; line-height:1.3; letter-spacing:50px;
}

@media all and (min-width:768px)and (max-width: 1024px) {
    strong{ font-size:90px; 
    letter-spacing:10px;
    line-height:1.6;
}
}
@media all and (min-width:479px) and (max-width: 768px) {
    strong{ font-size:90px; 
    letter-spacing:10px;
    line-height:1.6;
}
}
@media all and (max-width:479px) {
   .input1{}
   strong{ font-size:50px; 
    letter-spacing:5px;
    line-height:3;
}
}

`