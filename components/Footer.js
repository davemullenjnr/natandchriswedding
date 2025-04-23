import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { color, typography } from '@styles/index';

const Wrapper = styled.div`
  padding: 1rem 0rem;
  font-size: ${typography.size.f8};
  color: ${color.white};

  p {
    display: inline-block;
  }
`;

const NavLink = styled.span``;

export default function Footer() {
  return (
    <Wrapper>
      <p>
        Website by {}
        <Link href='https://davemullenjnr.co.uk' passHref>
          <NavLink>Dave Mullen Jnr</NavLink>
        </Link>
      </p>
    </Wrapper>
  );
}
