import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import RandomQuote from "@/components/random_quote";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";

export default async function Home() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <Logo />
      <NavGroup />
      <RandomQuote />
      <Monks />
    </main>
  );
}
