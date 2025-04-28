// pages/thank-you-attending.js
import AttendanceResponse from '@components/AttendanceResponse';
import Head from 'next/head';

export default function Attending() {
  return (
    <>
      <Head>
        <title>Attending – RSVP</title>
      </Head>
      <AttendanceResponse title='Thank You!'>
        <p>
          We’re so happy you’ll be joining us on our special day. We can’t to
          party with you!
        </p>
      </AttendanceResponse>
    </>
  );
}
