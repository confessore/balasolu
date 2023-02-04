import Head from 'next/head'

const description = "We shall handle the nerd stuff. Based in Ocala Florida we provide Digital Marketing and Content Writing services as well as Application Development and Cloud Hosting services."

const structuredData = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Balanced Solutions Software",
  "url": "https://balasolu.com",
  "logo": "https://balasolu.com/balasolu.svg",
  "description": `${description}`,
  "telephone": "+13522343458",
  "currenciesAccepted": "USD, BTC, ETH, LTC, XRP, XLM",
  "paymentAccepted": "Cash, Credit Card, Cryptocurrency",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1515 E Silver Springs Blvd Ste 110",
    "addressLocality": "Ocala",
    "addressRegion": "FL",
    "postalCode": "34470",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    },
  ],
}

const Meta = () => {
  return (
    <Head>
        <title>Balanced Solutions Software</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.ico"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon32.ico"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon16.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
        rel="mask-icon"
        href="/favicon/favicon.ico"
        color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          property="og:description"
          content={description} />
        <meta property="og:image" content="/balasolu.svg" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Head>
  )
}

export default Meta
