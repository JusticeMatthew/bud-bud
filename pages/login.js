import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Login</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex justify-center items-center'>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
