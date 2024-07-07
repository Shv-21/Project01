import React from 'react';
import styled from 'styled-components';
import backGroundimg from '../../public/Image/Q5A6130.webp'; 
import helmet from '../../public/Image/Helmet.jpg';

const HighLight = () => {
  return (
    <Div>
      <div className="hightLight_Poster">
        <div className="Poster_Detail">
           <div className="Side01">
            <div className="Poster_Name">camber hlmt ce</div>
            <div className="Poster_Type">specialized</div>
           </div>
           <div className="Side02">
            <div className="Poster_Price">€65,00</div>
           </div>
        </div>
        <img src={helmet} alt="" />
        <button className="Poster_View">view</button>
      </div>
    </Div>
  )
}

const Div = styled.div`
    background: url(${backGroundimg}) no-repeat;
    height: 50vw;
    background-size: cover;
    background-position: 47% ;
    position: relative;
    margin-top: 170px;
    margin-inline: 15px;
    border-radius: 3px;

    .hightLight_Poster{
        position: absolute;
        top: 90px;
        left: 30px;
        width: 400px;
        height: 450px;
        border-radius: 5px;
        padding: 15px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .Poster_Detail{
       width: 100%;
       display: flex;
       justify-content:space-between;
    }

    .Poster_Detail::before{
        content: "highlights";
        text-transform: uppercase;
        position: absolute;
        color: white;
        font-family: FontAG_Extrabold;
        font-size: 37px;
        top: -15%;
        left: 00px;
    }

    .Poster_Name{
        width: 100%;
        font-family: FontAG_Bold;
        font-size: x-large;
        line-height: 1cap;
        text-transform: uppercase;
    }

    .Poster_Type{
        font-family: FontAG_Regular;
        text-transform: capitalize;
        margin-top: 4px;
    }

    .Poster_Price{
        font-family: FontNG_Nor;
    }

    .hightLight_Poster img{
        width: 90%;
    }

    button{
        width: 100%;
        background-color: red;
        color: white;
        font-size: medium;
        padding: 12px;
        text-transform: uppercase;
        border-radius: 5px;
        font-weight: bold;
    }

`

export default HighLight