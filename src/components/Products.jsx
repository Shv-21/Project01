import React from 'react';
import styled from 'styled-components';
import Product01 from '../../public/Image/Product01.jpg';
import Product02 from '../../public/Image/Product03.jpg';
import Product03 from '../../public/Image/Bike_STenger1638.jpg';
import Product04 from '../../public/Image/4Q5A9021.jpg';
import { IoArrowForwardOutline } from "react-icons/io5";

const Products = () => {
  return (
    <Div>
      <h1>our products</h1>
      <div className='Products'>
        <div className="Product Product01">
          <img src={Product01} alt="" />
          <button>bikes <IoArrowForwardOutline/></button>
        </div>
        <div className="Product Product02">
          <img src={Product02} alt="" />
          <button>e-bikes <IoArrowForwardOutline/></button>
        </div>
        <div className="Product Product03">
          <img src={Product03} alt="" />
          <button>equipment <IoArrowForwardOutline/></button>
        </div>
        <div className="Product Product04">
          <img src={Product04} alt="" />
          <button>components & parts <IoArrowForwardOutline/></button>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  
  margin-top: 160px;
  padding: 0 40px;

  h1{
    font-family: FontAG_Extrabold;
    text-transform: uppercase;
    font-size: 5.3vw;
  }

/* below code is for product container(div.Products)  */

  .Products{
    border-radius: 5px;
    width: 100%;
    height: 500px;
    display: flex;
  }

/* Below code is for transition, size , Position of Product */
  
  .Products .Product{
    flex: 1;
    background-size: cover;
    position: relative;
    height: 100%;
    width: 100%;
    background-position: 50% 0;
    transition: all .5s;
    cursor: pointer;
  }

/* below code make all products dark */

  .Products:hover .Product{
    filter: brightness(.4);
  }

/* And this below code Keep the hoverd Product bright */

  .Products .Product:hover{
    flex: 1.4;
    filter: unset;
  }

/* below code is for image in Product */

  .Product img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }


  button{
    border: none;
    position: absolute;
    background: none;
    color: black;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 5px;
    cursor: pointer;
    font-family: FontAG_Extrabold;
    font-size: x-large;
    bottom: -40px;
  }

  @media (max-width: 321px) {

    margin-top: 100px;
    padding-inline: 0px;

    h1{
      font-size: 13vw;
      padding-inline: 15px;
    }

    .Products{
      overflow-x: scroll;
      /* overflow-y: hidden; */
      height: 400px;
      border-radius: unset;
      scroll-snap-type: mandatory;
      scroll-behavior: smooth;
    }

    .Products .Product{
      height: 350px;
    }

    .Product:first-child{
      padding-left: 15px;
    }

    .Product:last-child{
      padding-right: 15px;
    }

    .Products::-webkit-scrollbar{
      display: none;
    }

    .Product img{
      width: 260px;
      height: 100%;
    }

    .Products:hover .Product{
      filter: unset;
    }

    .Products .Product:hover{
      flex: unset;
      filter: unset;
    }
    
    button{
      bottom: -35px;
      padding: 0;
      font-size: large;
    }

  }

`

export default Products