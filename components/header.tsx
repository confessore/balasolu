import React from 'react'

export const header_mobile =
  'fixed flex w-full h-16 justify-center items-center z-10 bg-fuchsia-200 text-pink-900 opacity-60 py-5'
export const header_mobile_dark = `dark:bg-fuchsia-900 dark:text-pink-200`
export const header_md = ''

export const a_mobile = ''
export const a_mobile_dark = ''

const Header = () => {
  return (
    <>
      <div className={`${header_mobile} ${header_mobile_dark}`}>
        <a
          href="tel:+1(352)234-3458"
          className={`${a_mobile} ${a_mobile_dark}`}
        >
          Tap here to reach us at&nbsp;
          <strong className={`text-pink-900 dark:text-pink-200`}>
            (352) 234 3458
          </strong>
        </a>
      </div>
    </>
  )
}

export default Header
