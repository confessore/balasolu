import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <>
      <div className={`flex w-full flex-col items-center justify-center p-5`}>
        <div
          className={`z-1 absolute h-[90px] w-[360px] bg-gradient-to-r from-pink-200 via-pink-900 to-pink-200 blur-2xl dark:from-pink-900 dark:via-pink-200 dark:to-pink-900`}
        />
        <Link href="/" rel="noopener noreferrer" className="text-center">
          <Image
            src="/balasolu.svg"
            alt="balasolu"
            height={256}
            width={256}
            priority
            className="invert"
          />
          <strong className={`text-black`}>
            we shall handle the nerd stuff
          </strong>
        </Link>
      </div>
    </>
  )
}

export default Logo
