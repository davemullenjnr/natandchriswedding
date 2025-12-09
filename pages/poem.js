import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Image from 'next/image';
import { breakpoint, color, typography, width } from '@styles/index';

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 30rem;

  @media ${breakpoint.sm} {
    max-width: 30rem;
  }
  @media ${breakpoint.md} {
    max-width: ${width.md}rem;
    padding: 4rem 0;
  }
`;

const PoemImage = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;

  img {
    border-radius: 2px;
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h1`
  font-family: ${typography.family.title};
  font-size: ${typography.size.f4};
  color: ${color.green[90]};
  text-align: left;
  margin: 0;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f3};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f2};
  }
`;

const Subtitle = styled.p`
  font-family: ${typography.family.body};
  font-size: ${typography.size.f6};
  color: ${color.green[70]};
  text-align: left;
  margin-bottom: 2rem;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f5};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f4};
  }
`;

const PoemText = styled.div`
  font-family: ${typography.family.body};
  font-size: ${typography.size.f7};
  color: ${color.green[90]};
  line-height: 1.8;
  text-align: left;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f6};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f5};
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

export default function Poem() {
  return (
    <>
      <SEO
        title='A Light That Never Goes Out'
        description='Reading by Jen & Gill Scott'
        image='/og-poem.jpg'
      />
      <MainContent>
        <PoemImage>
          <Image
            src='/images/jen-and-gill-poem.jpg'
            alt='Jen and Gill'
            width={800}
            height={1000}
            priority
          />
        </PoemImage>
        <div>
          <Title>A Light That Never Goes Out</Title>
          <Subtitle>Reading by Jen & Gill Scott</Subtitle>
        </div>

        <PoemText>
          <p>
            To love is not always soft.
            <br />
            Sometimes it feels like sneaking out under streetlights,
            <br />
            driving nowhere, just to be close.
          </p>

          <p>
            And maybe the world outside doesn't get it.
            <br />
            But in the quiet hum of a car,
            <br />
            with music playing low and someone beside you,
            <br />
            it all makes sense.
          </p>

          <p>
            Take me out tonight,
            <br />
            because I want to see people and I want to see life.
          </p>

          <p>But mostly, I want to be with you.</p>

          <p>
            Because if the world ended mid-sentence,
            <br />
            if it all vanished in the glow of headlights,
            <br />
            to die by your side.. the pleasure, the privilege is mine.
          </p>

          <p>
            That's the depth of this love.
            <br />
            It doesn't ask for perfection.
            <br />
            It just asks to be real.
          </p>

          <p>
            And in this strange, beautiful world,
            <br />
            they have found something enduring,
            <br />a light that never goes out.
          </p>

          <p>
            They have found someone they can go anywhere with,
            <br />
            even if the road is uncertain, even if they don't know the way.
          </p>

          <p>
            To be beside each other is to feel at home in the world,
            <br />
            even when the world feels too much.
            <br />
            Because love like this is a light that never goes out.
          </p>

          <p>
            Hand in hand, they face this life.
            <br />
            It's not perfect, but it's theirs.
            <br />
            And in this imperfect world, they have found the one
            <br />
            who makes them feel whole.
          </p>

          <p>
            So let us witness this love,
            <br />
            gentle, honest, and unshakably real.
          </p>

          <p>
            And if the truth is that all we really need is each other,
            <br />
            then truly, they need nothing more.
          </p>
        </PoemText>
      </MainContent>
    </>
  );
}
