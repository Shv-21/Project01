import React from 'react';
import styled from 'styled-components';
import HeroBackground from '../../public/Image/HeroBackground.jpg';

const Hero = () => {
  return (
    <Div>
      <h1>zweirad stenger</h1>
      <img src={HeroBackground} alt="HeroBackground" />
    </Div>
  )
}

const Div = styled.div`
margin-top: 140px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  h1{
    font-family: FontAG_Extrabold, sans-serif;
    font-size: 260px;
    line-height: 190px;
    height: fit-content;
    text-transform: uppercase;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  img{
    object-fit: cover;
    object-position: 60% 50%;
    width: 97vw;
    height: 50vw;
    border-radius: 2px;
    /* margin: 0 10px; */
  }
`
export default Hero