import React, { Component, useEffect, useState } from 'react'
import Image from 'next/image'
import PaypalReducer from './paypal_reducer'

interface IProps {
    name: string,
    imgsrc: string,
    highlight: string,
    description: string
    price: number
}

const ProductSolo = (props: IProps) => {
    const [name, setName] = useState(props.name);
    const [imgsrc, setImgsrc] = useState(props.imgsrc);
    const [highlight, setHighlight] = useState(props.highlight);
    const [description, setDescription] = useState(props.description);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.price)
    /*const subtotal = props.price * quantity;
    const tax = (subtotal * 0.039) + 0.32;
    const total = Math.floor(subtotal + tax);
    const [price, setPrice] = useState(total);*/
    const paypal_description = `${quantity} ${type} ${name}`;

    return (
        <div className="md:flex w-full h-auto md:w-fit rounded-xl items-center m-1 p-8 md:p-0 bg-gray-200 dark:bg-gray-800 bg-opacity-90">
            <div className="md:pl-6 text-center space-y-4">
                <span>
                    <Image src={imgsrc} alt="" width={128} height={128} className="mx-auto" />
                </span>
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <div>
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
                        {name}
                    </p>
                </div>
                <div className="font-medium">
                    <div className="text-emerald-500">
                        {highlight}
                    </div>
                    <div className="text-gray-800 dark:text-gray-200">
                        {description}
                    </div>
                    <div className="text-blue-500">
                        ${price}
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
                
            </div>
        </div>
    );
}
//<PaypalReducer currency={'USD'} showSpinner={true} item={name} type={type} description={paypal_description} amount={price} quantity={quantity} />
export default ProductSolo

export async function getServerSideProps() {

}