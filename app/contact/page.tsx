import FlexColumn from "@/components/flex_column";
import MetaInfo from "@/components/meta_info";
import type { Metadata } from "next";

const title = "Contact";
const description = "You can reach us by text or phone at (352) 234 3458";

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
