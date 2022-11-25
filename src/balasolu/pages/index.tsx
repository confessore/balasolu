import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
      <Head>
        <title>skadaext.vip</title>
        <meta name="description" content="skadaext is an extension to skada for wotlk 3.3.5a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  )
}

export default Home
