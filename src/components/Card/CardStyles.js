import styled from 'styled-components';

export const DivCard = styled.div`
    background-color: #3B4651;
    margin: 2rem 0;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
`

export const DivInfo = styled.div`
    margin: 0 1rem;
`

export const DivAvatar = styled.div`
    display: flex;
    align-items: center;
`;

export const DivImgAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #e5e5e5;
  border-radius: 50%;
`;

export const DivInfoAvatar = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 1rem;

`

export const DivText = styled.div`
    margin: 1rem 0;
`

export const Title = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0  0 0.5rem 
`

export const Paragraph = styled.p`
    font-size: 1.3rem;
    font-weight: ${props => props.$hastag ? "700" : "500"};
    color: ${props => props.$hastag ? "#D8DADC" : "#ffffff"};
    span{
        font-weight: 600;
    }
`