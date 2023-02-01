import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-wrap min-h-full bg-indigo-200 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 justify-around items-center">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
