import FlexColumn from "@/components/flex_column";
import FlexWrap from "@/components/flex_wrap";
import InfoCard from "@/components/info_card";
import LinkButton from "@/components/link_button";
import MetaInfo from "@/components/meta_info";
import type { Metadata } from "next";
import Image from "next/image";

const sconfessore = [
  "What sets me apart from other people is my work ethic.",
  "For many years, working in the food industry, people on my own team would push me out of the door because my work ethic made them look bad.",
  "Now, I bring that same work ethic to our family business which makes our competitors look bad.",
  "I am a rock-solid senior software engineer, with a versatile skill set, who is dedicated and excels at resolving challenges with process improvements and innovative solutions which reliably increase efficiency, customer satisfaction and company standards.",
];

const title = "People";
const description =
  "These are our people. This is where we come from. We're giving this life everything we got and then some.";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <FlexColumn>
      <MetaInfo title={title} description={description} />
      <FlexWrap>
        <Image
          src="/us.png"
          alt="us"
          height={256}
          width={256}
          priority
          className="rounded-xl"
        />
        <Image
          src="/us2.png"
          alt="us2"
          height={256}
          width={256}
          priority
          className="rounded-xl"
        />
      </FlexWrap>
      <InfoCard
        title="Steven Confessore"
        content={sconfessore}
        hidden={false}
      />
      <FlexWrap>
        <LinkButton
          href="/confessore_resume.pdf"
          text="Click here to check out my résumé!"
        />
        <LinkButton
          href="https://github.com/confessore"
          text="Click here to check out my GitHub profile!"
        />
      </FlexWrap>
    </FlexColumn>
  );
}
