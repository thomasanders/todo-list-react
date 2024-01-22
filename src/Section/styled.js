import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 20px 0;
`;

export const Header = styled.header`
    align-self: flex-start;
    padding: 20px;
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
        justify-content: center;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    padding: 10px;
    margin: 0;
`;

export const Body = styled.body`
    background-color: white;
    margin-top: 5px;
    padding: 20px;
`;