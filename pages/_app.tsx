import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import Tawk from '../components/tawk';
import GTag from '../components/gtag';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GTag />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Tawk />
    </>
  )
}
