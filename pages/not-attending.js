// pages/thank-you-not-attending.js
import ThankYou from '@components/ThankYou';
import Head from 'next/head';

export default function NotAttending() {
  return (
    <>
      <Head>
        <title>Thank You – RSVP</title>
      </Head>
      <ThankYou title='Thank You!'>
        <p>
          We're sorry you can't make it, but we really appreciate you letting us
          know.
        </p>
        <p>We'll be thinking of you on the day ❤️</p>
      </ThankYou>
    </>
  );
}
