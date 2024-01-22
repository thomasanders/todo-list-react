import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 20px;
`;

export const StyledButtons = styled.button`
    background: transparent;
    border: none;
    color: teal;
    transition: color 0.5s;
    cursor: pointer;
    margin: 0 0 0 20px;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: #ccc;
    }
`;