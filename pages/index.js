import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import KeyInfoTextBlock from '@components/KeyInfoTextBlock';
import ScrollingBanner from '@components/ScrollingBanner';
import { Main } from 'next/document';

const IntroImage = styled.div`
  width: 66%;
  margin: 0 auto;
  padding-top: 6rem;
  max-width: 500px;
`;

const MainContent = styled.div`
  margin: 4rem auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RSVP = styled.div`
  margin: 4rem auto;
  width: fit-content;
`;

export default function Home() {
  return (
    <>
      <SEO
        title='Natalie And Chris Wedding'
        description='Natalie and Chris wedding website.'
      />
      <IntroImage>
        <img src='/images/natandchris.svg' alt='Natalie and Chris' />
      </IntroImage>
      <MainContent>
        <KeyInfoTextBlock
          title='Friday 5th September 2025'
          subtitle='Arrival Time: 12:30 – 1:00pm'
        />
        <KeyInfoTextBlock
          title='The Castlefield Rooms'
          subtitle='18-20 Castle St, Manchester, M3 4LZ'
        />
      </MainContent>
      <ScrollingBanner />
      <RSVP>
        <img src='/images/RSVP.svg' alt='RSVP' />
      </RSVP>
    </>
  );
}
