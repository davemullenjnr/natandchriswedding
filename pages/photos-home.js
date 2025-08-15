import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Wrap = styled.main`
  min-height: 90vh;
  display: grid;
  place-items: center;
  padding: 2rem;
`;

function PhotosHome() {
  return (
    <>
      <Head>
        <title>Photos</title>
        <meta name='robots' content='noindex' />
      </Head>
      <Wrap>
        <div>
          <h1>Photos</h1>
          <Link href='/registry'>Registry Office Photos</Link>
          <p>Ceremony Photos (coming soon)</p>
        </div>
      </Wrap>
    </>
  );
}

PhotosHome.noLayout = true; // <-- renders without your universal header/footer
export default PhotosHome;
