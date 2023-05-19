import { Inter } from '@next/font/google'
import React, { useEffect, useState } from 'react'
import PaypalReducer from './paypal_reducer'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    url?: string,
    blank?: boolean,
    header?: string,
    content?: string,
    packages?: (string | number)[][],
    guild_id?: string,
}

const reservation_options = [
    ["+1 Month", 10],
    ["+3 Months", 27],
    ["+6 Months", 48],
    ["+12 Months", 84]
]

const btw = "flex flex-wrap justify-center items-center py-1"
const options = "flex flex-col justify-center items-center py-1 gap-y-1"
const pricing = "grid grid-cols-2 justify-center items-center py-1"
const p = "rounded-xl text-lg text-center justify-center items-center text-gray-800 dark:text-gray-200 p-1 w-[256px]"
const h2 = "font-[600] mb-3 opacity-60 max-w-full rounded-xl p-1 text-2xl text-center justify-center items-center text-gray-800 dark:text-gray-200"
const selected = "bg-blue-500"
const input = "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border h-12 border-gray-800 dark:border-gray-200 rounded-md p-3"

type Amount = {
    currency_code: string,
    value: number
}

type PurchaseUnit = {
    amount: Amount
    description: string
}

const Reservations = (props: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [items, setItems] = useState({} as any[])
    const [subtotal, setSubtotal] = useState(0)
    const [surcharge, setSurcharge] = useState(0)
    const [total, setTotal] = useState(0)

    const createItem = (
        name: string,
        quantity: number,
        unit_amount: {currency_code: string, value: number},
        description: string) => {
        const item = {
            name,
            quantity,
            unit_amount,
            description
        }
        return item
    }

    const getSelectedPackageName = () => 
        (reservation_options[selectedIndex][0] as string)

    const getSelectedPackagePrice = () => 
        (reservation_options[selectedIndex][1] as number)

    const createAmount = (value: number) => {
        return {currency_code: 'USD', value: value}
    }

    const getItems = () => {
        let items = [
            createItem(
                `${getSelectedPackageName()} | ${props.guild_id}`,
                1,
                createAmount(getSelectedPackagePrice()),
                getSelectedPackageName()
            ),
        ]

        items.push(
            createItem("Surcharge",
            1,
            createAmount(surcharge),
            "Surcharge"
        ))

        setItems(items)

        return items
    }

    const calcSubtotal = () => {
        const subtotal = getSelectedPackagePrice();
        setSubtotal(subtotal)
        return subtotal
    }

    const calcSurcharge = () =>
    {
        const surcharge = Math.ceil((subtotal * 0.03))
        setSurcharge(surcharge)
        return surcharge
    }

    const calcTotal = () => {
        const total = calcSubtotal() + calcSurcharge()
        setTotal(total)
        return total
    }

    useEffect(() => {
        getItems()
        calcTotal()
    })

    return (
        <>
            <div className={btw}>
                <div className={options}>
                    <p className={h2}>How much time should we add to your reservation?</p>
                    {reservation_options.map((kvp, index) => {
                        return (
                            <p 
                                key={index}
                                className={`${p} ${index === selectedIndex ? selected : ""} border border-gray-800 dark:border-gray-200 p-1`}
                                onClick={() => { setSelectedIndex(index) }}>
                                    {kvp[0]}
                            </p>
                        )
                    })}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className={pricing}>
                        <p className={h2}>
                            Total:
                        </p>
                        <p className={`${h2} text-emerald-500 dark:text-emerald-500 font-[600]`}>
                            ${total}
                        </p>
                    </div>
                    <div className="rounded-xl bg-white p-5">
                        <PaypalReducer currency={''} showSpinner={false} item={''} type={''} amount={total} quantity={0} items={items} total={total} name={''} telephone={''} guild_id={props.guild_id}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservations