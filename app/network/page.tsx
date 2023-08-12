import Logo from "@/components/logo";
import MainWrapper from "@/components/main_wrapper";
import MetaInfo from "@/components/meta_info";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Network from "@/components/network";
import Overlay from "@/components/overlay";
import type { Metadata } from "next";

const title = "Network";
const description =
  "Of course we are going to link to some of the projects we are developing and hosting. Here, you could find exactly those.";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <MainWrapper>
      <Overlay />
      <MetaInfo title={title} description={description} />
      <Network />
      <Logo />
      <NavGroup />
      <Monks />
    </MainWrapper>
  );
}
