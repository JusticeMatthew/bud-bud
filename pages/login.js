import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Login</title>
      </Head>
      <Header />
      <main className='flex-grow'>
        <h1>LOGIN PAGE</h1>
        <h2>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </h2>
      </main>
      <Footer />
    </div>
  );
}
