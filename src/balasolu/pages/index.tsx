import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/About';
import Contact from '../components/Contact';
import Emailer from '../components/Emailer';
import Echo from '../components/Echo';
import Footer from '../components/Footer';
import FTest from '../components/FTest';
import Header from '../components/Header';
import TopBar from '../components/TopBar';
import Services from '../components/Services';
import Service from '../components/Service';
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import CakeIcon from '@heroicons/react/24/outline/CakeIcon';
import CloudIcon from '@heroicons/react/24/outline/CloudIcon';
import { isPropertySignature } from 'typescript';
import axios from 'axios';
import QRCode from '../components/QRCode';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>balasolu</title>
        <meta name="description" content="we're your partner in the clouds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center text-black dark:text-white bg-zinc-900 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <Header />
          <div className="flex flex-wrap justify-center items-center">
            <Service icon={<GlobeAmericasIcon />} title="go global" highlight="serve in most major nations on the planet" description="when customer service and reliability mean everything, borders mean nothing" />
            <Service icon={<CodeBracketIcon />} title="we'll handle the nerd stuff" highlight="dreams become reality" description="everyone gets to send their kids to college or drive lambos if they're in to that kind of thing; we're not here to judge" />
            <Service icon={<CloudIcon />} title="we're your partner in the clouds" highlight="swift and responsive service availability anywhere your people are" description="redundancy and international stability is ensured with multi-regional replication" />
            <Service icon={<CakeIcon />} title="the cake is not a lie" highlight="scout's honor 🙋‍♂️" description="we throw mad cake parties" />
          </div>
          <FTest />
          <QRCode url="" />
          <Emailer />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  //Create fetch's options

 //Fetch data from the API

  // Pass data to the page via props
  return { props: {  } }
}