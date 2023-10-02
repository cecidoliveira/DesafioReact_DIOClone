import styled from 'styled-components';

export const DivNavBar = styled.div`
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding:  2rem 3.75rem ;
`
export const DivNavUserHome = styled.div`
    display: flex;
    align-items: center;
    gap: 2.188rem;
    
`
export const DivNavUserAvatar= styled(DivNavUserHome)`
    font-size: 2rem;
    gap: 0.5rem;
`
export const DivSearch= styled(DivNavUserHome)`
    background-color: #2D2D37;
    padding: 1rem 17.125rem 1rem 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    gap: 0.2rem;
`
export const AvatarCircle = styled.div`
    background-color: #ffffff;
    padding: 1.9rem;
    border-radius: 50%;

`

export const Buttons = styled.a`
    background-color: ${props => props.$select ? "#2D2D37" : "transparent"};
    padding: ${props => props.$select ? "0.5rem 3rem" : "transparent"};
    border-radius: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.9rem;
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: ${props => props.$select ? "#ffffff" : "#E4105D"};
      background-color: ${props => props.$select ? "#7F28B5" : "transparent"};
    }
`   