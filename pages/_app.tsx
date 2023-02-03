import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/layout';
import Tawk from '../components/tawk';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Tawk />
      <Analytics />
    </>
  )
}
