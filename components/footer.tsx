import Container from './container'
import Image from 'next/image'
import Balasolu from './balasolu'

const Footer = () => {
  return (
    <footer className={`bg-fuchsia-200 border-t border-fuchsia-400 dark:bg-fuchsia-900 dark:border-fuchsia-600`}>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            We shall handle the nerd stuff
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href='sms:+1(352)234-3458'
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-md"
            >
              SMS Contact
            </a>
            <a
              href='tel:+1(352)234-3458'
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
