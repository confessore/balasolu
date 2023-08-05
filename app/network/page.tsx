import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Network from "@/components/network";
import Overlay from "@/components/overlay";
import { main, main_dark } from "@/styles/main";

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1>Network</h1>
      <Network />
      <Logo />
      <NavGroup />
    </main>
  );
}
