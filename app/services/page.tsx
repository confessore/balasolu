import FlexColumn from "@/components/flex_column";
import InfoCard from "@/components/info_card";
import MetaInfo from "@/components/meta_info";
import type { Metadata } from "next";

const webAppDevelopment = [
  "From dynamic websites to robust web apps, we craft digital experiences that engage users. Our developers bring your ideas to life with responsive and feature-rich web solutions.",
];
const mobileAppDevelopment = [
  "Capture the mobile audience with our customized mobile app development. We create apps that offer intuitive interfaces and seamless performance across iOS and Android platforms.",
];
const desktopAppSolutions = [
  "Harness the power of desktop applications with our tailored solutions. We design and develop desktop apps that enhance productivity and user experience.",
];
const fullStackExpertise = [
  "Our developers are proficient in full-stack development, ensuring end-to-end solutions that encompass both front-end and back-end functionalities.",
];
const hostingDeployment = [
  "Worry-free hosting is our promise. We provide secure and scalable hosting solutions, ensuring your applications are accessible and performant at all times.",
];
const cloudIntegration = [
  "Leverage the flexibility of the cloud. We integrate cloud technologies to enhance scalability, data management, and collaboration for your applications.",
];
const title = "Services";
const description =
  "Our hearts are for service and we aim to raise the bar by setting the standard of customer service excellence in the development & hosting industry.";

export const metadata: Metadata = {
  title: `${title} - Balanced Solutions Software - Seamless Development and Hosting Solutions for Web, Mobile, and Desktop Applications`,
  description: description,
};

export default function Page() {
  return (
    <FlexColumn>
      <MetaInfo title={title} description={description} />
      <InfoCard
        title="Web Application Development"
        content={webAppDevelopment}
        hidden={false}
      />
      <InfoCard
        title="Mobile Application Development"
        content={mobileAppDevelopment}
        hidden={false}
      />
      <InfoCard
        title="Desktop Application Solutions"
        content={desktopAppSolutions}
        hidden={false}
      />
      <InfoCard
        title="Full-Stack Expertise"
        content={fullStackExpertise}
        hidden={false}
      />
      <InfoCard
        title="Hosting and Deployment"
        content={hostingDeployment}
        hidden={false}
      />
      <InfoCard
        title="Cloud Integration"
        content={cloudIntegration}
        hidden={false}
      />
    </FlexColumn>
  );
}
