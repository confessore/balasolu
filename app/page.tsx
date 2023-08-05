import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import { main, main_dark } from "@/styles/main";

export default function Home() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <Logo />
      <NavGroup />
    </main>
  );
}
