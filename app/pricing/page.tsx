import FlexColumn from "@/components/flex_column";
import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import MainWrapper from "@/components/main_wrapper";
import MetaInfo from "@/components/meta_info";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";
import type { Metadata } from "next";

const development = [
  "Our website development begins at a base of $60 and includes revisions. Simply reach out to us and we shall handle the nerd stuff.",
  "Typically, website development is invoiced one time only unless your particular project requires invoicing at an hourly rate over an extended period.",
  "With flat rate pricing, you could expect to pay:",
  "• $60 for a 1 page website or 1 invoiceable hour",
  "• $174 for a 3 page website ($58 per page or invoiceable hour)",
  "• $280 for a 5 page website ($56 per page or invoiceable hour)",
  "• $378 for a 7 page website ($54 per page or invoiceable hour)",
  "• $468 for a 9 page website ($52 per page or invoiceable hour)",
  "• $600 for a 12 page website ($50 per page or invoiceable hour)",
  "Additional pages or invoiceable hours remain fixed at $50 each.",
];
const hosting = [
  "Our website hosting begins at a base of $60/mo and includes development revisions. Simply reach out to us and we shall handle the nerd stuff.",
  "Typically, website hosting remains at the constant base of $60/mo unless your scale breaches certain threshholds.",
  "With pay-as-you-go pricing, you could expect to pay:",
  "• $1 per additional 100 optimized source images past the included 100 optimized source images.",
  "• $6 per additional 10GB bandwidth past the included 10GB bandwidth.",
  "• $6 per additional 10GB-hours of serverless function execution past the included 10GB-hours of serverless function execution.",
  "So a month of hosting with 3000 optimized source images, 200GB bandwidth and 90GB-hours of serverless function execution would total out at $251.",
];
const title = "Pricing";
const description =
  "We wish to remain as transparent as possible about our pricing. Affordable flat rates and pay-as-you-go usage is what sets us apart.";

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
        <InfoCard
          title="Website Development"
          content={development}
          hidden={false}
        />
        <InfoCard title="Website Hosting" content={hosting} hidden={false} />
      </FlexColumn>
      <Logo />
      <NavGroup />
      <Monks />
    </MainWrapper>
  );
}
