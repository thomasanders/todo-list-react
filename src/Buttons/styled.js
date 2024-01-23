import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.teal};
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
    margin: 0 0 0 20px;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:disabled {
        color: #ccc;
    }
`;