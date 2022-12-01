import { useEffect, useState } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const style: Style = {
    layout: "vertical",
    color: "silver",
    label: "pay",
    shape: "pill"
}

type Props = {
    currency: string,
    showSpinner: boolean,
    item: string,
    type: string,
    description: string,
    amount: number,
    quantity: number
}

type Style = {
    color?: string | any,
    layout?: string | any,
    label?: string | any,
    shape?: string | any
}

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalReducer = (props: Props) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{options, isPending}, dispatch] = usePayPalScriptReducer();
    const [succeeded, setSucceeded] = useState(false);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderId, setOrderId] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {
        const subtotal = props.amount * props.quantity;
        const tax = (subtotal * 0.039) + 0.32;
        const total = Math.ceil(subtotal + tax);
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            currency_code: props.currency,
                            value: total,
                        },
                        description: props.description
                    },
                ],
            })
            .then((orderId: any) => {
                setOrderId(orderId);
                return orderId;
            });
    };

    // handles when a payment is confirmed by paypal
    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
        const {payer} = details;
        setBillingDetails(payer);
        setSucceeded(true);
        })
    };

    // handles when a payment is declined
    const onError = (data: any) => {
        setPaypalErrorMessage("Something went wrong with your payment")
    };

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: props.currency,
            },
        });
    }, [props.currency, props.showSpinner]);

    return (<>
            { (props.showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[props.amount, props.type, props.item, props.quantity, props.currency, style]}
                fundingSource={undefined}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
            />
        </>
    );
}

export default PaypalReducer