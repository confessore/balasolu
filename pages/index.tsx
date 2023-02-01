import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Solutions Software</title>
        <meta name="description" content="we'll handle the nerd stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/favicon.ico"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta property="og:image" content="/balasolu.svg" />
      </Head>
      <div className="flex flex-col justify-center items-center p-3 bg-slate-800 h-screen">
        <Image
          src="/balasolu.svg"
          alt="balasolu"
          height={256}
          width={256}
          priority
          className="invert" />
          <strong className={`${inter.className} text-slate-400`}>we&apos;ll handle the nerd stuff</strong>
          <div className="pt-3 text-center">
            <p className={`${inter.className} text-sm text-slate-200`}>North Central Florida</p>
            <a href="sms:+1(352)234-3458" className={`${inter.className} text-emerald-500 text-lg`}><strong>(352) 234 3458</strong></a>
          </div>
          <div className="pt-3 text-center">
            <p className={`${inter.className} text-sm text-slate-200`}>Northeast Florida</p>
            <a href="sms:+1(904)853-0345" className={`${inter.className} text-emerald-500 text-lg`}><strong>(904) 853 0345</strong></a>
          </div>
          <div className="flex flex-wrap gap-3 py-5 justify-center items-center w-full">
            <div className="flex flex-col text-center">
              <Image
                src="/milkdrunk.png"
                alt="milkdrunk"
                width={96}
                height={96}
                className="rounded-xl" />
                <p className="text-slate-200">coming soon!</p>
            </div>
            <a
              href="https://ncflda.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/ncflda.png"
                alt="North Central Florida Driving Academy"
                width={128}
                height={128} 
                className="rounded-xl" />
            </a>
            <a
              href="https://therightcareer.org"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/ccs.png"
                alt="Community and Career Solutions"
                width={128}
                height={128} 
                className="rounded-xl" />
            </a>
            <a
              href="https://noodsplease.com"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/noodsplease.png"
                alt="noods please."
                width={96}
                height={96} 
                className="rounded-xl" />
            </a>
          </div>
      </div>
    </>
  )
}
