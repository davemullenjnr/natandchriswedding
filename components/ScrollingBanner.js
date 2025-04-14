'use client'; // if you're using app directory in Next.js 13+

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { breakpoint, color, typography } from '@styles/index'; // Adjust the import path as necessary

const textItems = [
  ' Til Death Do Us Part',
  'There Is A Light That Never Goes Out',
  'To Have And To Hold',
  'To The Ends Of The Earth',
];

const scrollText = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  background-color: ${color.green[90]};
  overflow: hidden;
  position: relative;
  padding: 1.5rem 0;
  white-space: nowrap;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);

  @media ${breakpoint.sm} {
    padding: 1.75rem 0;
  }
  @media ${breakpoint.md} {
    padding: 2rem 0;
  }
`;

const ScrollingText = styled.div`
  display: flex;
  width: max-content;
  white-space: nowrap;
  animation: ${scrollText} 30s linear infinite;
`;

const Text = styled.p`
  font-family: ${typography.family.headline};
  margin-right: 3em;
  font-size: ${typography.size.f5};
  text-transform: uppercase;
  color: ${color.green[90]};
  line-height: 1;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 1px ${color.green[80]};

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f4};
    -webkit-text-stroke: 1.25px ${color.green[80]};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f3};
  }
`;

const ScrollingBanner = () => {
  return (
    <BannerWrapper>
      <ScrollingText>
        {textItems.concat(textItems).map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
      </ScrollingText>
    </BannerWrapper>
  );
};

export default ScrollingBanner;
