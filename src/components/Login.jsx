import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";

export const Login = ()=>{
    return(
       <Div>
        <div className="newletter_head">
            <h6>newsletter</h6>
            <h6>discover the thrill of riding with us</h6>
            <h6>your trusted companion on two wheels</h6>
            <BsArrowDown/>
        </div>
        <div className="inputField">
            <input type="text" placeholder="email" />
            <button>sign up</button>
        </div>
       </Div>
    )
}

const Div = styled.div`
    
    margin-inline: 20px;
    background: var(--primary-color);
    padding: 15px 25px 50px 25px;
    border-radius: 5px;

    .newletter_head{
      display: flex;
      justify-content: space-between;
    }

    h6{
      text-transform: uppercase;
      font-family: FontNG_Nor;
      font-weight: 600;
      color: white;
      width: 100px;
    }

    h6:nth-child(3){
        margin-right: 300px;
    }

    svg{
        color: white;
    }

    .inputField{
        position: relative;
        margin-top: 100px;
    }

    input{
        background: none;
        font-family: FontAG_Extrabold;
        width: 100%;
        font-size: 5rem;
        color: white;
    }

    .inputField::after{
       position: absolute;
       content: ".";
       width: 100%;
       height: 1vw;
       border-radius: 2px;
       background: white;
       bottom: -5px;
       left: 0;
    }

    input::placeholder{
        color: rgba(255, 255, 255,.4);
        text-transform: uppercase;
    }

    input:focus{
      outline: none;
    }

    button{
        font-family: FontAG_Extrabold;
        color: white;
        position: absolute;
        font-size: 5rem;
        right: 0px;
        text-transform: uppercase;
        top:0px;
        background: none;
    }
`
