// pages/thank-you-attending.js
import ThankYou from '@components/ThankYou';
import Head from 'next/head';
import styled from 'styled-components';

export default function Attending() {
  return (
    <>
      <Head>
        <title>Thank You – RSVP</title>
      </Head>
      <ThankYou title='Thank You!'>
        <p>We're so happy you'll be joining us on our special day.</p>
        <p>We'll be in touch with more details soon.</p>
      </ThankYou>
    </>
  );
}
