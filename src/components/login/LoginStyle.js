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
.inner {position:absolute; top: 50%; left:45%;
    h2{font-size:50px; margin:50px 40px; font-weight:900; font-family:monospace;}
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
`