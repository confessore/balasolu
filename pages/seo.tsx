import Head from 'next/head'
import InfoCard from '../components/info_card'

const what = [
    "Search engine optimization (SEO) is the process of optimizing a website to improve its ranking and visibility in search engine results pages (SERPs). SEO involves a variety of tactics, including keyword research, on-page optimization, technical optimization, link building, and more, to help a website rank higher in search results and attract more organic traffic.",
    "SEO is an ongoing process, and the algorithms used by search engines are constantly evolving. As a result, it is important to stay up-to-date with best practices and to continuously optimize a website to improve its ranking and visibility in search results.",
    "In short, SEO is an effective and cost-effective way to improve a website's ranking and visibility in search results, attract more organic traffic, and achieve marketing goals."
]

const who = [
    "Search engine optimization (SEO) is for businesses, organizations, and individuals who want to improve their online visibility, attract more organic traffic to their website, and achieve their marketing goals.",
    "Here are some common use cases for SEO:",
    "• Startups and small businesses: SEO is an effective way for startups and small businesses to reach their target audience and compete with larger companies in search results.",
    "• E-commerce and online businesses: Online businesses can use SEO to drive more organic traffic to their website, improve their search engine rankings, and increase sales.",
    "• Enterprises: Enterprises can use SEO to improve their online visibility, reach new customers, and drive leads and sales.",
    "• Bloggers and influencers: SEO is also for bloggers and influencers who want to reach a larger audience and build their online presence.",
    "• Non-profit organizations: Non-profit organizations can use SEO to reach their target audience, build their brand, and achieve their mission.",
    "• Content marketers: Content marketers use SEO to improve the ranking and visibility of their content in search results, reach their target audience, and achieve their marketing goals.",
    "In short, SEO is for organizations and individuals who want to improve their online visibility, attract more organic traffic, and achieve their marketing goals through search engine optimization."
]

const how = [
    "Here are some reasons why investing in search engine optimization (SEO) can benefit you:",
    "• Increased visibility: SEO helps improve your website's visibility on search engines, making it easier for potential customers to find you when they search for keywords related to your business.",
    "• Better user experience: SEO focuses on improving the user experience, which can help increase engagement and reduce bounce rates, leading to better rankings and more organic traffic.",
    "• Cost-effective marketing: SEO is a cost-effective marketing strategy compared to paid advertising, as it helps you reach a wider audience organically and build a sustainable online presence over time.",
    "• Increased credibility: A higher search engine ranking can increase your credibility and trust, making it more likely that people will visit your website and consider doing business with you.",
    "• Data tracking: SEO metrics allow you to track the effectiveness of your optimization efforts and make data-driven decisions to continually improve your online marketing efforts and maximize ROI.",
    "• Long-term results: Unlike paid advertising, the benefits of SEO are long-lasting and can continue to drive traffic and generate leads for your business for years to come.",
    "In short, investing in SEO can help you increase visibility, improve the user experience, cost-effectively reach a wider audience, establish credibility, track performance, and achieve long-term results for your business."
]

const grid = "grid grid-cols-[1fr] max-w-full justify-center py-5"
const grid_sm = "sm:grid-cols-sm"
const grid_md = "md:grid-cols-md"
const grid_lg = "lg:grid-cols-lg"
const grid_xl = "xl:grid-cols-xl"
const grid_2xl = "2xl:grid-cols-2xl"

const title = "Search Engine Optimization (SEO) - Balanced Solutions Software"
const description = how[7]

const structuredData = {
    "@context": "http://schema.org",
    "@type": "Product",
    "brand": "Balanced Solutions Software",
    "logo": "https://balasolu.com/balasolu.svg",
    "name": "Search Engine Optimization (SEO)",
    "category": "Services",
    "description": `${description}`,
}

const SEO = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description} />
        <meta
            property="og:image"
            content="https://balasolu.com/favicon/favicon.ico" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      <h1>{title}</h1>
      <div className={`${grid}`}>
        <InfoCard 
          header="What is search engine optimization (SEO) anyway?"
          content={what} />
        <InfoCard 
          header="Who is search engine optimization (SEO) for then?"
          content={who} />
        <InfoCard 
          header="How does investing in search engine optimization (SEO) benefit me?"
          content={how} />
      </div>
    </>
  )
}

export default SEO