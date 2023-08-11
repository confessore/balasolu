import Conclusion from "@/components/conclusion";
import InfoCard from "@/components/info_card";
import Introduction from "@/components/introduction";
import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";

const main =
  "flex flex-col justify-between items-center py-24 gap-3 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";

const choice = [
  "• Technical Excellence: Our skilled developers stay updated with the latest technologies to create cutting-edge applications.",
  "• User-Centric Approach: User experience is at the forefront of our design. We create intuitive interfaces that resonate with your target audience.",
  "• Reliable Hosting: Our hosting solutions guarantee uptime and security, ensuring your applications are accessible and protected.",
  "• Collaborative Partnership: We work closely with you to understand your goals and tailor solutions that align with your vision.",
  //"• Proven Track Record: Our portfolio boasts successful projects across various industries, showcasing our expertise and versatility.",
];

export default async function Home() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <Introduction />
      <Logo />
      <NavGroup />
      <InfoCard title="Why Choose Us:" content={choice} />
      <Conclusion />
      <Monks />
    </main>
  );
}
