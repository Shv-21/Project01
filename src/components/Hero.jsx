import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../../public/Image/HeroBackground.jpg';
import cycle01 from '../../public//Image/cycle01.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdCompareArrows } from "react-icons/md";

const Hero = () => {

  // here i want to create a scrolling effect which moves img position in y axis Upward or downward based on scroll direction 
  useGSAP(()=>{
    gsap.to('#poster',{

    })
  })

  return (
    <Div>
      <h1>zweirad stenger</h1>
      <img id='poster' src={HeroBackground} alt="HeroBackground" />
      <div className="Recommed">
        {/* <h1>our</h1> */}
        <div className="Recommed_Poster">
          <div className='Recommed_Poster_content'>
            <div className='NamePrice'>
            <div className="Name">S-WORKS TARMAC SL8 - SRAM RED AXS</div>
            <div className="Price">€ 14,500.00</div>
            </div>
            <div className="year">2024</div>
            <span>specialized</span>
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

   margin-top: 140px;
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
    left: 40px;
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
     flex-direction: column;
     line-height: 22px;
    }
    
      /* cycle image size and position */

   #Recommed_Poster_image{
     width: 90%;
     height: 90%;
     object-fit: contain;
   }

   .Name, .year{
     font-family:FontAG_Extrabold;
     font-size: x-large;
   }

   span{
     font-family: FontAG_Regular;
     text-transform: capitalize;
     margin-top: 2px;
   }

   .NamePrice{
     display: flex;
     align-items: center;
     gap:10px;
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
    height: 50px;
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
    font-size: 260px;
    line-height: 190px;
    height: fit-content;
    text-transform: uppercase;
    margin-block-start: 0em;
    margin-block-end: 0em;
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
`
export default Hero