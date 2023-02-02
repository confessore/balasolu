import Head from 'next/head'
import InfoCard from '../components/info_card'
import Layout from '../components/layout'

const what = [
    "Website development is the process of creating and maintaining a website. It involves a variety of tasks, including planning, design, development, testing, deployment, and ongoing maintenance. The goal of website development is to create a functional and user-friendly website that meets the needs of its target audience and achieves the goals of its owners.",
    "Website development can be done in-house by a company's own employees, or it can be outsourced to a professional website development agency. The choice of approach will depend on the size and resources of the organization, as well as the complexity and scope of the project.",
    "In short, website development is the process of creating and maintaining a functional, user-friendly, and effective website that meets the needs of its target audience and achieves the goals of its owners.",

]

const who = [
    "Website development is for businesses, organizations, and individuals who need a website to achieve their online goals. Here are some common use cases for website development:",
    "• Startups and small businesses: Website development is a crucial aspect for startups and small businesses to establish their online presence, reach their target audience, and compete with larger companies.",
    "• E-commerce businesses: Online businesses need a functional and user-friendly website to sell their products and services, manage their online store, and reach their target audience.",
    "• Enterprises: Enterprises need a robust and scalable website to reach their target audience, build their brand, and achieve their marketing goals.",
    "• Bloggers and influencers: Bloggers and influencers need a website to build their online presence, reach their target audience, and grow their audience.",
    "• Non-profit organizations: Non-profit organizations need a website to reach their target audience, build their brand, and achieve their mission.",
    "• Freelancers and solopreneurs: Freelancers and solopreneurs need a website to showcase their work, reach their target audience, and attract clients.",
    "• Government agencies and institutions: Government agencies and institutions need a website to provide information and services to the public, improve transparency, and increase engagement.",
    "In short, website development is for any organization or individual who needs a website to achieve their online goals and reach their target audience.",
]

const how = [
    "Here are some reasons why investing in website development can benefit you:",
    "• Improved online presence: A well-designed website helps establish your brand and improve your online presence, making it easier for potential customers to find you.",
    "• Increased credibility: A professional website demonstrates credibility and trust, which can help you stand out in a competitive market and attract more customers.",
    "• Better user experience: A well-designed website provides a better user experience, making it easier for visitors to find the information they need and take action, such as making a purchase or filling out a contact form.",
    "• Cost-effective marketing: Your website can serve as an effective marketing tool, helping you reach a wider audience and generate leads at a lower cost than traditional marketing methods.",
    "• 24/7 availability: A website is available 24/7, allowing customers to access information and engage with your business at any time, even when you're not open for business.",
    "• Data tracking: Website analytics allow you to track visitor behavior and make data-driven decisions to improve your online marketing efforts and maximize ROI.",
    "In short, investing in website development can help you reach more customers, establish credibility, provide a better user experience, and effectively market your business online."
]

const grid = "grid grid-cols-[1fr] max-w-full justify-center py-5"
const grid_sm = "sm:grid-cols-sm"
const grid_md = "md:grid-cols-md"
const grid_lg = "lg:grid-cols-lg"
const grid_xl = "xl:grid-cols-xl"
const grid_2xl = "2xl:grid-cols-2xl"

const title = "Website Development - Balanced Solutions Software"
const description = how[7]

const structuredData = {
    "@context": "http://schema.org",
    "@type": "Product",
    "brand": "Balanced Solutions Software",
    "logo": "https://balasolu.com/balasolu.svg",
    "name": "Website Development",
    "category": "Services",
    "description": `${description}`,
}

const Websites = () => {
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
          header="What is website development anyway?"
          content={what} />
        <InfoCard 
          header="Who is website development for then?"
          content={who} />
        <InfoCard 
          header="How does investing in website development benefit me?"
          content={how} />
      </div>
    </>
  )
}

export default Websites