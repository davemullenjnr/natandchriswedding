import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, typography } from '@styles/index';

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
`;

const Body = styled.div`
  color: ${color.green[70]};
`;

export default function ThankYou({ title, children }) {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
}
