import { Mulish } from '@next/font/google'
import LoginButton from '../components/login-btn'

const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LoginButton />
    </>
  )
}
