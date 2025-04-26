import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography, width } from '@styles/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 75vh;
`;

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-family: ${typography.family.title};
  color: ${color.green[90]};
  margin-bottom: 1rem;
  font-size: ${typography.size.f4};

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f4};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f4};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f3};
  }
`;

const Body = styled.div`
  color: ${color.green[70]};
  font-size: ${typography.size.f8};
  max-width: ${width.xs}rem;

  p {
    line-height: 1.5;
  }

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

export default function AttendanceResponse({ title, children }) {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
}
