import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import Image from "next/image";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center py-5";
const greater = [
  "We get it. Paying the other people an arm and a leg so they can call themselves CEO and VP is not doing your business any favors.",
  "We know that reaching the other people is like pulling teeth as well.",
  "While the other people parade in luxury touting their titles, we're here for you when you need us.",
  "This is our family business. Your bread and butter is our bread and butter. Your success is our success. If you are not satisfied, we are not satisfied.",
];
const sconfessore = [
  "What sets me apart from other people is my work ethic.",
  "For many years, working in the food industry, people on my own team would push me out of the door because my work ethic made them look bad.",
  "Now, I bring that same work ethic to my own business which makes our competitors look bad.",
];

const lconfessore = [""];

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1>People</h1>
      <div className={`${flex}`}>
        <InfoCard
          title="Greater Than Fancy Titles"
          content={greater}
          hidden={false}
        />
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
          hidden={true}
        />
        <InfoCard
          title="Leighton Confessore"
          content={lconfessore}
          hidden={true}
        />
      </div>
      <Logo />
      <NavGroup />
    </main>
  );
}
