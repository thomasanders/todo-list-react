import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export default styled.button`
background: transparent;
color: ${({ theme}) => theme.color.teal};
border: findNonSerializableValue;
margin: 0 0 0 20px;
transition: filter 0.3;

@media(max-width: ${({ theme}) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
}

&:hover{
    filter: brightness(110%);
}

&:active{
    filter: brightness(120%);
}`
    
