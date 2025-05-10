import { breakpoint, color, pixels } from '@styles/index';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/textured-background.jpg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
  padding-bottom: 6rem;
  min-height: 100vh;
`;

export default Background;
