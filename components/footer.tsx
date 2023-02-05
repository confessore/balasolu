import Container from './container'
import Image from 'next/image'
import Balasolu from './balasolu'

const Footer = () => {
  return (
    <footer
      className={`border-t border-fuchsia-400 bg-fuchsia-200 dark:border-fuchsia-600 dark:bg-fuchsia-900`}
    >
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-[2.5rem]">
            We shall handle the nerd stuff
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              href="sms:+1(352)234-3458"
              className="mx-3 mb-6 rounded-md border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
            >
              SMS Contact
            </a>
            <a
              href="tel:+1(352)234-3458"
              className="mx-3 font-bold hover:underline"
            >
              Voice Contact
            </a>
          </div>
        </div>
      </Container>
      <Balasolu />
    </footer>
  )
}

export default Footer
