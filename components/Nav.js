import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { breakpoint, color, typography } from '@styles/index';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;

  a {
    font-family: ${typography.family.headline};
    text-transform: uppercase;
    font-size: ${typography.size.f7};
    text-decoration: none;
    color: ${color.white};

    @media ${breakpoint.sm} {
      font-size: ${typography.size.f5};
    }
    @media ${breakpoint.md} {
      font-size: ${typography.size.f4};
    }
  }
`;

const NavLink = styled.p`
  padding: 1rem 0;
`;

export default function Nav() {
  return (
    <Wrapper>
      {/* <Link href='/' passHref>
        <NavLink>Top</NavLink>
      </Link> */}
      <Link href='#faqs' passHref>
        <NavLink>FAQs</NavLink>
      </Link>
      <Link href='#travel' passHref>
        <NavLink>Travel</NavLink>
      </Link>
      <Link href='#gifts' passHref>
        <NavLink>Gifts</NavLink>
      </Link>
      <Link href='#rsvp' passHref>
        <NavLink>RSVP</NavLink>
      </Link>
    </Wrapper>
  );
}
