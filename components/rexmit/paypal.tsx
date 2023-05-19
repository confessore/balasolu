import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import Reservations from "./reservations";

type Props = {
  guild_id?: string
}


const paypalScriptOptions: PayPalScriptOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENTID || '',
    currency: "USD"
  };

export default function Paypal(props: Props) {
    return (
      <>
        <PayPalScriptProvider options={paypalScriptOptions}>
            <Reservations guild_id={props.guild_id} />
        </PayPalScriptProvider>
      </>
  )
}