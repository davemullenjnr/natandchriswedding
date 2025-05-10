import React from 'react';
import styled from 'styled-components';
import { breakpoint, color, radius, typography } from '@styles/index';

const Button = styled.a`
  background: ${color.green[90]};
  background: linear-gradient(135deg, rgb(246, 217, 143), rgb(196, 158, 63));
  color: ${color.white};
  text-align: center;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: ${radius.md};
  text-decoration: none;
  font-weight: bold;
  transition:
    box-shadow 0.3s ease,
    filter 0.3s ease;
  box-shadow: 5px 5px 0px rgb(159, 137, 82);
  font-size: ${typography.size.f7};
  @media ${breakpoint.sm} {
    font-size: ${typography.size.f6};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f5};
  }

  @media (hover: hover) {
    &:hover {
      filter: brightness(1.05);
      box-shadow: 3px 3px 0px rgb(159, 137, 82);
    }
  }
`;

export default function GiftButton() {
  return (
    <Button
      href='https://buy.stripe.com/14k9Bd0l61NO1faaEE'
      target='_blank'
      rel='noopener noreferrer'
      className='plausible-event-name=Gift'
    >
      Give a Gift
    </Button>
  );
}
