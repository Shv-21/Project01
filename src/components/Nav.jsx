import styled from 'styled-components';
import { BsPlus } from "react-icons/bs";
import Logo from '../../public/Image/Logo.png';
import { IoIosSearch } from "react-icons/io";
import { TbCalendarEvent } from "react-icons/tb";
import { RiShoppingBagLine } from "react-icons/ri";
import gsap from 'gsap';
import  scrollTrigger  from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

const Nav = () => {

  gsap.registerPlugin(scrollTrigger)

  const timeline = gsap.timeline()

  useGSAP(()=>{
    gsap.to('.MainNav',{
      top:0,
      borderBottomWidth: 1,
      scrollTrigger:{
        scrub: true,
        start: -1,
        end: 5
      }
    })
  })

  return (
    <Div >
      <div className="box"></div>
      <div className="MiniNav">
        <div className="Feacture">
          <h5>STORES</h5>
          <h5>BLOG</h5>
          <h5>ACCOUNT</h5>
        </div>
      </div>
      <div className="MainNav">
        <img src={Logo} onClick={()=>{window.location.reload()}} alt="" />
        <div className="Navigation">
          <button>shop<BsPlus/></button>
          <button>Brands<BsPlus/></button>
          <button>services<BsPlus/></button>
          <button>about us</button>
          <button>events</button>
        </div>
        <div className="searchField">
          <button >Search <IoIosSearch/></button>
        </div>
        <div className="MainNavEndPart">
          <div className='something'>
            <div className="dot"></div>
            <TbCalendarEvent/>
          </div>
          <div className='something'>
            <div className="dot"></div>
            <RiShoppingBagLine/>
          </div>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

   .MiniNav{
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
   }

   .box{
    position: absolute;
   }
  
   .Feacture{
     display:flex;
     gap: 40px;
     padding: 10px 50px 0 0;
   }

  .Feacture h5{
    position: relative;
    cursor: pointer;
    font-family: FontAG_Regular;
    font-weight: normal;
    font-size: 11px;
  }

  .Feacture h5::after{
    position: absolute;
    content: '';
    bottom: -2px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid gray;
    transition: transform .5s ease;
    transform-origin: right;
    transform: scaleX(0);
  }

  .Feacture h5:hover::after{
    transform: scaleX(1);
    border-width: 2px;
    transform-origin: left;
  }

  .MainNav{
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 10px 50px 10px 30px;
    background: white;
    z-index: 99;
    border-bottom: 0px solid lightgray;
  }

  .MainNav img{
    width: 130px;
  }

  input{
    font-family: FontAG_Regular;
  }

  .Navigation{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 80px;
  }

  .searchField{
    margin-left: 300px;
  }

  .MainNavEndPart{
    margin-left: 150px;
  }

  button{
    font-family: FontAG_Regular;
  }

  .Navigation button{
    background: none;
    position: relative;
    border: none;
    display: flex;
    align-items: center;
    font-family: FontAG_Medium;
    text-transform: uppercase;
    font-weight: 500;
    font-size: large;
    width: fit-content;
    cursor: pointer;
  }

  .Navigation button::before{
    position: absolute;
    content:"";
    top: -301%;
    width: 80%;
    border-bottom: 0px solid red;
    transition: all .5s;
  }

  .searchField button{
    display: flex;
    align-items: center;
    position: relative;
    gap: 150px;
    text-transform: uppercase;
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
    color: black;
  }

  /* .searchField button::after{
    position: absolute;
    content: "";
    width: 100%;
    border-radius: 4px;
    height: 100%;
    left: 0;
    background: black;
    transform: translateY(100%);
    transition: all .5s;
    z-index: -1;
  }

  .searchField button:hover::after{
    transform: translateY(0%);
  }

  .searchField button:hover{
    background: none;
    color: white;
  } */

  .MainNavEndPart{
    display: flex;
    gap: 10px;
  }

  .MainNavEndPart .something{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #f1f0f0;
    width : 40px;
    height: 40px;
    border-radius: 50%;
  }

  .MainNavEndPart .dot{
    position: absolute;
  }
`

export default Nav