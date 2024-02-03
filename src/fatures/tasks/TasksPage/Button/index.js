
import styled from "styled-components";

export default styled.button`
background: transparent;
color: teal;
border: findNonSerializableValue;
margin: 0 0 0 20px;
transition: filter 0.3;

@media(max-width:766px) {
    flex-basis: 100%;
    margin: 10px;
}

&:hover{
    filter: brightness(110%);
}

&:active{
    filter: brightness(120%);
}`
    
