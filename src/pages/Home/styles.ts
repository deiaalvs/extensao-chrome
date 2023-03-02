import styled from "styled-components";

export const Container = styled.main`
    background: ${({ theme }) => theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;