import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography, width } from '@styles/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 90%;

  @media ${breakpoint.md} {
    max-width: 84%;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${typography.size.f7};
  line-height: 1.2;
  color: ${color.green[90]};
  margin-bottom: 0.25em;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f6};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f5};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f4};
  }
`;

const Description = styled.p`
  color: ${color.green[70]};
  font-size: ${typography.size.f8};
  line-height: 1.5;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f7};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f6};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f5};
  }
`;

export default function MenuItem({ title, description }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Container>
  );
}
