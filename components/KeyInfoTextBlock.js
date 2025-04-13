import React from 'react';
import styled from 'styled-components';
import { color } from '@styles/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${color.green[90]};
`;

const Subtitle = styled.p`
  color: ${color.green[70]};
`;

export default function KeyInfoTextBlock({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
