import styled from 'styled-components';
import { Login } from './Login';
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

export const Footer = () => {
  return (
    <Div>
      <Login/>
      <div className="Footer_Menu">
        <div className="box footerShop">
            <h1>shop</h1>
            <h1>all brands</h1>
            <h1>services</h1>
        </div>
        <div className="box footerBlog">
            <h2>blog</h2>
            <div className="footerBlogMenu">
                <ul>
                    <li>everyday bike life</li>
                    <li>routes</li>
                    <li>reviews</li>
                    <li>stenger insights</li>
                    <li>maintenance</li>
                    <li>all articles</li>
                </ul>
            </div>
        </div>
        <div className="box footerAbout">
            <h2>about</h2>
            <div className="footerAboutMenu">
                <ul>
                    <li>our history</li>
                    <li>stenger racing team</li>
                    <li>stores</li>
                </ul>
            </div>
        </div>
        <div className="box footerSupport">
            <h2>support</h2>
            <div className="footerSupportMenu">
                <ul>
                    <li>contact options</li>
                    <li>shipping</li>
                    <li>returns</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="contact">
              <div className="box storeLocation">
                <h2>visit us</h2>
                <p>Frohnradstrae 19, 63768 Hosbach, Germany</p>
                <div className='contactButton' >get directions</div>
              </div>
              <div className="box storeTime">
                   <div className="openOrclose"><span>we're closed</span> <div className="redOrGreen"></div></div>
                   <h4>Today</h4>
                   <div>
                    <div className="time">
                      <span>10:00 a.m.</span>
                      <GoArrowRight/>
                      <span>7:00 p.m.</span>
                    </div>
                    <IoIosArrowDown/>
                   </div>
              </div>
              <div className="box mapTOstore">
                <h2>discover our stores</h2>
                <div className='contactButton' >hosbach headquarter</div>
              </div>
              <div className="box contactStore">
                <h2>contact</h2>
                <div className='contactButton' >write us message</div>
              </div>
      </div>
      <div className="FooterEnd">
        <div className="box">
         <FiFacebook/>
         <FiInstagram/>
         <FiYoutube/>
        </div>
        <div className="box">
         <ul>
          <li>imprint</li>
          <li>terms of service</li>
          <li>cancellation policy</li>
          <li>privacy policy</li>
          <li>cookie preferences</li>
         </ul>
        </div>
        <div className="box Developercredit">
          <p>website Clone by <a href="">Shiv Pujari</a></p> 
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  background: black;

/* Footer Menu */

  .Footer_Menu{
    display: flex;
    margin-inline: 20px;
    margin-top: 60px;
  }

  .box{
    flex: 1;
  }
  
  .box{
    color: white;
    border-left: 1px solid grey;
    padding-left: 20px;
    padding-bottom: 40px;
  }

  .box:first-child{
    border: unset;
  }

  h2, h1{
    text-transform: uppercase;
    font-family: FontAG_Extrabold;
  }

  h1{
    line-height: 1.4cap;
  }

  li{
    list-style: none;
    text-transform: capitalize;
    font-family: FontAG_Regular;
    margin-top: 5px;
    font-size: 17px;
  }

  ul{
    padding: 0;
    margin-top: 40px;
  }

  /* contact */

  .contact{
    display: flex;
    margin-inline: 20px;
    border-top: 1px solid grey;
    border-bottom: 1px solid gray;
    font-family: FontAG_Regular;
    text-transform: uppercase;
  }

  .contact .box{
    padding-block: 40px;
  }

  .contact .box:nth-child(2){
    border: unset;
  }

  .openOrclose{
    border: 1px solid grey;
    border-radius: 40px;
    display: flex;
    gap: 20px;
    align-items: center;
    width: fit-content;
    font-size: small;
    font-family: FontAG_Bold;
    padding: 1px 12px 1px 12px;
  }

  .openOrclose span{
    padding-bottom: 1px;
  }

  .redOrGreen{
    content: "";
    width: 6px;
    height: 6.5px;
    border-radius: 50%;
    background: red;
  }

  .storeTime h4{
   font-weight: normal;
   text-transform: capitalize;
   margin-top: 5vw;
  }

  .storeLocationAndTime, .time, .storeTime div:nth-child(3){
    display: flex;
  } 

  .storeTime div:nth-child(3){
    align-items: flex-end;
    gap: 30px;
  }

  .time{
    align-items: center;
    gap: 2px;
    margin-top: 1vw;
  }

  .contactButton{
    border: 1px solid grey;
    border-radius: 2px;
    font-family: FontNG_Hel;
    width: fit-content;
    padding: 12px 15px
  }

  .mapTOstore, .contactStore{
    display: flex;
    flex-direction: column;
    gap: 5.5vw;
  }

  .storeLocation p{
    margin-top: 3vw;
    text-transform: capitalize;
    width: 200px;
  }

  .storeLocation .contactButton{
    margin-top: 1vw;
  }

  /* FooterEnd */

  .FooterEnd{
    display: flex;
    padding: 40px;
  }

  .FooterEnd .box{
    border: unset;
    justify-content: center;
    display: flex;
  }

  .FooterEnd svg{
   margin-inline: 5px;
   width: 20px;
   height: 20px;
  }

  .FooterEnd ul{
    margin: 0;
  }
  
  .FooterEnd li{
    font-family: FontNG_Nor;
    text-transform: uppercase;
  }
  .Developercredit{
    font-family: FontAG_Regular;
    text-transform: capitalize;
  }

  a{
    color: white;
  }
  
`