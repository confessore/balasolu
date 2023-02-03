import Image from 'next/image'

const footer_mobile = "flex flex-col w-full justify-center items-center opacity-90 border-t border-fuchsia-900"
const footer_mobile_dark = "dark:border-fuchsia-200"

const div_mobile = "flex w-full justify-center items-center text-xl bg-fuchsia-900 text-pink-200 p-5"
const div_mobile_dark = "dark:bg-fuchsia-200 dark:text-pink-900"

const Balasolu = () => {
  return (
    <div className={`${footer_mobile} ${footer_mobile_dark}`}>
        <div className={`${div_mobile} ${div_mobile_dark}`}>
            <a href="https://balasolu.com">
                <Image
                    src="/balasolu.svg"
                    alt="balasolu Balanced Solutions Software Digital Marketing Content Writing Application Development Cloud Hosting Services"
                    height={256}
                    width={256}
                    priority
                    className="dark:invert" />
            </a>
        </div>
    </div>
  )
}

export default Balasolu
