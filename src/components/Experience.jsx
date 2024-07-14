import styled from "styled-components";
import BackgroundImage from '../../public/Image/Bike_STenger1546.jpg';

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

  background: url(${BackgroundImage}) no-repeat;
  background-size: 155%;
  background-position: 50% -16%;
  min-height: 95vw;
  position: relative;

  /* White bar */

  .whiteBar{
    content: "";
    width: 95%;
    height: 35px;
    border-radius: 5px;
    background: white;
    position: absolute;
    top: 80px;
    left: 2.5%;
  }

  /* large text */

  .largeText_container{
    width: 100%;
  }

  h1{
    font-family: FOntAG_Extrabold;
    color: white;
    width: fit-content;
    text-transform: uppercase;
    font-size: 263px;
    line-height: 200px;
  }

  h1:nth-child(1){
     transform: translate(125%, 100%) ;
  }

  h1:nth-child(2){
    transform: translate(22%, 100%);
  }

  h1:nth-child(3){
    transform: translate(37%, 100%);
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
    top: 24%;
    right: 19%;
    width: 110px;
  }
 
  .textFragment02{
    top: 31%;
    right: 2%;
    width: 180px;
  }

  .textFragment03{
    top: 49%;
    left: 3%;
    width: 80px;
  }

  /* what we offer */

  .whatWeOffer{
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding-inline: 40px;
    bottom: 18%;
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
    padding: 7px 0 0px 110px;
  }

`
export default Experience