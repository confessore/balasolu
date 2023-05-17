import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '../components/layout'
import Tawk from '../components/tawk'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { /*session,*/ ...pageProps },
}: AppProps) {
  return (
    <>
        <GoogleAnalytics trackPageViews />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Tawk />
    </>
  )
}

/*<SessionProvider session={session}></SessionProvider>*/
