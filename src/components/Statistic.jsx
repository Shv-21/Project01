import styled from "styled-components";
import image from '../../public/Image/stenger-nav-push-1-small.jpg';

const Statistic = () => {
  return (
    <Div>
      <div className="blackBar"></div>
      <div className="largeText">
        <img src={image} alt="image"/>
        <div className="text">
           a feeling of unity between you and your bike.
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
    top: -12%;
    left: 0%;
  }

  img{
    width: var(--serviceimgvw);
    height: 8.5vw;
    position: absolute;
    top: .6vw;
    left: 0;
    object-fit: cover;
  }

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

  .container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
  }

  .test01{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    gap: 2px;
    flex-wrap: wrap;
  }

`

export default Statistic