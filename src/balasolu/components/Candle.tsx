import React, { Component, useEffect, useState } from 'react';
import Image from 'next/image';
import { loadScript } from "@paypal/paypal-js";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
  } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponent } from "@paypal/paypal-js/types/components/buttons";

interface IProps {
    name: string,
    imgsrc: string,
    highlight: string,
    description: string
    price: number
}

const Candle = (props: IProps) => {
    const [name, setName] = useState(props.name);
    const [imgsrc, setImgsrc] = useState(props.imgsrc);
    const [highlight, setHighlight] = useState(props.highlight);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [quantity, setQuantity] = useState(1);
    const currency: string = "USD";
    const style = {"layout": "vertical"};
    const showSpinner = true;
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


    return (
        <div className="md:flex w-full h-auto md:w-[32rem] md:h-[12rem] rounded-xl items-center m-1 p-8 md:p-0 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
            <div className="md:pl-6 text-center space-y-4">
                <span>
                    <Image src={imgsrc} alt="candle" className="w-24 h-24 md:w-28 md:h-auto md:rounded-none rounded-full mx-auto" />
                </span>
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-lg font-medium">
                        {name}
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-emerald-500 dark:text-emerald-400">
                        {highlight}
                    </div>
                    <div className="text-zinc-700 dark:text-zinc-500">
                        {description}
                    </div>
                    <div className="text-indigo-500 dark:text-indigo-400">
                        ${price} each and free shipping!
                    </div>
                    <select name="flavor" id="flavor">
                        <option value="pumpkin_pecan_waffle">pumpkin pecan waffle</option>
                        <option value="spiced_apple">spiced apple</option>
                        <option value="forest pine">forest pine</option>
                        <option value="sugar_cookie">sugar cookie</option>
                        <option value="vanilla">vanilla</option>
                    </select>
                    <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Candle;

export async function getServerSideProps() {
    
}
