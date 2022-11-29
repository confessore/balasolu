import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalSolo = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");

  // creates a paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              // charge users $4.99 per order
              value: 4.99,
            },
          },
        ],

        // remove the applicaiton_context object if you need your users to add a shipping address
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID: any) => {
        setOrderID(orderID);
        return orderID;
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
  const onError = (data: Record<string, unknown>) => {
    setPaypalErrorMessage("Something went wrong with your payment")
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">
          Payments with{" "}
          <a className="text-blue-600" href="https://paypal.com">
            Paypal!
          </a>
        </h1>
        <h1 className="text-gray-500 mt-5 font-medium mb-5">
          Pay by card with Paypal
        </h1>
        <div className="mt-1 max-w-md">
          <PayPalButtons
            style={{
              color: "white",
              shape: "pill",
              label: "pay",
              tagline: false,
              layout: "vertical",
            }}
            className="bg-black"
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />

          {/* Show an error message on the screen if payment fails */}
          {paypalErrorMessage && (
            <p className="text-red-600">{paypalErrorMessage}</p>
          )}

          <p className="mt-1 font-semibold">
            Payer details will show up below once payment is completed:
          </p>

          {succeeded && (
            <section>
              
              {billingDetails && (
                <div>
                  <pre>{JSON.stringify(billingDetails, undefined, 2)}</pre>
                </div>
              )}
            </section>
          )}
        </div>
    

      <div className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://adebola.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by Adebola
        </a>
      </div>
    </div>
  );
};

export default PaypalSolo;