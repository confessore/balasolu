"use client";
import { checkoutPrice } from "@/lib/helpers";
import getStripe from "@/lib/get_stripe";

const dev = process.env.NODE_ENV !== "production";

export default function TipButton() {
  const handleCheckout = async () => {
    try {
      const { sessionId } = await checkoutPrice({
        url: "/api/checkout/price",
        data: {
          product_id: dev
            ? "price_1NeNnaLbQoCnScgfUHTYzkva"
            : "price_1NeS4dLbQoCnScgfyaxApbpq",
          quantity: 1,
        },
      });
      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
    }
  };

  return (
    <button
      type="button"
      disabled={false}
      onClick={() => handleCheckout()}
      className="w-72 rounded-md bg-gray-500 p-3 text-center hover:bg-transparent"
    >
      Click here to send a tip!
    </button>
  );
}
