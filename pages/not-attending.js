// pages/thank-you-not-attending.js
import AttendanceResponse from '@components/AttendanceResponse';
import Head from 'next/head';

export default function NotAttending() {
  return (
    <>
      <Head>
        <title>Not Attending – RSVP</title>
      </Head>
      <AttendanceResponse title='Thank You!'>
        <p>
          We're sorry you can't make it, but we really appreciate you letting us
          know. We'll be thinking of you on the day ❤️
        </p>
      </AttendanceResponse>
    </>
  );
}
