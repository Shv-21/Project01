import React from 'react';
import styled from 'styled-components';
import herodesktop from '../../public/Image/desktop.jpg';
import heromobile from '../../public/Image/4Q5A9296-tablet.jpg';
import cycle01 from '../../public//Image/cycle01.png';
import { MdCompareArrows } from "react-icons/md";

const Hero = () => {

  return (
    <Div>
      <h1>zweirad stenger</h1>
      <img id='poster' src={herodesktop} alt="HeroBackground" />
      <div className="Recommed">
        <div className="Recommed_Poster">
          <div className='Recommed_Poster_content'>
            <div className='Nametype'>
             <div className="Name">S-WORKS TARMAC SL8 - SRAM RED AXS 2024</div>
             <span>specialized</span>
            </div>
            <div className="Price">€14,500.00</div>
          </div>
         <img id='Recommed_Poster_image' src={cycle01} alt="" />
         <div className="toggleButton">
          <button>VIEW</button>
          <button>COMPARE<MdCompareArrows/></button>
         </div>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

   margin-top: 9.1vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;

/* Recommed */

     /* code for ads poster position and width */

  .Recommed{
    position: absolute;
    width: 26%;
    left: 4%;
    top: 30%;
    padding: 14px;
    border-radius: 4px;
    height: 52%;
    background: white;
    font-family: FontNG_Nor;
    cursor: pointer;
  }

   /* code for contents positon */

   .Recommed_Poster{
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 100%;
   }

   /* Recommed_Poster_content is div for poster detail */
   
   .Recommed_Poster_content{
     display: flex;
     align-items: flex-start;
     line-height: 4cap;
    }
    
      /* cycle image size and position */

   #Recommed_Poster_image{
     width: 90%;
     height: 90%;
     object-fit: contain;
   }

   .Name{
     font-family:FontAG_Extrabold;
     font-size: x-large;
   }

   span{
     font-family: FontAG_Regular;
     text-transform: capitalize;
     margin-top: 2px;
   }

    /* button */

   .toggleButton{
    display: flex;
    width: 100%;
    gap: 10px
  }

  .toggleButton button{
    width: 100%;
    background: #E82525;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    height: 3vw;
    font-family: FontNG_Hel;
  }

  .toggleButton button:last-child{
    border-radius: 30px;
    background: #F0F0F0;
    color: black;
  }

/* Heading */
  
  h1{
    font-family: FontAG_Extrabold, sans-serif;
    font-size: 17vw;
    line-height: 1cap;
    height: fit-content;
    text-transform: uppercase;
    margin: 0;
  }

/* Poster */

  img{
    object-fit: cover;
    object-position: 60% 50%;
    width: 97vw;
    overflow: hidden;
    height: 50vw;
    border-radius: 2px;
  }

  @media (max-width:321px){

    margin-top: 25vw;

    .Recommed{
      width: 90%;
      height: fit-content;
      display: none;
      left: 5%;
    }

    #poster{
      content: url(${heromobile});
      width: 100vw;
      height: 155vw;
      object-position: 62% 50%;
    }

    .toggleButton button{
      display: none;
    }

    .Recommed_Poster{
      flex-direction: row-reverse;
    }

    .Recommed_Poster_content{
      flex-direction: column;
    }
  } 

`
export default Hero