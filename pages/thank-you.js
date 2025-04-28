import AttendanceResponse from '@components/AttendanceResponse';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You For Your Gift!</title>
      </Head>
      <AttendanceResponse title='Thank You!'>
        <p>
          Thank you so much for your wedding gift! We’re extremely grateful 🙏
        </p>
      </AttendanceResponse>
    </>
  );
}
