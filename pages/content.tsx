import Head from 'next/head'
import InfoCard from '../components/info_card'
import Layout from '../components/layout'

const what = [
  "Content writing is the process of creating written material for the purpose of communicating information, promoting a product or service, or building a brand. Content writing can take many forms, including blog posts, articles, product descriptions, e-books, white papers, social media posts, and more.",
  "When writing content, it is important to focus on creating high-quality, relevant, and engaging material that provides value to your audience. Content writing should also be optimized for search engines to help improve your search engine rankings and drive more organic traffic to your site.",
  "In short, content writing is an effective way to reach your target audience, build your brand, increase engagement and credibility, improve customer relationships, and cost-effectively drive leads and sales for your business.",

]

const who = [
  "Content writing is for businesses and organizations of all sizes, from startups to large enterprises, that want to improve their online presence, build their brand, and engage their audience. Content writing can benefit organizations in a wide range of industries, including technology, healthcare, finance, education, retail, and more.",
  "Here are some common use cases for content writing:",
  "1. Startups: Content writing can help startups establish a strong online presence, build their brand, and reach their target audience.",
  "2. Small businesses: Content writing is an effective way for small businesses to engage their audience, build their brand, and generate leads and sales.",
  "3. E-commerce and online businesses: Content writing can help online businesses improve their search engine rankings, increase engagement, and drive more sales.",
  "4. Enterprises: Enterprises can use content writing to improve their online presence, build their brand, and engage with customers and stakeholders.",
  "5. Content marketers: Content marketers use content writing to create and publish high-quality, relevant, and engaging content to reach their target audience and achieve their marketing goals.",
  "6. Bloggers and influencers: Content writing is also for bloggers and influencers who want to create high-quality, engaging content for their followers and build their brand.",
  "In short, content writing is for organizations and individuals who want to improve their online presence, build their brand, engage their audience, and drive leads and sales through effective content marketing.",
  
]

const how = [
    "Here are some reasons why investing in content writing can benefit you:",
    "1. Improved online presence: High-quality content can help improve your online presence and establish your brand as an authoritative source in your industry.",
    "2. Increased engagement: Well-written content can engage and inform your audience, increasing the time they spend on your site and their likelihood of taking action, such as making a purchase or filling out a contact form.",
    "3. Better search engine rankings: Good content is a critical factor in search engine optimization (SEO) and can help improve your rankings and drive more organic traffic to your site.",
    "4. Increased credibility: Consistently producing high-quality content can increase your credibility and establish you as a thought leader in your industry.",
    "5. Cost-effective marketing: Content marketing is a cost-effective marketing strategy that can help you reach a wider audience and generate leads over time.",
    "6. Better customer relationships: High-quality content can help you build relationships with your customers, providing them with valuable information and positioning you as a trusted advisor.",
    "In short, investing in content writing can help you improve your online presence, increase engagement, achieve better search engine rankings, establish credibility, cost-effectively reach a wider audience, and build better relationships with your customers."
]

const grid = "grid grid-cols-[1fr] max-w-full justify-center py-5"
const grid_sm = "sm:grid-cols-sm"
const grid_md = "md:grid-cols-md"
const grid_lg = "lg:grid-cols-lg"
const grid_xl = "xl:grid-cols-xl"
const grid_2xl = "2xl:grid-cols-2xl"

const title = "Content Writing - Balanced Solutions Software"
const description = how[7]

const Content = () => {
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
            content="https://balasolu.com/favicon.ico" />
      </Head>
      <div className={`${grid}`}>
        <InfoCard 
          header="What is content writing anyway?"
          content={what} />
        <InfoCard 
          header="Who is content writing for then?"
          content={who} />
        <InfoCard 
          header="How does investing in content writing benefit me?"
          content={how} />
      </div>
    </>
  )
}

export default Content