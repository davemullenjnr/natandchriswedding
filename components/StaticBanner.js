'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { breakpoint } from '@styles/index';

/* Slow, counter‑clockwise rotation for the text */
const spin = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(-360deg); }
`;

/* Full‑width 2 rem bar, centred across the viewport */
const BannerWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 0.5rem;
  margin: 5rem 0;
  background-color: #4d6051;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);
  overflow: visible;

  @media ${breakpoint.sm} {
    margin: 6rem 0;
    height: 1rem;
  }
  @media ${breakpoint.md} {
    margin: 10rem 0;
    height: 1.5rem;
  }
`;

/* Base style shared by both SVG layers */
const SealImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 8rem;
  @media ${breakpoint.sm} {
    height: 10rem;
  }
  @media ${breakpoint.md} {
    height: 12rem;
  }
`;

/* 1) Static wax‑seal backdrop */
const SealBack = styled(SealImage)`
  transform: translate(-50%, -50%); /* centred, no animation */
  z-index: 0;
`;

/* 2) Rotating text ring */
const SealText = styled(SealImage)`
  animation: ${spin} 20s linear infinite;
  z-index: 1; /* sits above the backdrop */
`;

const StaticBanner = () => (
  <BannerWrapper>
    <SealBack src='/images/fcl-back.svg' alt='Wax‑seal background' />
    <SealText
      src='/images/fcl-text.svg'
      alt='F.E.E.L.I.N.G.C.A.L.L.E.D.L.O.V.E rotating text'
    />
  </BannerWrapper>
);

export default StaticBanner;
