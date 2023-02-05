import { Mulish } from '@next/font/google'
import React from 'react'

const mulish = Mulish({ subsets: ['latin'] })

const nav_card = `p-5 bg-fuchsia-200 text-pink-900 rounded-xl text-center`
const nav_card_dark = `dark:bg-fuchsia-900 dark:text-pink-200`
const nav_card_hover = `hover:bg-pink-200`
const nav_card_hover_dark = `dark:hover:bg-pink-900`
const nav_card_hover_span = '[&:hover_span]:translate-x-2'
const span = 'inline-block'
const h2 = 'font-[600] mb-3'
const p = 'opacity-60'

type Props = {
  url?: string
  blank?: boolean
  header?: string
  content?: string
}

const NavCard = (props: Props) => {
  return (
    <>
      <a
        href={props.url}
        className={`${nav_card} ${nav_card_dark} ${nav_card_hover} ${nav_card_hover_dark} ${nav_card_hover_span}`}
        target={props.blank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        <h2 className={`${h2}`}>
          {props.header} <span className={`${span}`}>-&gt;</span>
        </h2>
        <p className={`${p}`}>{props.content}</p>
      </a>
    </>
  )
}

export default NavCard
