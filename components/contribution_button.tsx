"use client";
import { checkoutPrice } from "@/lib/helpers";
import getStripe from "@/lib/get_stripe";
import { useState } from "react";

const dev = process.env.NODE_ENV !== "production";

export default function ContributionButton() {
  const [disabled, setDisabled] = useState(false);
  const handleCheckout = async () => {
    try {
      setDisabled(true);
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
      setDisabled(false);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => handleCheckout()}
      className="w-72 rounded-md bg-gray-500 p-3 text-center hover:bg-transparent"
    >
      Click here to make a contribution!
    </button>
  );
}
