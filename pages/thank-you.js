// pages/thank-you-attending.js
import AttendanceResponse from '@components/AttendanceResponse';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>
      <AttendanceResponse title='Thank You!'>
        <p>
          Thank you so much for your wedding gift! We really appreciate it and
          will thank you personally soon.
        </p>
      </AttendanceResponse>
    </>
  );
}
