import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography } from '@styles/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Main = styled.p`
  font-family: ${typography.family.title};
  font-size: ${typography.size.f5};
  color: ${color.green[90]};
  margin-bottom: 0.25em;

  @media ${breakpoint.md} {
    font-size: ${typography.size.f4};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f3};
  }
`;

const Subtext = styled.p`
  color: ${color.green[70]};
  font-size: ${typography.size.f8};

  @media ${breakpoint.md} {
    font-size: ${typography.size.f7};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f6};
  }
`;

export default function RSVPTextBlock({ main, subtext }) {
  return (
    <Container>
      <Main>{main}</Main>
      <Subtext>{subtext}</Subtext>
    </Container>
  );
}
