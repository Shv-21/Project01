import styled from "styled-components"
import Collection01 from '../../public/Image/4Q5A9021.jpg';
import Collection02 from '../../public/Image/4Q5A9257-desktop.jpg';
import { IoIosArrowRoundForward } from "react-icons/io"; 

const Collection = () => {
  return (
    <Div>
       <div className="CompoentsCollection">
         <span>Components & parts Collection</span>
         <h1 className="Collection_Slogan">through the city with style and extra power</h1>
         <img src={Collection01} alt="" />
         <button className="exploreCollection">explore collection <IoIosArrowRoundForward /></button>
       </div>
       <div className="GravelbikesCollection">
         <span>Gravelbikes Collection</span>
         <h1 className="Collection_Slogan">made for endless adventures</h1>
         <img src={Collection02} alt="" />
         <button className="exploreCollection">explore collection <IoIosArrowRoundForward /></button>         
       </div>
    </Div>
  )
}

const Div = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 15px;
 margin-inline: 40px;

 .CompoentsCollection, .GravelbikesCollection{
   display: flex;
   flex-direction: column;
   position: relative;
 }

 span{
   font-family: FontAG_Regular;
   text-transform: capitalize;
   margin-bottom: 10px;
 }

 .Collection_Slogan{
   font-family: FontAG_Bold;
   text-transform: uppercase;
   line-height: 1.4cap;
 }

 .CompoentsCollection img, .GravelbikesCollection img{
   width: 100%;
   height: 32vw;
   margin-top: 15px;
   border-radius: 2px;
   object-fit: cover;
 }

  .exploreCollection{
    position: absolute;
    padding: 10px 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;
    background: white;
    font-family: FontNG_Hel;
    font-size: 18px;
    border-radius: 5px;
    bottom: 15px;
    left: 15px;
  }

  .exploreCollection svg{
    scale: 1.4;
  } 

  @media (max-width: 321px){
      flex-direction: column;
      margin-inline: 15px;
      margin-block: 35vw 40vw; 
      gap: 12vw;

      .Collection_Slogan{
        font-size: x-large;
        font-family: FontAG_Extrabold;
      }

      .CompoentsCollection img, .GravelbikesCollection img{
        height: 70vw;
        border-radius: 5px;
      }

      .exploreCollection{
        font-size: 16px;
      }

      .exploreCollection svg{
        scale: 1.2;
      }

    }

`

export default Collection