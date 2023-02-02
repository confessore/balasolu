import { Inter } from '@next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const info_card = "p-5 bg-fuchsia-200 text-pink-900 rounded-xl"
const info_card_dark = "dark:bg-fuchsia-900 dark:text-pink-200"
const info_card_hover = "hover:bg-pink-200"
const info_card_hover_dark = "dark:hover:bg-pink-900"
const info_card_hover_span = "[&:hover_span]:translate-x-2"
const span = "inline-block"
const h2 = "font-[600] mb-3 opacity-60 text-2xl"
const p = "font-serif text-md max-w-[90ch] py-2"

type Props = {
    header?: string,
    content?: string[],
}

const InfoCard = (props: Props) => {
    return (
        <>
            <div className={`${info_card} ${info_card_dark}`}>
                <h2 className={h2}>
                    {props.header}
                </h2>
                {props.content?.map((item, index) => <p key={index} className={p}>{item}</p>)}
            </div>
        </>
    )
}

export default InfoCard