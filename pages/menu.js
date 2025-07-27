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
import MenuItem from '@components/MenuItem';

export async function getServerSideProps(context) {
  const { req } = context;
  const subdomain = getSubdomain(req);
  const guestType = subdomain === 'evening' ? 'evening' : 'full-day';

  return {
    props: { guestType },
  };
}

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
  width: fill-available;
  display: flex;
  flex-direction: column;
  gap: ${({ biggerGap }) => (biggerGap ? '4rem' : '2rem')};
  max-width: 28rem;

  @media ${breakpoint.sm} {
    max-width: 30rem;
  }
  @media ${breakpoint.md} {
    padding: 4rem 0;
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

const Title = styled.h2`
  font-family: ${typography.family.title};
  font-weight: bold;
  font-size: ${typography.size.f4};
  text-align: center;
  line-height: 1.2;
  color: ${color.green[90]};
  margin-bottom: 0.25em;

  @media ${breakpoint.sm} {
    font-size: ${typography.size.f3};
  }
  @media ${breakpoint.md} {
    font-size: ${typography.size.f2};
  }
  @media ${breakpoint.lg} {
    font-size: ${typography.size.f1};
  }
`;

const MenuSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media ${breakpoint.md} {
    margin-bottom: 3rem;
    gap: 2rem;
  }
`;

export default function Home({ guestType }) {
  const isEvening = guestType === 'evening';

  return (
    <>
      <SEO
        title={
          isEvening
            ? 'Natalie And Chris Evening Reception'
            : 'Natalie And Chris Wedding Menu'
        }
        description='Wedding Menu'
      />
      <div id='menu'>
        <TitleImage>
          <img src='/images/menu.svg' alt='Menu' />
        </TitleImage>
        <MainContent>
          <MenuSection>
            <Title>Starters</Title>
            <MenuItem
              title='Soup'
              description='Slow roasted tomato and red pepper. (V) (GFO)'
            />
            <MenuItem
              title='Little Pie & Peas'
              description='Slow cooked rump of beef, shortcrust pastry, proper mushy peas, red wine gravy.'
            />
          </MenuSection>
          <MenuSection>
            <Title>Mains</Title>
            <MenuItem
              title='Serrano Ham Wrapped Chicken'
              description='Roasted new potatoes, french beans, confit garlic cream sauce. (GFO)'
            />
            <MenuItem
              title='Fillet of Sea Bass'
              description='Crispy potatoes, chimichurri, tenderstem broccoli, ‘nduja & tomato sauce, crushed black olives. (GFO)'
            />
            <MenuItem
              title='Malayan Chickpea Curry'
              description='Chargrilled pak choi, chickpeas, snow peas, coconut chilli & lime sauce, jasmine rice, crispy shallots and flatbread. (VE)'
            />
          </MenuSection>
          <MenuSection>
            <Title>Desserts</Title>
            <MenuItem description='We’ll have wedding cake and other sweet treats on the day :)' />
          </MenuSection>
        </MainContent>
      </div>
      <div id='wine'>
        <TitleImage>
          <img src='/images/wine.svg' alt='Wine' />
        </TitleImage>
        <MainContent>
          <MenuSection>
            <MenuItem
              title='Sauvignon Blanc'
              description='The Cloud Factory — New Zealand'
            />
            <MenuItem title='Pinot Blush' description='Primi Soli — Italy' />
            <MenuItem title='Shiraz' description='Record Sun — Australia' />
            <MenuItem
              title='Soft Drinks'
              description='Soft drinks available on the day.'
            />
          </MenuSection>
        </MainContent>
      </div>
      <div id='kids-menu'>
        <TitleImage>
          <img src='/images/kidsmenu.svg' alt='Kids Menu' />
        </TitleImage>
        <MainContent>
          <MenuSection>
            <Title>Starters</Title>
            <MenuItem title='Garlic bread with cheese (V)' />
            <MenuItem title='Hummus and cucumber (VE)' />
          </MenuSection>
          <MenuSection>
            <Title>Mains</Title>
            <MenuItem
              title='Mini Sausages & Mash'
              description='With garden peas and gravy.'
            />
            <MenuItem
              title='Chicken Goujons'
              description='Breaded chicken pieces with thin cut chips. (GFO)'
            />
          </MenuSection>
          <MenuSection>
            <Title>Desserts</Title>
            <MenuItem
              title='Ice Cream Sundae'
              description='Vanilla ice cream, brownie bites, chocolate sauce and squirty cream. (V)'
            />
            <MenuItem
              title='Fresh Fruit Jumble'
              description='With Cornish honey. (VEO) (GF)'
            />
          </MenuSection>
        </MainContent>
      </div>
    </>
  );
}
