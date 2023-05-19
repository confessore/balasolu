import { useEffect, useState } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const style: Style = {
    layout: "vertical",
    color: "gold",
    label: "pay",
    shape: "pill"
}

type Props = {
    currency: string,
    showSpinner: boolean,
    item: string,
    type: string,
    amount: number,
    quantity: number,
    items: {
        name: string;
        quantity: number;
        unit_amount: {
            currency_code: string;
            value: number;
        };
        description: string;
    }[],
    total: number,
    name: string,
    telephone: string,
    guild_id?: string,
}

type Style = {
    color?: string | any,
    layout?: string | any,
    label?: string | any,
    shape?: string | any
}

type Amount = {
    currency_code: string,
    value: number
}

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalReducer = (props: Props) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{options, isPending}, dispatch] = usePayPalScriptReducer();
    const [succeeded, setSucceeded] = useState(false);
    const [guild_id, set_guild_id] = useState(props.guild_id);
    const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
    const [orderId, setOrderId] = useState(false);
    const [billingDetails, setBillingDetails] = useState("");

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: props.total,
                            breakdown: {
                                item_total: {
                                    currency_code: 'USD',
                                    value: props.total
                                },
                            },
                        },
                        items: props.items
                    }
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
            guild_id
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
    }, [props.currency, props.showSpinner, props.total, props.name, props.telephone]);

    return (<>
            { (props.showSpinner && isPending) && <div className="spinner" /> }
            { 
                !succeeded && 
                    <PayPalButtons
                        style={style}
                        disabled={false}
                        forceReRender={[props.name, props.telephone, props.total, props.amount, props.type, props.item, props.quantity, props.currency, style]}
                        fundingSource={undefined}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                    />
            }
            { 
                succeeded && 
                    <p>payment was successful! check your email for confirmation.</p>
            }
        </>
    );
}

export default PaypalReducer