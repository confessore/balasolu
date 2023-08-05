import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Network from "@/components/network";
import Overlay from "@/components/overlay";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink-200 dark:bg-pink-900">
      <Overlay />
      <h1>Network</h1>
      <Network />
      <Logo />
      <NavGroup />
    </main>
  );
}
