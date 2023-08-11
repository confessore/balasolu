import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center gap-1 py-5";
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

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1 className="font-semibold text-center">Services</h1>
      <p className="font-light text-center p-8"></p>
      <div className={`${flex}`}>
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
      </div>
      <Logo />
      <NavGroup />
      <Monks />
    </main>
  );
}
