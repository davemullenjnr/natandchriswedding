import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography } from '@styles/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: ${typography.size.f5};
  color: ${color.green[90]};
  margin-bottom: 0.25em;

  @media ${breakpoint.md} {
    font-size: ${typography.size.f4};
  }
`;

const Subtitle = styled.p`
  font-size: ${typography.size.f8};
  color: ${color.green[70]};

  @media ${breakpoint.md} {
    font-size: ${typography.size.f7};
  }
`;

export default function KeyInfoTextBlock({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
