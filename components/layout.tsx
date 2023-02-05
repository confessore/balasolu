import Footer from './footer'
import Header from './header'
import Logo from './logo'
import Meta from './meta'
import NavCards from './nav_cards'
import { Akshar } from '@next/font/google'
import Network from './network'

const akshar = Akshar({ subsets: ['latin'] })

type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const main = `${akshar.className} flex flex-col justify-around items-center min-w-full min-h-screen bg-fuchsia-200 text-pink-900 opacity-90`
export const main_dark = `dark:bg-fuchsia-900 dark:text-pink-200`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main className={`${main} ${main_dark}`}>
        <div className="pt-20">{children}</div>
        <Logo />
        <NavCards />
        <Network />
      </main>
      <Footer />
    </>
  )
}

export default Layout
