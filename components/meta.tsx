import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
        <title>Balanced Solutions Software</title>
        <meta name="description" content="We shall handle the nerd stuff. Based in Ocala Florida we provide Digital Marketing and Content Writing services as well as Application Development and Cloud Hosting Services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon.ico"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon.ico"
        />
        <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon.ico"
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
        <meta property="og:image" content="/balasolu.svg" />
    </Head>
  )
}

export default Meta
