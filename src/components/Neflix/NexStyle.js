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



@media all and (min-width:480px) and (max-width: 767px){
         img {width:200px;}
      .modal { width:430px;}
         }
@media all and (max-width:480px) {
      img {width:200px;}
      .modal { width:330px;}
} 


`

export const NetflixDetailWrap =styled.div`
  .main {position: relative;
            width:100%;
            height: 850px;
            background: #000;
            overflow:hidden;
   }

   .detailbottom{
      position:absolute; top: 70%; left:100px;
      width: 100%;
      height: 250px;
      overflow:hidden;
      color:#fff;
      z-index:100;
      h2{font-size:30px; }
      
      img{
         padding:10px;
         height:200px;
         width:200px;
         transition:0.5s;
         margin-top: 10px;
         transition: 0.5s;
         cursor: pointer;
         &:hover{
            transform:scale(1.2);         }
      }

         button{ font-size:40px; border-radius:50%;
            width:50px; height: 50px;
            position:absolute; top: 60%;
            transform:translate(0,-60%);
            background: rgba(255,255,255,0.6);
            z-index:100;
            display:flex; align-items:center;
            cursor: pointer;
         }
         .prevbtn{ position:absolute;left:10px;}
         .nextbtn{position:absolute; right: 177px;}
   }


   .inner {
height: 100%;
overflow:hidden;
display: flex; 
position: relative;
  

      .detail{
         width: 100%;
         height:100%;
         overflow:hidden;
         position: relative;
         .left{ 
            height:auto;
            overflow:hidden;
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
      p{ line-height:1.5; }
      p.sum{ margin-bottom:20px; font-size:20px;}
      
   }
   .info .info2{display:flex; margin-bottom:20px;
      p {margin-right: 30px; font-size:20px;}
   }
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
         }
         .right {
width: 100%; 
height: auto; 
position: absolute;
top: 0;
left: 0;
    z-index: 5;
    img {
      position:absolute; right: 0;
      width: 60%;
      height:700px;
      -webkit-mask-image : linear-gradient(to left, rgba(0,0,0,1) 50%),
      rgba(0,0,0,0) 100%;
      mask-image : linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
    }
  }
      }
      
      @media (min-width: 1024px) {
         .detail{
            .left{
               .info{
                  /* h2{font-size:35px;} */
                  p.sum{
                     text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 8; 
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color:#BDBDBD;
                  }
           
                        }
                                 
                        .detailbottom{ 
     
      h2{ font-size:20px }
      }
        
   }
      }
   }
      @media all and (min-width:767px) and (max-width: 1023px){
         .detail{
            .left{
               .info{
                  h2{font-size:35px;}
                  p.sum{ font-size:20px;
                     text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 8; 
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color:#BDBDBD;
                  }
                  .info2{
                     p{
                        font-size:15px;}
                     }
               }
            }
            }
            .right {
               img{
                  
               }
            }

            .detailbottom{
            position:absolute; left:10px;
     
      h2{ font-size:20px }
      img{
         width:200px;
         padding-right:50px;
         height:200px;
         
       
        
      }
         button{ 
         }
         .prevbtn{ position:absolute;left:10px;}
         .nextbtn{position:absolute; right: 25%;}
   }
      }
      
      @media all and (min-width:479px) and (max-width: 767px){
         .detail{
            .left{
               .info{
                  h2{font-size:30px;}
                  p.sum{ font-size:15px;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 11; 
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color:#BDBDBD;
                  }
                  .info2{
                     p{
                        font-size:15px;}
                     }
                  }
            }
            }
            .right {
               img{
                  
               }
            }

         .detailbottom{
            position:absolute; left:10px;
     
      h2{ font-size:20px }
      img{
         width:200px;
         padding-right:20px;
         height:200px;
       
        
      }
         button{ 
         }
         .prevbtn{ position:absolute;left:10px;}
         .nextbtn{position:absolute; right: 40px;}
   }
         }
      
      
      @media all and (max-width:479px){
         .detailbottom{
            position:absolute; left:10px;
     
      h2{ font-size:20px }
      img{
         width:200px;
         height:200px;
       
        
      }
         button{ 
         }
         .prevbtn{ position:absolute;left:10px;}
         .nextbtn{position:absolute; right: 40px;}
   }
         .detail{
            .left{
               .info{
                  h2{font-size:25px;}
                  p.sum{ font-size:12px; color:#BDBDBD;}
                  .info2{
                     p{
                        font-size:15px;}
                     }
                  }
            }
            }
            .right {
               img{
                  
               }
            }
         }
      @media all and (max-width:394px){
         .detailbottom{
            position:absolute; left:10px;
     
      h2{ font-size:20px }
      img{
         width:170px;
         height:200px;
       
        
      }
         button{ 
         }
         .prevbtn{ position:absolute;left:10px;}
         .nextbtn{position:absolute; right: 40px;}
   }
         .detail{
            .left{
               .info{
                  h2{font-size:25px;}
                  p.sum{ font-size:12px; color:#BDBDBD;}
                  .info2{
                     p{
                        font-size:15px;}
                     }
                  }
            }
            }
            .right {
               img{
                  
               }
            }
         }
      }
`