import { breakpoint } from '@styles/index';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/textured-paper.jpg');
  background-repeat: repeat;
  /* background-attachment: fixed; */
  min-height: 80vh;
  width: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.05);
  padding: 0rem 1rem 2rem 1rem;

  @media ${breakpoint.md} {
    padding-bottom: 4rem;
  }
`;

export default function Paper({ children }) {
  return <Background>{children}</Background>;
}
