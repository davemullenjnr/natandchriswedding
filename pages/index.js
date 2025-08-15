import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import KeyInfoTextBlock from '@components/KeyInfoTextBlock';
import RSVPTextBlock from '@components/RSVPTextBlock';
import RSVPForm from '@components/RSVPForm';
import FAQ from '@components/FAQ';
import { breakpoint, color, typography, width } from '@styles/index';
import GiftButton from '@components/GiftButton';
import { getSubdomain } from 'lib/getSubdomain';
import StaticBanner from '@components/StaticBanner';

export async function getServerSideProps(context) {
  const { req } = context;
  const subdomain = getSubdomain(req);
  const guestType = subdomain === 'evening' ? 'evening' : 'full-day';

  return {
    props: { guestType },
  };
}

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

export default function Home({ guestType }) {
  const isEvening = guestType === 'evening';

  return (
    <>
      <SEO
        title={
          isEvening
            ? 'Natalie And Chris Evening Reception Invite'
            : 'Natalie And Chris Wedding Invite'
        }
        description='Please join us for our wedding on Friday 5th September 2025 at The Castlefield Rooms, Manchester.'
      />
      <IntroImage>
        <img
          src={
            isEvening
              ? '/images/natandchrisevening.svg'
              : '/images/natandchris.svg'
          }
          alt='Natalie and Chris'
        />
      </IntroImage>
      <MainContent keyInfo>
        <KeyInfoTextBlock
          title='Friday 5th September 2025'
          subtitle={
            isEvening
              ? 'Join us from 7:30pm for drinks and dancing!'
              : 'Arrival Time: 12:30 – 1:00pm'
          }
        />
        <KeyInfoTextBlock
          title='The Castlefield Rooms'
          subtitle='18-20 Castle St, Manchester, M3 4LZ'
        />
      </MainContent>
      <StaticBanner />
      {/* <ScrollingBanner textItems={lyricsOne} /> */}
      <div id='faqs'>
        <TitleImage>
          <img src='/images/faqs.svg' alt='FAQs' />
        </TitleImage>
        <MainContent biggerGap>
          <FAQ
            question='Are kids welcome?'
            answer={`We want you to relax and enjoy the ${isEvening ? 'evening' : 'day'}, so it’s an adults-only celebration, with a few close family children in attendance.`}
          />
          <FAQ
            question="Where's the meeting point when I arrive?"
            answer={
              isEvening
                ? 'The evening reception will be held in the Merchant Room.'
                : 'The ceremony will be in the Brindley Room. You should enter via the external staircase on Castle Street, and the bar will be open in the Brindley Room before the ceremony. The evening reception will be held in the Merchant Room.'
            }
          />
          {!isEvening && (
            <FAQ
              question='What food will be available on the day?'
              answer='Once RSVP’d we will send a couple of menu options to you.'
            />
          )}
          <FAQ
            question='What is the dress code?'
            answer='Look nice, feel nice, be you. Bonus points for shoes you can dance in!'
          />
          <FAQ
            question='Can I pay with cash at the venue?'
            answer='Just a heads up — the venue is totally cashless. Make sure to bring a card or have your phone ready for any payments on the day (like drinks at the bar). They won’t accept any cash.'
          />
          {!isEvening && (
            <FAQ
              question='Is it okay to take pictures during the wedding?'
              answer='Yes! We would love for you to take photos and share them with us. Please note that photos are not allowed during the ceremony.'
            />
          )}
          <FAQ answer='Please drop us a message if you have any other questions' />
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
              "If you're arriving at Piccadilly Station, use the main exit (next to boots) and directly outside just down the approach, there’s a free bus. Hop on bus number 1 to Liverpool Road / Barton Street (Stop WO), and the venue is a 5-minute walk from there.",
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
      {/* <ScrollingBanner textItems={lyricsOne} /> */}
      <StaticBanner />
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
              isEvening ? (
                <>
                  <b>
                    Please let us know if you can make it. We would love you to
                    be there!
                  </b>
                </>
              ) : (
                <>
                  <b>
                    RSVPs are now closed – thank you so much for getting back to
                    us. We’re excited to see you soon!
                  </b>
                </>
              )
            }
            subtext=''
          />
        </MainContent>
        {/* {!isEvening && <RSVPForm />} */}
      </div>
    </>
  );
}
