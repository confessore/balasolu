import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Balanced Solutions Software, Inc.</title>
        <meta name="description" content="we'll handle the nerd stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <p className={`${inter.className} text-sm`}>North Central Florida</p>
            <a href="sms:+1(352)234-3458" className={`${inter.className} text-emerald-500 text-lg`}><strong>(352) 234 3458</strong></a>
          </div>
          <div className="pt-3 text-center">
            <p className={`${inter.className} text-sm`}>Northeast Florida</p>
            <a href="sms:+1(904)853-0345" className={`${inter.className} text-emerald-500 text-lg`}><strong>(904) 853 0345</strong></a>
          </div>
      </div>
    </>
  )
}
