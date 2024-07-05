import React from 'react';
import styled from 'styled-components';
import cycle01 from '../../public/Image/cycle02.jpeg';
import helmet from '../../public/Image/Helmet.jpg';
import { MdCompareArrows } from "react-icons/md";

const BestSellers = () => {

     const SliderSetting = {
        slidesPerView : 1,
        breakpoints:{
          480:{
            slidesPerView : 1,
          },
          600:{
            slidesPerView : 2,
          },
          769:{
            slidesPerView : 3,
          },
          1100:{
            slidesPerView : 4,
          },
        },
      }

  return (
    <Div>
        <div className="BestSeller_Heading">
            <h1>Bestsellers</h1>
            <div className="BestSelling_buttons">
                <button className='sale'>SALE</button>
                <button className='new'>NEW</button>
                <button className='inStock'>IN STOCK</button>
            </div>
        </div>
        <div className="BestSelling_cycles">
           <div className="BestSelling_cycle BestSelling_cycle01">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01">
                <div className="Detail_Name">broam 30 2022</div>
                <div className="Detail_Feature">flet</div>
              </div>
              <div className="Detail_Side02">
                <div className="Detail_newPrice">€1,749.00</div>
                <div className="Detail_oldPrice">€2,200.00</div>
              </div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"><MdCompareArrows/></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle02">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle03">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle04">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle05">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle06">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle07">
            <div className="BestSelling_cycle_Detail">
              <div className="Detail_Side01"></div>
              <div className="Detail_Side02"></div>
            </div>
            <img src="" alt="" />
            <div className="BestSelling_cycle_buying_button">
              <div className="viewButton"></div>
              <div className="compareButton"></div>
            </div>
           </div>
        </div>
    </Div>
  )
}

const Div =  styled.div`

    margin-top: 160px;
    overflow-x: hidden;

    /* cycle sizing and position */

    .BestSelling_cycles img{
      width: 100%;
      object-fit: cover;
      margin: 100px 0;
    }

    .cycle01 img{
      margin: 64px 0;
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

    /* .swiper-slide:first-of-type  .toggleButton button{
      background: #E82525;
      color: white;
      border-radius: 5px;
    } */

    /* cycles */

    .Detail{
      display: flex;
      align-items: center;
    }

    .Detail_Side01, .Detail_Side02{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .Detail_Name{
      font-family: FontAG_Extrabold;
      font-size: x-large;
      line-height: 1.4cap;
      text-transform: uppercase;
    }

    .Detail_newPrice, .Detail_oldPrice{
      font-family: FontNG_Nor;
      font-size: medium;
    }

    .Detail_Fecture{
      font-family: FontAG_Regular;
      text-transform: capitalize;
    }
`

export default BestSellers