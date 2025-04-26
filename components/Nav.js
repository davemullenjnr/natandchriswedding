import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const isHome = router.pathname === '/';

  // Build the nav items
  const navItems = [
    { label: 'FAQs', href: '#faqs' },
    { label: 'Travel', href: '#travel' },
    { label: 'Gifts', href: '#gifts' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  // On non-home pages, modify the hrefs to point to /#section
  const itemsToRender = isHome
    ? navItems
    : [
        { label: 'Home', href: '/' },
        ...navItems.map((item) => ({
          ...item,
          href: `/${item.href}`,
        })),
      ];

  return (
    <Wrapper>
      {itemsToRender.map(({ label, href }) => (
        <Link key={label} href={href} passHref>
          <NavLink>{label}</NavLink>
        </Link>
      ))}
    </Wrapper>
  );
}
