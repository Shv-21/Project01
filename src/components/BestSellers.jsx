import React from 'react';
import styled from 'styled-components';
import cycle01 from '../../public/Image/cycle02.jpeg';
import helmet from '../../public/Image/Helmet.jpg';
import { MdCompareArrows } from "react-icons/md";

const BestSellers = () => {

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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle02">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle03">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle04">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle05">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle06">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
           <div className="BestSelling_cycle BestSelling_cycle07">
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
            <img src={cycle01} alt="cycle01" />
            <div className="BestSelling_cycle_buying_button">
              <button className="viewButton">view</button>
              <button className="compareButton">commpare<MdCompareArrows/></button>
            </div>
           </div>
        </div>
    </Div>
  )
}

const Div =  styled.div`

    margin-top: 160px;

    .BestSeller_Heading{
      display: flex;
      align-items: center;
      gap: 40px;
      margin-left: 40px;
    }

    h1{
      font-size: 80px;
      text-transform: uppercase;
      font-family: FontAG_Extrabold;
    }

    .BestSelling_buttons{
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .sale{
      background: black;
      font-family: FontAG_Regular;
      font-size: medium;
      padding: 12px 15px;
      border-radius: 5px;
      color: white;
    }

    .new, .inStock{
      padding: 12px 15px;
      border-radius: 5px;
      background: none;
      border: 1px solid black;
    }
    /* cycle container styling, sizing and position */

    .BestSelling_cycles{
      display: flex;
      overflow-x: scroll;
      scroll-behavior: smooth;
    }

    .BestSelling_cycles::-webkit-scrollbar{
      display: none;
    }

    .BestSelling_cycle{
      min-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      border-left: 1px solid gray;
      border-top: 1px solid grey;
    }

    .BestSelling_cycle:first-child{
      margin-left: 40px;
      border-left: unset;
    }

    .BestSelling_cycle:last-child{
      margin-right: 40px;
    }

    .BestSelling_cycle img{
      width: 90%;
      object-fit: cover;
      margin: 100px 0;
    }

    /* cycles */

     .BestSelling_cycle_Detail{
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
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

    .Detail_Feature{
      font-family: FontAG_Regular;
      text-transform: capitalize;
    }

    /* button */

    .BestSelling_cycle_buying_button{
      display: flex;
      width: 100%;
      gap: 10px
    }

    .BestSelling_cycle_buying_button button{
      width: 100%;
      background: #E82525;
      color: white;
      font-weight: 600;
      font-size: medium;
      text-transform: uppercase;
      border-radius: 5px;
      height: 50px;
      font-family: FontNG_Hel;
    }   

    .BestSelling_cycle_buying_button button:last-child{
      border-radius: 30px;
      background: #F0F0F0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      color: black;
    }
`

export default BestSellers