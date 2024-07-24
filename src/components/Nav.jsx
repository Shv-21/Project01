import styled from 'styled-components';
import { BsPlus } from "react-icons/bs";
import Logo from '../../public/Image/Logo.png';
import { IoIosSearch } from "react-icons/io";
import { TbCalendarEvent } from "react-icons/tb";
import { RiShoppingBagLine } from "react-icons/ri";
import gsap from 'gsap';
import  scrollTrigger  from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { BiSolidMessageSquare } from "react-icons/bi";
import { useEffect } from 'react';

const Nav = () => {

  gsap.registerPlugin(scrollTrigger)
  const timeline = gsap.timeline();
  let active = true;
  useGSAP(()=>{
    gsap.to('.MainNav',{
      top:0,
      paddingBottom:"1rem",
      borderBottomWidth: 1,
      scrollTrigger:{
        scrub: true,
        start: -1,
        end: 5
      }
    })
    timeline.to('.menuline', {
      left: "100%",
      duration: .2,
      stagger: .1,
      ease:"none"
    }).pause();

    timeline.to('.crossline', {
      width: "100%",
      backgroundColor: "red",
      stagger: .1,
      duration: .1 ,
      ease:"none"
    }).pause();

  });
    
  return (
    <Div >
      <div className="MiniNav">
        <div className="Feacture">
          <h5>STORES</h5>
          <h5>BLOG</h5>
          <h5>ACCOUNT</h5>
        </div>
      </div>
      <div className="MainNav">
        <div className="Menu" onClick={()=>{if (active) { timeline.play();} else {timeline.reverse(); };active = !active; document.querySelector('.MainNav').classList.toggle("active")}} >
           <div className="hamburger">
             <div className="menulineouter">
              <div className="menuline"></div>
             </div>
             <div className="menulineouter">
              <div className="menuline"></div>
             </div>
             <div className="menulineouter">
              <div className="menuline"></div>
             </div>
           </div>
           <div className="crossmark">
            <div className="cross"><div className="crossline"></div></div>
            <div className="cross"><div className="crossline"></div></div>
           </div>
        </div>
        <img src={Logo}  onClick={()=>{window.location.reload()}} alt="" />
        <div className="Navigation">
          <button>shop<BsPlus/></button>
          <button>Brands<BsPlus/></button>
          <button>services<BsPlus/></button>
          <button>about us</button>
          <button>events</button>
          <div className="Navigationfooter">
            <div className='navAppointment' ><h5>book an appointment </h5><BiSolidMessageSquare/></div>
            <ul>
              <li>stores</li>
              <li>blog</li>
              <li>login</li>
              <li>register</li>
            </ul>
          </div>
        </div>
        <div className="MainNav_rightSide">
          <div className="searchField">
            <button >
              <span className='buttoninnertext'>Search</span> 
              <IoIosSearch/>
            </button>
          </div>
          <div className="icon">
            <div className='calender'>
              <div className="dot"></div>
              <TbCalendarEvent/>
            </div>
            <div className='cart'>
              <div className="dot"></div>
              <RiShoppingBagLine/>
            </div>
          </div>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

 /* MiniNav */

   .MiniNav{
     display: flex;
     justify-content: end;
     margin-bottom: 3.4vw;
   }

   .Feacture{
     display:flex;
     gap: 2.5vw;
     padding: .7vw 3.3vw 0 0;
   }

  .Feacture h5{
    position: relative;
    cursor: pointer;
    font-family: FontAG_Regular;
    font-weight: normal;
    font-size: .7rem;
  }

  .Feacture h5::after{
    position: absolute;
    content: '';
    bottom: .6vw;
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

  /* Menu */

  .Menu{
    display: none;
  }

  /* MainNav */

  .MainNav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    padding: .6vw 3.3vw 3.3vw 2vw;
    background: rgb(255, 255, 255);
    z-index: 2;
    border-bottom: 0px solid lightgray;
  }

  /* logo */

  .MainNav img{
    width:8.47vw;
  }

  .MainNav_rightSide{
    display: flex;
  }

  /* Navigation */

  .Navigation{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 5.3vw;
  }

  /* searchButton */

  .searchField{
    margin-left: 19vw;
  }

  .icon{
    margin-left: 9.07vw;
  }

  button{
    font-family: FontNG_Hel;
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
    gap: calc(9.07vw + 1px);
    text-transform: uppercase;
    padding: calc(.6vw - 1px) ;
    border-radius: 4px;
    overflow: hidden;
    color: black;
  }

  .icon{
    display: flex;
    gap: 10px;
  }

  .icon :is(.calender, .cart){
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #f1f0f0;
    width : 2.6vw;
    height: 2.6vw;
    border-radius: 50%;
  }

  .icon .dot{
    position: absolute;
  }

  .Navigationfooter{
    display: none;
  }

  @media (max-width:321px) {

    .MiniNav{
      display: none;
    }

    .Menu{
      display: flex;
      cursor: pointer;
      position: relative;
      width: 30px;
    }

    .hamburger{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: .1rem;
    }

    .menulineouter{
      width: 100%;
      overflow: hidden;
    }

    .menuline{
      content: "";
      width: 100%;
      height: 3.1px;
      position: relative;
      left: 0;
      background-color: red;
    }

    .menulineouter:nth-child(3){
      width: 50%;
    }

    .crossmark{
      position: absolute;
      width: 100%;
    }

    .cross:first-child{
      transform: rotate(45deg) translate(10%, 100%);
    }

    .cross:last-child{
      transform: rotate(135deg) translate(5%, 0%);
    }
    .crossline{
      transition: all .5s ease;
      width: 0%;
      height: 3px;
      background-color: white;
    }

    .MainNav{
      padding: 2vw 4vw;
      top: 0;
    }

    .MainNav img{
      width: 34vw;
    }

    .MainNav_rightSide, .icon{
      gap: 3vw;
    }

    .Navigation{
      position: absolute;
      flex-direction: column;
      gap: 0;
      width: 92%;
      top: 100%; 
      left: -100%;
      transition: left .5s ease;
      align-items: flex-start;
    }

    .Navigation button{
      font-size: 12vw;
      border-top: 1px solid black;
      width: 100%;
      padding: 0;
      font-family: FontAG_Extrabold;
    }

    .Navigation button:last-child{
      border-bottom: 1px solid black;
    }

    .Navigationfooter{
      display: flex;
      width: 100%;
      align-items: center;
      gap: 20vw;
      flex-direction: column;
    }

    .Navigationfooter h5{
      font-weight: 600;
      font-family: FontAG_Regular;
      text-transform: uppercase;
    }

    .Navigationfooter ul{
      list-style: none;
      padding: 0;
      font-size: small;
      font-family: FontNG_Nor;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-weight: 600;
      text-transform: uppercase;
    }

    ul li:nth-child(3){
      margin-top: 10px;
    }

    .navAppointment{
      display: flex;
      width: 100%;
      padding: 20px 15px;
      border-radius: 5px;
      background: lightgrey;
      align-items: center;
      justify-content: space-between;
    }

    .MainNav.active .Navigation{
      left: 0%;
    }

    .searchField, .icon{
      margin: 0;
    }

    .searchField span{
      display: none;
    }

    .searchField button{
      padding: 2.6vw;
      border-radius: 50%;
    }

    .searchField svg{
      width: 6vw;
      height: 6vw;
    }

    .icon :is(.calender, .cart){
      width: 11vw;
      height: 11vw;
      background: #f1f0f0;
    }

  }
`

export default Nav