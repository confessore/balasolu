export const checkoutPriceData = async ({
  url,
  data,
}: {
  url: string;
  data?: {
    currency: string;
    amount: number;
    name: string;
    quantity: number;
  };
}) => {
  const body = JSON.stringify(data);
  const res: Response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: body,
  });
  if (!res.ok) {
    console.log("Error in postData", { url, data, res });
    throw Error(res.statusText);
  }
  return res.json();
};

export const checkoutPrice = async ({
  url,
  data,
}: {
  url: string;
  data?: {
    product_id: string;
    quantity: number;
  };
}) => {
  const body = JSON.stringify(data);
  const res: Response = await fetch(url, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: body,
  });
  if (!res.ok) {
    console.log("Error in postData", { url, data, res });
    throw Error(res.statusText);
  }
  return res.json();
};
