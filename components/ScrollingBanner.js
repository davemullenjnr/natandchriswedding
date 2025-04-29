'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { breakpoint, color, typography } from '@styles/index'; // Adjust path

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

const createScrollKeyframes = (distance) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${distance}px); }
`;

const ScrollingTrack = styled.div`
  display: flex;
  animation: ${({ scrollWidth, duration }) => css`
    ${createScrollKeyframes(scrollWidth)} ${duration}s linear infinite
  `};
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
  letter-spacing: 0.1em;
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
  const baseRef = useRef(null);
  const [copies, setCopies] = useState(3);
  const [scrollWidth, setScrollWidth] = useState(0);
  const animationSpeed = 10; // seconds to scroll one full copy

  useEffect(() => {
    if (!baseRef.current) return;

    const baseWidth = baseRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Ensure enough copies to cover twice the screen width (for seamless effect)
    const minTotalWidth = viewportWidth * 2;
    const neededCopies = Math.ceil(minTotalWidth / baseWidth) + 1;

    setScrollWidth(baseWidth);
    setCopies(neededCopies);
  }, [textItems]);

  const repeatedContent = Array(copies).fill(textItems).flat();

  return (
    <BannerWrapper>
      <ScrollingTrack scrollWidth={scrollWidth} duration={animationSpeed}>
        <ScrollingItem ref={baseRef}>
          {textItems.map((text, index) => (
            <Text key={`base-${index}`}>{text}</Text>
          ))}
        </ScrollingItem>
        {Array.from({ length: copies - 1 }).map((_, i) => (
          <ScrollingItem key={`copy-${i}`}>
            {textItems.map((text, index) => (
              <Text key={`copy-${i}-${index}`}>{text}</Text>
            ))}
          </ScrollingItem>
        ))}
      </ScrollingTrack>
    </BannerWrapper>
  );
};

export default ScrollingBanner;
