import styled from 'styled-components';

export const DivRanking = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
`

export const DivAvatar = styled.img`
  width: 5rem;
  padding: 0.3rem;
  background-color: #e5e5e5;
  border-radius: 50%;
`;

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 1rem;

`

export const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0  0 0.5rem 0.5rem
`;

export const DivBar = styled.div`
    width: ${props => props.$percent ? "45%" : "100%"};
    height: 1rem;
    background-color: ${props => props.$percent ? "#23DD7A" : "#e5e5e5"};
    border-radius: 1rem;
`;