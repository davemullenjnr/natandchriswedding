import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { color, typography } from '@styles/index';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;

  a {
    font-family: ${typography.family.title};
    text-transform: uppercase;
    font-size: ${typography.size.f5};
    text-decoration: none;
    color: ${color.white};

    /* &:hover {
      text-decoration: underline;
    } */
  }
`;

const NavLink = styled.p`
  padding: 1rem 0;
`;

export default function Nav() {
  return (
    <Wrapper>
      <Link href='/' passHref>
        <NavLink>Home</NavLink>
      </Link>
      <Link href='/faqs' passHref>
        <NavLink>FAQs</NavLink>
      </Link>
      <Link href='/location' passHref>
        <NavLink>Location</NavLink>
      </Link>
    </Wrapper>
  );
}
