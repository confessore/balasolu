import { Mulish } from '@next/font/google'
import Discord from 'components/rexmit/discord'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const mulish = Mulish({ subsets: ['latin'] })

export default function Rexmit() {
  //const { data: session } = useSession()

  return (
    <>
      <h1 className='text-2xl'>rexmit retransmits live audio to discord voice channels</h1>
      <p className="text-lg">rexmit is made with rust, serenity, songbird and utilities such as ffmpeg as well as yt-dlp</p>
      <p className='text-center m-1 p-1'>tooltip: you can click the discord logo to invite rexmit to your server</p>
      <div className="flex justify-center items-center m-1 p-1">
        <Discord />
      </div>
    </>
  )
}
