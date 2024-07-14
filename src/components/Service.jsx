import styled from "styled-components";
import image from '../../public/Image/4Q5A8906.webp';
import { IoIosArrowRoundForward } from "react-icons/io"; 

const Service = () => {
  return (
    <Div>
      <div className="blackBar"></div>
      <div className="largeText">
        <img src={image} alt="image"/>
        <div className="text">
           unleash the full potential of your bike with us.
        </div>
      </div>
      <div className="serviceFooter">
        <div className="serviceSlogon">
          <p>
           Ride with confidence and enjoy every pedal stroke - we make it possible.
          </p>
          <button>our services</button>
        </div>
        <div className="serviceType">
          <div className="type01 type"><IoIosArrowRoundForward/><span>our workshop</span></div>
          <div className="type02 type"><IoIosArrowRoundForward/><span>bike leasing</span></div>
          <div className="type03 type"><IoIosArrowRoundForward/><span>financing</span></div>
          <div className="type04 type"><IoIosArrowRoundForward/><span>book your appointment</span></div>
          <div className="type05 type"><IoIosArrowRoundForward/><span>test rides</span></div>
          <div className="type06 type"><IoIosArrowRoundForward/><span>events</span></div>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

   margin-inline: 40px;
   margin-top: 300px;
   position: relative;

  .blackBar{
    content: "";
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background: black;
    position: absolute;
    top: -10%;
    left: 0%;
  }

  /* intro img */

  img{
    width: var(--serviceimgvw);
    height: 8.5vw;
    position: absolute;
    top: .6vw;
    left: 0;
    object-fit: cover;
  }

  /* intro text */

  .text{
    font-family: FontAG_Extrabold;
    font-size: 12vw;
    line-height: 1.2cap;
    text-align: justify;
    text-indent: calc(var(--serviceimgvw) + .6vw );
    width: 100%;
    text-transform: uppercase;
    color: black;
  }

  /* service footer */

  .serviceFooter{
    display: flex;
    justify-content: space-between;
    gap: 370px;
    margin-top: 100px;
  }

  .serviceSlogon{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .serviceSlogon p{
    font-family: FontAG_Regular;
    font-size: 17px;
    width: 230px;
  }

  .serviceSlogon button{
    background: var(--primary-color);
    color: white;
    width: fit-content;
    font: medium FontNG_Hel;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 15px
  }

  .serviceType{
    width:100%;
  }

  .type{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 80px;
    border-top: 1px solid black;
    padding-block: 10px;
  }

  .type svg{
    scale: 1.4;
    margin-left: 30px;
  } 

  .serviceType span{
    text-transform: uppercase;
    font: x-large FontAG_Extrabold;
  }


`

export default Service