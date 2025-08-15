// pages/registry.js
import Head from 'next/head';
import styled from 'styled-components';

const PlainWrap = styled.main`
  /* build something unique here */
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
`;

function Registry() {
  return (
    <>
      <Head>
        <title>Wedding Registry</title>
        <meta name='robots' content='noindex' />
      </Head>
      <PlainWrap>
        <div>
          <h1>Our Wedding Registry</h1>
          <p>
            Add your custom content/design here, independent of the site layout.
          </p>
        </div>
      </PlainWrap>
    </>
  );
}

Registry.noLayout = true; // <-- key line
export default Registry;
