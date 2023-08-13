import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    const { currency, amount, name, quantity } = await request.json();
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: currency,
              unit_amount: amount,
              product_data: {
                name: name,
              },
            },
            quantity: quantity,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      });

      return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } catch (err: any) {
      console.log(err);
      return NextResponse.json(
        { error: { statusCode: 500, message: err.message } },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json("Method Not Allowed", { status: 405 });
  }
}
