import React, { Component, useEffect, useState } from 'react';
import Image from 'next/image';
import PaypalReducer from './PaypalReducer';

interface IProps {
    imgsrc: string,
    highlight: string,
    description: string
    price: number,
    uid: string
}

const TapCards = (props: IProps) => {
    const [name, setName] = useState("tap card");
    const [imgsrc, setImgsrc] = useState(props.imgsrc);
    const [highlight, setHighlight] = useState(props.highlight);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [uid, setUid] = useState(props.uid);
    const [quantity, setQuantity] = useState(1);
    const paypal_description = `${quantity} ${quantity > 1 ? `${name}s` : `${name}`} uid:${uid}`

    return (
        <div className="md:flex w-full md:w-fit h-auto rounded-xl items-center m-1 p-8 md:p-0 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
            <div className="md:pl-6 text-center space-y-4">
                <span>
                    <Image src={imgsrc} alt="" className="w-24 h-24 md:w-28 md:h-auto md:rounded-none rounded-full mx-auto" />
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
                        roughly ${price} each and free shipping!
                    </div>
                    <select name="quantity" id="quantity" onChange={(event) => setQuantity(Number(event.target.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
            <div className="md:pr-6 text-center space-y-4">
                <PaypalReducer currency={'USD'} showSpinner={true} item={name} type={uid} description={paypal_description} amount={price} quantity={quantity} />
            </div>
        </div>
    );
}

export default TapCards

export async function getServerSideProps() {

}
