import FlexColumn from "@/components/flex_column";
import Logo from "@/components/logo";
import MainWrapper from "@/components/main_wrapper";
import MetaInfo from "@/components/meta_info";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import TipButton from "@/components/tip_button";
import type { Metadata } from "next";

const title = "Tip";
const description =
  "Care to share a drink? A meal? THE WHOLE RENT!? 😅 Any gratuity is a blessing and always appreciated.";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <MainWrapper>
      <Overlay />
      <MetaInfo title={title} description={description} />
      <FlexColumn>
        <TipButton />
      </FlexColumn>
      <Logo />
      <NavGroup />
      <Monks />
    </MainWrapper>
  );
}
