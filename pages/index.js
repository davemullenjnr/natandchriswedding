import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import KeyInfoTextBlock from '@components/KeyInfoTextBlock';
import ScrollingBanner from '@components/ScrollingBanner';
import RSVPTextBlock from '@components/RSVPTextBlock';
import RSVPForm from '@components/RSVPForm';
import FAQ from '@components/FAQ';
import { breakpoint, color, typography, width } from '@styles/index';
import GiftButton from '@components/GiftButton';

const IntroImage = styled.div`
  width: 66%;
  margin: 0 auto;
  padding-top: 6rem;
  max-width: 450px;
`;

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: ${({ biggerGap }) => (biggerGap ? '4rem' : '2rem')};
  max-width: 28rem;

  @media ${breakpoint.sm} {
    max-width: 30rem;
  }
  @media ${breakpoint.md} {
    max-width: ${width.md}rem;
    padding: ${({ keyInfo }) => (keyInfo ? '6rem 0' : '4rem 0')};
  }
`;

const TitleImage = styled.div`
  margin: 0 auto;
  padding-top: 6rem;

  img {
    max-height: 100px;

    @media ${breakpoint.sm} {
      max-height: 125px;
    }
    @media ${breakpoint.md} {
      max-height: 150px;
    }
    @media ${breakpoint.lg} {
      max-height: 200px;
    }
  }
`;

const GiftButtonWrapper = styled.div`
  margin: 0 auto;
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
      <MainContent keyInfo>
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
      <div id='faqs'>
        <TitleImage>
          <img src='/images/faqs.svg' alt='FAQs' />
        </TitleImage>
        <MainContent biggerGap>
          <FAQ
            question='Are kids welcome?'
            answer='As much as we love your little ones, we will not be including them in the ceremony or reception (apart from close family). We want guests to be able to let their hair down and party with us :)'
          />
          <FAQ
            question='Is it okay to take pictures with our phones and cameras during the wedding?'
            answer='Yes! We would love for you to take photos and share them with us. Please note that photos are not allowed during the ceremony.'
          />
          <FAQ
            answer="If you have a question that we haven't answered here, just send us a
            message :)"
          />
        </MainContent>
      </div>
      <div id='travel'>
        <TitleImage>
          <img src='/images/travel.svg' alt='Travel' />
        </TitleImage>
        <MainContent biggerGap>
          <FAQ
            question='Getting to the venue'
            answer='The Castlefield Rooms is located in the heart of Manchester, easily accessible by public transport. The nearest train station is Deansgate, which is a 10-minute walk away.'
          />
          <FAQ
            question='Parking'
            answer='There are several car parks nearby, including the NCP on Great Northern Warehouse and the Q-Park on Deansgate.'
          />
          <FAQ
            question='Accommodation'
            answer='There are several hotels nearby, including the Hilton Manchester Deansgate and the Radisson Blu Edwardian.'
          />
        </MainContent>
      </div>
      <div id='gifts'>
        <TitleImage>
          <img src='/images/gifts.svg' alt='Gifts' />
        </TitleImage>
        <MainContent biggerGap>
          <FAQ answer='Your presence at our wedding is the greatest gift of all. However, if you would like to give us a gift, we would appreciate contributions towards our honeymoon.' />
          <GiftButtonWrapper>
            <GiftButton />
          </GiftButtonWrapper>
        </MainContent>
      </div>
      <div id='rsvp'>
        <TitleImage>
          <img src='/images/rsvp.svg' alt='RSVP' />
        </TitleImage>
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
      </div>
    </>
  );
}
