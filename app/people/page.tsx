import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import Image from "next/image";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center gap-1 py-5";
const sconfessore = [
  "What sets me apart from other people is my work ethic.",
  "For many years, working in the food industry, people on my own team would push me out of the door because my work ethic made them look bad.",
  "Now, I bring that same work ethic to our family business which makes our competitors look bad.",
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
      </div>
      <Logo />
      <NavGroup />
    </main>
  );
}
