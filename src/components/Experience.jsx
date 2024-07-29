import styled from "styled-components";
import backgroundWidth1920 from '../../public/Image/Bike_STenger1546-width=1920.jpg';
import backgroungWidth960 from '../../public/Image/Bike_STenger1546-width=960.jpg'

const Experience = () => {
  return (
    <Div>
      <div className="whiteBar"></div>
      <div className="largeText_container">
       <h1>your</h1>
       <h1>stenger</h1>
       <h1>experience</h1>
      </div>
      <div className="textFragment01">
        <p>service quality is a matter of honor.</p>
      </div>
      <div className="textFragment02">
        <p>your specialist shop for bicycles and e-bikes in hosbach.</p>
      </div>
      <div className="textFragment03">
        <p>your journey begins here.</p>
      </div>
      <div className="whatWeOffer">
        <div className="Description">
            <p>with our passion and enthusiasm</p>
            <p>for cycling, we offer high quality</p>
            <p>and exceptional bikes for riders of</p>
            <p>all levels</p>
        </div>
        <div className="OurExpirties">
            <div>
                <span className="first" >1</span>
                <p>wide range of products</p>
            </div>
            <div>
                <span className="kuch" >2</span>
                <p>high quality products</p>
            </div>
            <div>
                <span className="kuch" >3</span>
                <p>individual advice</p>
            </div>
            <div>
                <span>4</span>
                <p>professional assembly</p>
            </div>
            <div>
                <span>5</span>
                <p>uncomplicated shipping</p>
            </div>
            <div>
                <span>6</span>
                <p>personal service</p>
            </div>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`

  margin-top: 140px;
  background: url(${backgroundWidth1920}) no-repeat;
  background-position: 50.5% 85%;
  background-size: 160%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* White bar */

  .whiteBar{
    content: "";
    width: 95%;
    height: 35px;
    margin-top: 5vw;
    border-radius: 5px;
    background: white;
  }

  /* large text */

  .largeText_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 5.5vw;
  }

  h1{
    font-family: FOntAG_Extrabold;
    color: white;
    width: 80%;
    text-transform: uppercase;
    font-size: 16.5rem;
    line-height: 1cap;
  }

  h1:nth-child(1){
    text-align: center;
  }

  h1:nth-child(2){
    margin-left: 30px;
  }

  h1:nth-child(3){
    text-align: end;
  }

/* text fragments */

   .textFragment01, .textFragment02, .textFragment03{
     color: white;
     font-size: x-small;
     font-family: FontNG_Hel;
     text-transform: uppercase;
     position: absolute;
     text-align: justify;
     text-align-last: justify;
   }

  .textFragment01{
    top: 27%;
    right: 19%;
    width: 110px;
  }
 
  .textFragment02{
    top: 34%;
    right: 2%;
    width: 180px;
  }

  .textFragment03{
    top: 57%;
    left: 3%;
    width: 80px;
  }

  /* what we offer */

  .whatWeOffer{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-inline: 40px;
    bottom: 18%;
    margin-block: 10vw 2vw;
  }

  .Description{
    color: white;
    font-family: FontAG_Regular;
    text-transform: capitalize;
  }

  .OurExpirties{
    width: 60%;
  }

  .OurExpirties div{
    display: flex;
    align-items: center;
    border-top: 1px solid white;
    margin-bottom: 15px;
  }

  .OurExpirties span{
    font-family: FontAG_Extrabold;
    color: white;
    font-size: x-large;
    padding: 7px 120px 0px 0px;
  }

  .OurExpirties span.first{
    padding-right: 122px;
  }

  .OurExpirties span.kuch{
    padding-right: 120.5px;
  }

  .OurExpirties p{
    text-transform: uppercase;
    font-family: FontAG_Extrabold;
    border-left: 1px solid white;
    font-size: x-large;
    color: white;
    padding: 0px 0 0px 110px;
  }

  @media (max-width: 321px) {
    background: url(${backgroungWidth960}) no-repeat;
    background-size: cover;
    background-position: 50% 0%;
    display: flex;
    flex-direction: column;
    gap: 20vw;

   .whiteBar{
    height: 15px;
    border-radius: 2px;
    margin-top: 50px;
   } 

   h1{
    font-size: 25vw;
    line-height: 1cap;
   }

   .largeText_container{
    gap: 7px;
    width: 100%;
    padding-inline: 10px;
   }

   h1{
    width: 100%;
   }

   h1:nth-child(2){
     margin-left: 0;
     text-align: start;
   }

   h1:nth-child(3){
    text-align: start;
   }

   .textFragment01, .textFragment02, .textFragment03{
    display: none;
   }

   .whatWeOffer{
    flex-direction: column-reverse;
    position: static;
    gap: 12vw;
    padding: 15px;
    margin-top: 35px;
   }

   .OurExpirties{
    width: 100%;
   }

   .OurExpirties div{
    border-top: 2px solid white;
    align-items: flex-start;
    margin-bottom: 10px;
   }

   .OurExpirties span{
    padding: 0px 20px 0px 0px;
   }

   .OurExpirties span.first, .OurExpirties span.kuch{
    padding-right: 20px;
  }

  .OurExpirties span.first{
    padding-right: 21.5px;
  }

   .OurExpirties p{
    padding: 0px 0 0px 20px;
    font-size: 20px;
    height: 100%;
    border-left: 2px solid white;
  }
  }

`
export default Experience