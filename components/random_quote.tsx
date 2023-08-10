import Quote from "@/components/quote";

async function getData() {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://balasolu.com";
  const res = await fetch(`${server}/api/random_quote`, { next: { revalidate: 180 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    //throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RandomQuote() {
  const quote = await getData();
  return (
      <Quote content={quote["quote"]["content"]} author={quote["quote"]["author"]} />
  );
}
