import FlexColumn from "@/components/flex_column";
import MetaInfo from "@/components/meta_info";
import Network from "@/components/network";
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
    <FlexColumn>
      <MetaInfo title={title} description={description} />
      <Network />
    </FlexColumn>
  );
}
