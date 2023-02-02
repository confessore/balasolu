import React from 'react'
import NavCard from './nav_card'


const grid = "grid grid-cols-[1fr] w-full justify-center p-5"
const grid_sm = "sm:grid-cols-sm"
const grid_md = "md:grid-cols-md"
const grid_lg = "lg:grid-cols-lg"
const grid_xl = "xl:grid-cols-xl"
const grid_2xl = "2xl:grid-cols-2xl"

const requirements = [
    "In order to participate in active driving lessons, all students must have obtained and possess a valid State of Florida issued Learner's Permit, which can be obtained through our Learn to Drive and Get Your Permit modules.",
    "Driving sessions are scheduled to meet the demand of the student and will vary depending on the student's availability."];
const class_information = [
    "10% Discount for Public Service Members",
    "Now serving Alachua, Citrus, Hernando, Lake, Levy and Marion Counties.",
    "We are an approved Commercial Driving School with the Florida Department of Vocational Rehabilitation, specializing in training individuals with disabilities."
];
const questions = [
    "Can I take lessons if I already have my driver's license?",
    "Is there a time limit on completing the training?"
];
const answers = [
    "Yes. Many licensed drivers are not comfortable behind the wheel and we will improve not only your driving skills, but your confidence.",
    "Although there is no limit to when the training must be completed, continued training will assist in you better obtaining and retaining your skillset."
];
const instruction = [
    "Driving schools can provide valuable instruction and training that can help you become a safer and more confident driver. They can teach you the rules of the road and proper driving techniques, as well as help you develop the skills you need to pass your driver's license test. Additionally, driving schools can offer specialized training, such as defensive driving or advanced driving techniques, which can help you become a more skilled and experienced driver. Furthermore, if you're a new driver or if you haven't driven in a while, attending a driving school can give you the opportunity to practice your driving skills in a controlled and safe environment, which can help you gain confidence and reduce the risk of accidents. In summary, taking instruction from a driving school can be a worthwhile investment in your personal safety and driving skills."
]

const NavCards = () => {
    return (
        <>
            <div className={`${grid} ${grid_sm} ${grid_md} ${grid_lg} ${grid_xl} ${grid_2xl}`}>
                <NavCard
                    url="/websites"
                    blank={false}
                    header="Website Development"
                    content="Have your website built with the tech it requires. Nothing more. Nothing less." />
                <NavCard 
                    url="/seo"
                    blank={false}
                    header="Search Engine Optimization (SEO)"
                    content="Provide meaningful data to search engines to generate more impressions which become more clicks which become more business." />
                <NavCard
                    url="/cloud"
                    blank={false}
                    header="Cloud Hosting (AWS, GCP, Azure)"
                    content="Learn more about hosting your services with the primary cloud infrastructures." />
                <NavCard
                    url="/content"
                    blank={false}
                    header="Content Writing"
                    content="Inform and influence with professional content tailored towards your target audiences and their search behaviors." />
                
            </div>
        </>
    )
}

export default NavCards