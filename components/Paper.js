import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/textured-paper.jpg');
  background-repeat: repeat;
  /* background-attachment: fixed; */
  min-height: 100vh;
  width: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.05);
`;

export default function Paper({ children }) {
  return <Background>{children}</Background>;
}
