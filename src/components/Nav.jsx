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
  const hoverEffect = gsap.timeline()

  const NavButtonBefore = CSSRulePlugin.getRule('h5::after');

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

    // hoverEffect.to(NavButtonBefore,{
    //   duration: 0.5,
    //   cssRule:{
    //     color: "yellow"
    //   }
    // })
  })

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
        <img src={Logo} onClick={()=>{window.location.reload()}} alt="" />
        <div className="Navigation">
          <button>shop<BsPlus/></button>
          <button>Brands<BsPlus/></button>
          <button>services<BsPlus/></button>
          <button>about us</button>
          <button>events</button>
        </div>
        <div className="searchField">
          <button>Search <IoIosSearch/></button>
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
    margin-bottom: 30px;
   }
  
   .Feacture{
     display:flex;
     gap: 40px;
     padding: 10px 50px 0 0;
   }

  h5{
    font-family: FontAG_Regular;
    font-weight: normal;
    font-size: 11px;
  }

  .MainNav{
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 10px 50px 10px 30px;
    background: white;
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
  }

  .Feacture h5{
    position: relative;
  }

  .Feacture h5::after{
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid red;
  }

  .Feacture h5.hoverIn::after{
    transform: translateX(0%);
  }

  .Feacture h5.hoverOut::after{
    transform: translateX(-100%);
  }

  .searchField button{
    display: flex;
    align-items: center;
    gap: 150px;
    text-transform: uppercase;
    padding: 8px;
    border-radius: 4px;
  }

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