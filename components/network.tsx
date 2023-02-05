import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3 py-5">
        <a href="https://ncflda.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/ncflda.png"
            alt="North Central Florida Driving Academy"
            width={128}
            height={128}
            className="rounded-xl"
          />
        </a>
        <a
          href="https://therightcareer.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ccs.png"
            alt="Community and Career Solutions"
            width={128}
            height={128}
            className="rounded-xl"
          />
        </a>
        <a
          href="https://noodsplease.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/noodsplease.png"
            alt="noods please."
            width={96}
            height={96}
            className="rounded-xl"
          />
        </a>
        <div className="flex flex-col text-center">
          <Image
            src="/milkdrunk.png"
            alt="milkdrunk"
            width={96}
            height={96}
            className="rounded-xl"
          />
          <p className="text-pink-900 dark:text-pink-200">coming soon!</p>
        </div>
      </div>
    </>
  )
}

export default Logo
