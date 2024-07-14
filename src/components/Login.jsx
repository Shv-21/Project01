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
            <input type="text" /><button></button>
        </div>
       </Div>
    )
}

const Div = styled.div`
    
`
