import { Mulish } from '@next/font/google'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const mulish = Mulish({ subsets: ['latin'] })

export default function Profile() {
  //const { data: session } = useSession()

  return (
    <>
    </>
  )
}
