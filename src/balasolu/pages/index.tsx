import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
      <Head>
        <title>balasolu</title>
        <meta name="description" content="we're your partner in the clouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  )
}

export default Home
