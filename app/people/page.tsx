import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import Image from "next/image";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center gap-1 py-5";
const link = "bg-gray-500 hover:bg-transparent rounded-md m-1 p-1";
const sconfessore = [
  "What sets me apart from other people is my work ethic.",
  "For many years, working in the food industry, people on my own team would push me out of the door because my work ethic made them look bad.",
  "Now, I bring that same work ethic to our family business which makes our competitors look bad.",
  "I am a rock-solid senior software engineer, with a versatile skill set, who is dedicated and excels at resolving challenges with process improvements and innovative solutions which reliably increase efficiency, customer satisfaction and company standards.",
];

const experience = [
  "Senior Software Engineer",
  "2022 to Present",
  "Digital Brands Board Remote, OK",
  "Built and deployed Docker images on AWS via CI/CD pipelines which utilized Git, JavaScript/TypeScript and C#(.NET).",
  "Collaborated with cross-functional teams in an Agile environment, utilizing Scrum and Kanban methodologies to deliver projects on time.",
  "",
  "Senior Software Engineer",
  "2021 to Present",
  "Balanced Solutions Software Ocala, FL",
  "Developed and maintained full-stack web applications using JavaScript/TypeScript, C#(.NET), Rust and React.",
  "Designed and implemented RESTful APIs ensuring efficient data transfer and high scalability.",
  "",
  ".NET Software Engineer",
  "2020 to 2020",
  "CHAMPS Software Crystal River, FL",
  "Utilized Xamarin for mobile development and Zebra Crossing for barcoding.",
  "Constructed v2 API endpoints with ASP.NET which communicated with Microsoft SQL Server.",
  "",
  "General Service Marine",
  "United States Marine Corps - 2014 to 2015",
  "DD-214 available upon request.",
  "General discharge under honorable conditions.",
  "",
  "JavaScript/TypeScript, C#, Rust, HTML, CSS, React, Tailwind, Node.js, ASP.NET, Xamarin, SQL, MongoDB, Docker, AWS, CI/CD, Git",
  "",
  "University of North Florida",
  "Bachelor's",
  "College of Arts and Sciences Jacksonville, FL",
  "Graduated 12/2014",
];

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1>People</h1>
      <p>
        These are our people. This is where we come from. We&apos;re giving this
        life everything we got and then some.
      </p>
      <div className={`${flex}`}>
        <div className="flex flex-wrap justify-center items-center gap-1">
          <Image
            src="/us.png"
            alt="us"
            height={256}
            width={256}
            priority
            className="rounded-xl"
          />
          <Image
            src="/us2.png"
            alt="us2"
            height={256}
            width={256}
            priority
            className="rounded-xl"
          />
        </div>
        <InfoCard
          title="Steven Confessore"
          content={sconfessore}
          hidden={false}
        />
        <div className="flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://linkedin.com/in/confessore"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Click here to check out my LinkedIn profile!
          </a>
          <a
            href="https://github.com/confessore"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Click here to check out my GitHub profile!
          </a>
        </div>
        <InfoCard
          title="Work Experience and Education"
          content={experience}
          hidden={true}
        />
      </div>
      <Logo />
      <NavGroup />
    </main>
  );
}
