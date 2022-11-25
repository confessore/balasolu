import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":
    process.env.NEXT_PUBLIC_PAYPAL_CLIENTID || '',
  currency: "USD"
};

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {

  return (
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Component {...pageProps} />
      </PayPalScriptProvider>);
}

export default MyApp
