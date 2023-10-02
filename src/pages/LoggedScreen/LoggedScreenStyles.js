import styled from 'styled-components';

export const DivLoggedScreen = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 5rem;
`;

export const Title = styled.h3`
    font-size: 2.2rem;
    color: ${props => props.$feed ? "#fff" : " #BBBAC0"};
`;