import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Network from "@/components/network";
import Overlay from "@/components/overlay";
import RandomQuote from "@/components/random_quote";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1 className="font-semibold text-center">Network</h1>
      <p className="font-light text-center p-8">
        Of course we are going to link to some of the projects we are developing
        and hosting. Here, you could find exactly those.
      </p>
      <Network />
      <Logo />
      <NavGroup />
      <RandomQuote />
      <Monks />
    </main>
  );
}
