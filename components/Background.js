import { breakpoint, color, pixels } from '@styles/index';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url('/images/textured-background.jpg');
  background-repeat: repeat;
  padding-bottom: 6rem;
  min-height: 100vh;
  border-top: ${pixels.four} solid rgb(246, 217, 143);
`;

export default Background;
