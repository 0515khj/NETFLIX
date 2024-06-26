import styled from "styled-components";


export const HeaderWrap = styled.div`
::placeholder{
    padding-left: 10px;
    font-family:fantasy;
    letter-spacing:3px;
}
background: #000;
color:#fff;
position: relative;
border-bottom: 1px solid #fff;
width:100%;
margin:auto;

.main{height:80px;
    display:flex;
    align-items:center;
    .middle {
        position:absolute;top:10px; right:20px;
    display:flex; justify-content:center;

    li{list-style: none; margin-right:20px; 
        a {
    text-decoration: none; 
            color:#fff;
            &:hover{
                color:red;
            }
          }
        }
}
}
.topleft {display:flex;
    .barbtn{
        background: none;
        color: #fff;
        font-size:20px;
        margin-right:10px;
    }
h1{
    img{
        width:100px; height:60px;
    }
}



}
.topright{ display:flex;
    position:absolute;top:50%; right:30px;

    button{
        background: none;
        color:#fff;
        font-size:20px;
        cursor: pointer;
    }
    .seebtn{
            margin-right:10px;
    }
    .jumbtn{
    }
    ul{position: absolute; top:55px; right:-25px; 
        z-index:100;
        width:200px;
        height:auto;
        

        li{ border: 1px solid #fff;
            padding-left: 10px;
            padding-right:px;
            height:50px;
            color:#fff;
            display:flex;
            align-items:center;
            background: rgba(0,0,0,0.7);
            &:hover {background: rgba(255,255,255,0.8);
                cursor: pointer;
                color:#E65100;
                border: 1px solid #000;
            span{border-bottom: 3px solid #6A1B9A;}
            }
        span{margin-right: 8px; 
           
        }
        
            
    }
    }
}

@media (min-width:768px)and (max-width: 1024px) {
    
}
@media (min-width:479px)and (max-width: 768px) {
    .topleft {
h1{
    img{
        width:80px; height:50px;
    }
}}
    .middle{
        li{font-size:13px;}
    }
    .topright{
            input{ width:110px;}
            ul{ width:150px;
            font-size:13px;
                li{height:40px;}
        }
    }
}
@media all and (max-width:479px) {
   .topleft {
h1{
    img{
        width:80px; height:50px;
    }
}}
    .middle{
        li{font-size:13px;}
    }
    .topright{
            input{ width:110px;}
            ul{ width:150px;
            font-size:13px;
                li{height:40px;}
        }
    }
}

`