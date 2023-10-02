import styled from 'styled-components';

export const DivHome = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8rem 0;
`

export const DivText = styled.div`
    width: 37rem;
`

export const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
`

export const TitleDestac = styled(Title)`
    color: #E4105D;
`

export const Text = styled.p`
    margin: 2rem 0 6rem;
    font-size: 1.6rem;
`

export const Button = styled.a`
    width: 15rem;
    height: 3.5rem;
    margin: auto;
    padding: 0.5rem 1.4rem;
    cursor: pointer;
    color: #ffffff;
    background-color: #E4105D;
    border: #E4105D solid 0.2rem;
    border-radius: 2rem;
    text-decoration: none;
    font-size: 1.7rem; 
`

export const SombraButton = styled.div`
    display: flex;
    justify-content: center;
    width: 16rem;
    height: 4.5rem;
    background-color: transparent;
    border: #E4105D solid 0.1rem;
    border-radius: 2rem;  
`;