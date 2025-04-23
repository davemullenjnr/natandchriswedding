import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography, width } from '@styles/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 90%;

  /* @media ${breakpoint.md} {
    max-width: ${width.xs}rem;
  } */
`;

const Question = styled.p`
  font-family: ${typography.family.title};
  font-weight: bold;
  font-size: ${typography.size.f6};
  line-height: 1.2;
  color: ${color.green[90]};
  margin-bottom: 0.25em;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f5};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f4};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f3};
  }
`;

const Answer = styled.p`
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

export default function FAQ({ question, answer }) {
  return (
    <Container>
      {question && <Question>{question}</Question>}
      <Answer>{answer}</Answer>
    </Container>
  );
}
