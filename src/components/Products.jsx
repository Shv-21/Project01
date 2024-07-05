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
        <div className="Product Product01"><button>bikes <IoArrowForwardOutline/></button></div>
        <div className="Product Product02"><button>e-bikes <IoArrowForwardOutline/></button></div>
        <div className="Product Product03"><button>equipment <IoArrowForwardOutline/></button></div>
        <div className="Product Product04"><button>components & parts <IoArrowForwardOutline/></button></div>
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
    font-size: 80px;
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
    flex-grow: 1;
    background-size: cover;
    position: relative;
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
    flex-grow: 1.4;
    filter: unset;
  }

/* below code is for image in Product */

  .Product01{
    background: url(${Product01}) no-repeat;
  }

  .Product02{
    background: url(${Product02}) no-repeat;
  }

  .Product03{
    background: url(${Product03}) no-repeat;
  }

  .Product04{
    background: url(${Product04}) no-repeat;
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

`

export default Products