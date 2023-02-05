import React from 'react'
import NavCard from './nav_card'

const grid = 'grid grid-cols-[1fr] w-full justify-center p-5'
const grid_sm = 'sm:grid-cols-sm'
const grid_md = 'md:grid-cols-md'
const grid_lg = 'lg:grid-cols-lg'
const grid_xl = 'xl:grid-cols-xl'
const grid_2xl = '2xl:grid-cols-2xl'

const NavCards = () => {
  return (
    <>
      <div
        className={`${grid} ${grid_sm} ${grid_md} ${grid_lg} ${grid_xl} ${grid_2xl}`}
      >
        <NavCard
          url="/seo"
          blank={false}
          header="Search Engine Optimization (SEO)"
          content="Provide meaningful data to search engines to generate more impressions which become more clicks which become more business."
        />
        <NavCard
          url="/content"
          blank={false}
          header="Content Writing"
          content="Inform and influence with professional content tailored towards your target audiences and their search behaviors."
        />
        <NavCard
          url="/websites"
          blank={false}
          header="Website Development"
          content="Have your website built with the tech it requires. Nothing more. Nothing less."
        />
        <NavCard
          url="/cloud"
          blank={false}
          header="Cloud Hosting (AWS, GCP, Azure)"
          content="Learn more about hosting your services with the primary cloud infrastructures."
        />
      </div>
    </>
  )
}

export default NavCards
