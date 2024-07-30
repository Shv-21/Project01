import styled from "styled-components";
import image from '../../public/Image/stenger-nav-push-1-small.jpg';
import displayimage from '../../public/Image/stenger-nav-push-2-Small.jpg';

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
      <div className="stats">
        <img src={displayimage} alt="" />
        <div className="shopCount">
          <h1>02</h1>
          <span>bike shops</span>
        </div>
        <div className="since">
          <h1>>90</h1>
          <span>years tradition</span>
        </div>
        <div className="stock">
          <h1>1000+</h1>
          <span>bikes in stock</span>
        </div>
        <p>
          Our modern shops offer you a large selection of everything you need for cycling. 
          Browse through our online shop and find products from renowned brand manufacturers.                                           
        </p>
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

  .largeText  img{
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

  @media (max-width: 321px) {
  
    padding-inline:15px;
    padding-top:20vw;
    margin-top: 70px;
    margin-inline: 0;
    background: black;

    .blackBar{
     height: 12px;
     position: unset;
     margin-bottom: 15vw;
     background: white;
     border-radius: 3px;
    }

    .largeText{
      position: relative;
    }

    .largeText img{
      top: 2%;
      height: 11.5vw;
    }
    
    .text{
      color: white;
      font-size: 17vw;
    }

    .stats{
      display: flex;
      flex-direction: column;
      gap: 10vw;
      align-items: center;
      margin-top: 10vw;
      justify-content: center;
      color: white;
    }

    .stats img{
       width: 90vw;
       height: 90vw;
       object-fit: cover;
       border-radius: 5px;
    }

    .stats div{
      text-align: center;
      font-family: FontNG_Hel;
      text-transform: uppercase;
    }

    .stats div h1{
      line-height: 2cap;
    }

    .stats div span{
      font-size: x-small;
      display: inline-block;
      width: 100%;
    }

    .stats p{
      width: 90vw;
      font-family: FontAG_Regular;
    }    

  }

`

export default Statistic