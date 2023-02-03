import Head from 'next/head'
import InfoCard from '../components/info_card'
import Layout from '../components/layout'

const what = [
    "Cloud hosting refers to hosting services provided by cloud computing providers such as Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. These providers offer a range of hosting services, including virtual servers (Infrastructure as a Service), platform services (Platform as a Service), and software services (Software as a Service).",
    "In terms of specific providers, AWS is the largest and most comprehensive cloud hosting platform, offering a wide range of services and a large ecosystem of partners and developers. GCP is known for its focus on innovation and artificial intelligence, and is a good choice for businesses with complex data and computational needs. Azure is a good choice for businesses that want to leverage the full range of Microsoft services and technologies, as it integrates well with the company's other offerings.",
    "Each provider has its own strengths and weaknesses, and the best choice for you will depend on your specific needs and requirements.",

]

const who = [
    "Cloud hosting is for organizations of all sizes that want to leverage the benefits of cloud computing, including scalability, cost savings, increased reliability, improved security, access to cutting-edge technology, and global reach.",
    "Here are some common use cases for cloud hosting:",
    "• Startups and small businesses: For small businesses, cloud hosting can provide access to the same technology and resources as larger enterprises, without the need for significant upfront investments in hardware and infrastructure.",
    "• E-commerce and online businesses: Cloud hosting is well-suited for online businesses, as it enables you to easily handle fluctuations in traffic and handle large amounts of data and transactions.",
    "• Enterprises: For larger enterprises, cloud hosting can provide a cost-effective way to modernize their IT infrastructure and access the latest technologies and services.",
    "• Applications and software companies: Cloud hosting provides a platform for software companies and developers to build, test, and deploy their applications, and access the latest tools and services to improve their operations.",
    "• Media and entertainment companies: For media and entertainment companies, cloud hosting provides a way to store, manage, and distribute large amounts of data and content, and serve a global audience.",
    "In short, cloud hosting is suitable for organizations of all sizes that want to leverage the benefits of cloud computing, and meet the challenges of today's fast-paced and data-driven business environment.",
]

const how = [
    "Here are some reasons why investing in cloud hosting can benefit you:",
    "• Scalability: Cloud hosting allows you to easily scale your resources up or down as needed, giving you the flexibility to handle fluctuations in traffic and business growth.",
    "• Cost savings: Cloud hosting can help you reduce costs compared to traditional on-premises hosting, as you only pay for the resources you use and don't have to invest in hardware and infrastructure.",
    "• Increased reliability: Cloud hosting provides multiple layers of redundancy and automatic failover, ensuring high availability and minimizing downtime.",
    "• Improved security: Cloud hosting providers offer robust security features and regularly update their systems to protect against emerging threats, giving you peace of mind that your data is secure.",
    "• Access to cutting-edge technology: Cloud hosting providers offer a range of cutting-edge technologies and services that can help you innovate and improve your business operations.",
    "• Global reach: Cloud hosting enables you to serve customers anywhere in the world, without having to worry about the complexities of setting up and maintaining data centers in different locations.",
    "In short, investing in cloud hosting can help you achieve scalability, cost savings, increased reliability, improved security, access to cutting-edge technology, and global reach for your business."
]

const grid = "grid grid-cols-[1fr] max-w-full justify-center py-5"
const grid_sm = "sm:grid-cols-sm"
const grid_md = "md:grid-cols-md"
const grid_lg = "lg:grid-cols-lg"
const grid_xl = "xl:grid-cols-xl"
const grid_2xl = "2xl:grid-cols-2xl"

const title = "Cloud Hosting (AWS, GCP, Azure) - Balanced Solutions Software"
const description = how[7]

const structuredData = {
    "@context": "http://schema.org",
    "@type": "Product",
    "brand": "Balanced Solutions Software",
    "logo": "https://balasolu.com/balasolu.svg",
    "name": "Cloud Hosting (AWS, GCP, Azure)",
    "category": "Services",
    "description": `${description}`,
    "aggregateRating": {
      "@type": "aggregateRating",
      "ratingValue": "88",
      "bestRating": "100",
      "ratingCount": "20",
    }
  }

const Cloud = () => {
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
          header="What is cloud hosting anyway?"
          content={what} />
        <InfoCard 
          header="Who is cloud hosting for then?"
          content={who} />
        <InfoCard 
          header="How does investing in cloud hosting benefit me?"
          content={how} />
      </div>
    </>
  )
}

export default Cloud