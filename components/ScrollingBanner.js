'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { breakpoint, color, typography } from '@styles/index';

const scrollText = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BannerWrapper = styled.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100vw;
  background-color: ${color.green[90]};
  overflow: hidden;
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

const ScrollingTrack = styled.div`
  display: flex;
  animation: ${scrollText} 30s linear infinite;
  width: max-content;
`;

const ScrollingItem = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const Text = styled.p`
  font-family: ${typography.family.headline};
  margin-right: 4em;
  font-size: ${typography.size.f5};
  text-transform: uppercase;
  color: ${color.green[90]};
  line-height: 1;
  letter-spacing: 0.3em;
  -webkit-text-stroke: 1px ${color.green[80]};
  white-space: nowrap;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f4};
    -webkit-text-stroke: 1.25px ${color.green[80]};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f3};
  }
`;

const ScrollingBanner = ({ textItems = [] }) => {
  return (
    <BannerWrapper>
      <ScrollingTrack>
        {[...Array(2)].map((_, i) => (
          <ScrollingItem key={i}>
            {textItems.map((text, index) => (
              <Text key={`${i}-${index}`}>{text}</Text>
            ))}
          </ScrollingItem>
        ))}
      </ScrollingTrack>
    </BannerWrapper>
  );
};

export default ScrollingBanner;
