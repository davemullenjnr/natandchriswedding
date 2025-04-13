import { breakpoint } from '@styles/index';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1000px; /* Adjust as needed */
  margin: ${(props) => (props.noMargin ? '0' : '0 auto')};
  padding: ${(props) => (props.noPadding ? '0' : '0 1rem')};

  /* Responsive adjustments */
  @media ${breakpoint.sm} {
    padding: ${(props) => (props.noPadding ? '0' : '0 2rem')};
  }

  @media ${breakpoint.md} {
    padding: ${(props) => (props.noPadding ? '0' : '0 2rem')};
  }
`;

export default Container;
