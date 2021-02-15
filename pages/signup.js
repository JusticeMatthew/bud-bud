import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Signup</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex justify-center items-center'>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
