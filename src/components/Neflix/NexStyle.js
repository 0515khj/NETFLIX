import styled from "styled-components";

export const NetflixListWrap = styled.div`

`


export const NetflixItemWrap = styled.div`
.inner{width:100%;
   margin:auto;
   overflow:hidden;
   position: relative;
   h2{font-size:20px; padding:20px 0; 
      font-weight:900; font-family:'Courier New', Courier, monospace;}

   button{background: none; color:#fff; 
      font-size:40px; cursor: pointer;
         padding: 10px; border:none; 
         margin-right:10px;   
         position:absolute; top:55%;
         transform:translateY(-50%);
         z-index: 90;
         width:60px; height:60px;

         &:hover{
            background: #fff;
            opacity:0.7;
            color:#000;
            border-radius:50%;
         }
   }
   .prevbtn{
      left:10px;
   }
   .nextbtn{
      right:10px;
   }
}

.image{ display:flex; transition: margin-left 0.5s ease-out; 
  
  
}

img{width:200px; height:200px; 
   margin-right: 10px;
   cursor: pointer;
   transition:0.5s;
   &:hover{
      transform:scale(1.2);
      z-index:10;
   }
}

.modal {
   line-height:1.5;
   position:fixed; top:50%; left:50%;
   transform:translate(-50%,-50%);
   background: rgba(255,255,255,0.8);
   color:#000;
   z-index:100;
   padding:20px;
   border-radius:8px;
   display:flex;
   img{
      &:hover{
         transform:scale(1);
      }
   }
}

.modal-content {
   display:flex; flex-direction:row; 
   align-items:flex-start;
   .popleft{
      flex:1;
      img{
         width:100%;
         max-width:200px;
         height:200px;
      }
   }

   .popright{
      flex:2;
      display:flex;
      flex-direction:column;
      padding:0 20px;
      .popinfo{ margin-bottom:20px;}
      p{margin:0; font-size:1rem;}
      .popsinob{flex-grow:1; position: relative;
         /* display: -webkit-box; 
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 */;
           height:150px; overflow:hidden; text-overflow:ellipsis; 
         }
      }
   }
   button{ 
      background: none; cursor: pointer; font-size:20px; font-weight:800;
      font-family:'Times New Roman', Times, serif;
      &:hover{ background: #000; color:#fff; border-radius:20px;}
}
.modal-content .info { margin-left: 10px;}
.modal-content .info p { margin:50px 0 ;}

.back {
   position:fixed; top: 0;left: 0;bottom:0 ;right: 0;
   background: rgba(0,0,0,0.5);
   z-index:99;
}

@media (max-width:728px) {
      img {width:200px;}
      .modal { width:330px;}
/* 
      .popsinob{

         button{
            position:absolute; left: 0; bottom: -30px;
         }
      } */
}

`

export const NetflixDetailWrap =styled.div`

   .main {position: relative;
            height: 100vh;
            background: #000;
            overflow:hidden;
   }


   .inner {
height: 100%;
display: flex; 
position: relative;
  

      .detail{
         width: 100%;
         height:auto;
         overflow:hidden;
position: relative;
         .left{ 
            .btn{
               display:flex;
               button{height:50px; width:100px; border-radius:8px;
                  vertical-align:center;
                  justify-content:center;
                  align-items:center;
                  display:flex;
                  margin-left: 20px;
                  font-size:15px;
                  cursor: pointer;
               }
               .playbtn { &:hover { background: #000; color:#fff; border: 1px solid #fff;}}
               .infobtn { background: #999; color:#fff; }

            }
            .info2{display:flex; margin-bottom:20px;
            p {margin-right: 30px;}}
            position: absolute; 
width: 40%; 
height: 100%; 
top: 0;
left: 0;
    z-index: 10; 
    background-color: rgba(0, 0, 0, 0.5); 
padding: 20px;
display: flex;
    flex-direction: column;
           .info{ color: #fff; 
      text-align: left;
      margin:20px;
              h2{ font-size:60px; font-weight:900; font-family:serif;
               color:beige;margin-bottom:30%;
               }
               p{ line-height:1.5; font-size:20px;}

           }
           .sum{ margin-bottom:20px;}
         }
         .right {
width: 100%; 
height: 100%; 
position: absolute;
top: 0;
left: 0;
    z-index: 5;
    img {
      position:absolute; right: 0;
      width: 55%;
height:100%;
      /* object-fit: cover;  */
    }
  }
      }
   }
   @media (max-width: 728px) {
  .detail {
    overflow: hidden;
    height: auto; 
  }
  .right {
   img{
   }
  }
}




  
`