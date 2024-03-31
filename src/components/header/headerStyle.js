import styled from "styled-components";


export const HeaderWrap = styled.div`
background: #000;
color:#fff;
position: relative;
border-bottom: 1px solid #fff;
width:100%;
margin:auto;

.main{height:80px;
    display:flex;
    align-items:center;
}
.topleft {display:flex;
    /* align-items:center; */
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
    position:absolute; right:30px; /* top:50%; */
    /* transform:translateY(-50%); */

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
}

`