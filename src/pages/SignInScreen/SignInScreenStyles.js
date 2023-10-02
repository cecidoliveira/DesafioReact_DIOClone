import styled from 'styled-components';

export const DivSingIn = styled.div`
    display: flex;
    justify-content: space-around;
    
    margin: 8rem 0;
`

export const DivInfo = styled.div`
    width: 45rem;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    margin: 3rem 0;

    div{
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }

    svg{
        font-size: 2rem;
        color: #8647AD;
        margin-right: 1rem;
    }
`

export const DivTitle = styled.div`
    width: 49rem;
`

export const Title = styled.h2`
    font-size: 3rem;
`

export const Input = styled.input`
    width: 30rem;
    padding: 0.7rem;
    margin-left: 0.5rem;
    border: none;
    border-bottom: 0.2rem #3B3450 solid;
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
        color: #ffffff;
    }

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
`

export const Description = styled.p`
    width: 35rem;
    margin: 0.5rem 0;
    font-weight: 100;
    font-size: 1.35rem;
`

export const Button = styled.button`
    width: 34rem;
    height: 3.5rem;
    margin: auto;
    cursor: pointer;
    color: #ffffff;
    background-color: #E4105D;
    border: #E4105D solid 0.2rem;
    border-radius: 2rem;
    font-size: 1.7rem; 
`

export const SombraButton = styled.div`
    display: flex;
    justify-content: center;
    width: 35rem;
    height: 4.5rem;
    background-color: transparent;
    border: #E4105D solid 0.1rem;
    border-radius: 2.3rem;  
`;

export const Links = styled.a`
    text-decoration: none;
    color: ${props => props.$createacess ? "#23DD7A": "#E5E044"};
    font-size: 1.3rem;
    margin-right: 12rem;
    cursor: pointer;
`;