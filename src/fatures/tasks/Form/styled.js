import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        display: flex;
        flex-direction: column;
    };
`;

export const Input = styled.input`
    border: 2px solid #eee;
    padding: 10px;
`;

export const Button = styled.button`
    background: teal;
    border: 0px;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: rgb(10, 133, 155);
        transform: scale(1.1);
    }
`;