import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import KeyInfoTextBlock from '@components/KeyInfoTextBlock';
import ScrollingBanner from '@components/ScrollingBanner';
import RSVPTextBlock from '@components/RSVPTextBlock';
import RSVPForm from '@components/RSVPForm';

const IntroImage = styled.div`
  width: 66%;
  margin: 0 auto;
  padding-top: 6rem;
  max-width: 500px;
`;

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RSVPImage = styled.div`
  width: 40%;
  margin: 0 auto;
  padding-top: 6rem;
  max-width: 300px;
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
      <RSVPImage>
        <img src='/images/rsvp.svg' alt='RSVP' />
      </RSVPImage>
      <MainContent>
        <RSVPTextBlock
          main={
            <>
              <b>
                Please complete the form below to let us know if you can make
                it.
              </b>
            </>
          }
          subtext='Deadline: Friday 23rd May 2025'
        />
      </MainContent>
      <RSVPForm />
    </>
  );
}
