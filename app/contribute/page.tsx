import FlexColumn from "@/components/flex_column";
import MetaInfo from "@/components/meta_info";
import ContributionButton from "@/components/contribution_button";
import type { Metadata } from "next";

const title = "Contribute";
const description =
  "Care to share a drink? A meal? THE WHOLE RENT!? 😅 Any contribution is a blessing and always appreciated.";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <FlexColumn>
      <MetaInfo title={title} description={description} />
      <ContributionButton />
    </FlexColumn>
  );
}
