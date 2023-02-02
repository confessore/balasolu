import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <>
            <div className={`flex flex-col justify-center items-center w-full p-5`}>
                <div className={`absolute z-1 w-[360px] h-[90px] bg-gradient-to-r from-pink-200 dark:from-pink-900 via-pink-900 dark:via-pink-200 to-pink-200 dark:to-pink-900 blur-2xl`} />
                <Link
                    href="/"
                    rel="noopener noreferrer"
                    className='text-center'>
                    <Image
                        src="/balasolu.svg"
                        alt="balasolu"
                        height={256}
                        width={256}
                        priority
                        className="invert" />
                    <strong className={`text-black`}>we shall handle the nerd stuff.</strong>   
                </Link>
            </div>
        </>
    )
}

export default Logo