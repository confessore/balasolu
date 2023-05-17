import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";


const paypalScriptOptions: PayPalScriptOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENTID || '',
    currency: "USD"
  };

export default function Discord() {
    return (
      <>
        <PayPalScriptProvider options={paypalScriptOptions}>
            
        </PayPalScriptProvider>
      </>
  )
}