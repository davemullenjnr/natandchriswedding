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
  const lyricsOne = [
    'Moons and Junes and Ferris wheels',
    'The dizzy dancing way that you feel',
    'As every fairy tale comes real',
    "I've looked at love that way",
  ];
  const lyricsTwo = [
    'Tears and fears and feeling proud',
    'To say "I love you" right out loud',
    'Dreams and schemes and circus crowds',
    "I've looked at life that way",
  ];

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
      <ScrollingBanner textItems={lyricsOne} />
      <div id='faqs'>
        <TitleImage>
          <img src='/images/faqs.svg' alt='FAQs' />
        </TitleImage>
        <MainContent biggerGap>
          <FAQ
            question='Are kids welcome?'
            answer='To allow all guests to relax and enjoy the day, we are having an adults-only celebration, with a few close family children in attendance. Thank you for understanding!'
          />
          <FAQ
            question="Where's the meeting point when I arrive?"
            answer='The ceremony will be in the Brindley Room. Guests should enter via the external staircase on Castle Street, and the bar will be open in the Brindley Room before the ceremony. The evening reception will be held in the Merchant Room.'
          />
          <FAQ
            question='Is it okay to take pictures during the wedding?'
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
            question='Public Transport'
            answer={[
              'The closest train station is Deansgate, just a 5-minute walk from the venue.',
              "If you're arriving at Piccadilly Station there’s a free bus right outside the exit near 'Boots.' Hop on bus number 1 to Liverpool Road / Barton Street (Stop WO), and the venue is a 5-minute walk from there.",
            ]}
          />
          <FAQ
            question='Parking'
            answer='The closest parking is at Duke Street (M3 4RU). There are also a limited number of spaces at the venue.'
          />
          <FAQ
            question='Accommodation'
            answer={[
              <>
                <ul>
                  <li>
                    <a href='https://www.hilton.com/en/hotels/mandghi-hilton-manchester-deansgate/'>
                      <b>Hilton Manchester Deansgate</b>
                    </a>{' '}
                    (M3 4LQ) - <i>5 min walk</i>
                  </li>
                  <li>
                    <a href='https://www.melia.com/en/hotels/united-kingdom/manchester/innside-manchester'>
                      <b>Innside by Melia</b>
                    </a>{' '}
                    (M15 4RP) - <i>8 min walk</i>
                  </li>
                  <li>
                    <a href='https://www.leonardohotels.co.uk/manchester/leonardo-hotel-manchester-central'>
                      <b>Leonardo Hotel Manchester Central</b>
                    </a>{' '}
                    (M1 5LE) - <i>9 min walk</i>
                  </li>
                  <li>
                    <a href='https://www.edwardian.com/hotels/the-edwardian-manchester'>
                      <b>Radisson Edwardian</b>
                    </a>{' '}
                    (M2 5GP) - <i>12 min walk</i>
                  </li>
                </ul>
              </>,
            ]}
          />
        </MainContent>
      </div>
      <ScrollingBanner textItems={lyricsTwo} />
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
