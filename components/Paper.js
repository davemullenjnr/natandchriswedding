import { breakpoint } from '@styles/index';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/textured-paper.jpg');
  background-repeat: repeat;
  /* background-attachment: fixed; */
  min-height: 100vh;
  width: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.05);
  padding-bottom: 2rem;

  @media ${breakpoint.md} {
    padding-bottom: 4rem;
  }
`;

export default function Paper({ children }) {
  return <Background>{children}</Background>;
}
