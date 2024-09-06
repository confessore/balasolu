import FlexColumn from "@/components/flex_column";
import MetaInfo from "@/components/meta_info";
import type { Metadata } from "next";

const title = "Licensing";
const description = "";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <FlexColumn>
      <MetaInfo title={title} description={description} />
    </FlexColumn>
  );
}
