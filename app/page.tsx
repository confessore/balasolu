"use client";
import FlexColumn from "@/components/flex_column";
import Info from "@/components/info";
import InfoCard from "@/components/info_card";
import MetaInfo from "@/components/meta_info";
import { Alert, Button, Card, Navbar } from "flowbite-react";
import Link from "next/link";

const title = "Home";
const description =
  "Welcome to Balanced Solutions Software, your all-in-one destination for comprehensive development and hosting solutions. With a passion for innovation and technical excellence, we specialize in creating and hosting applications that cater to the needs of modern businesses.";
const content = [
  "At Balanced Solutions Software, we are your partners in innovation. From development to hosting, we provide end-to-end solutions that empower your digital presence. Let's embark on a journey to create applications that drive success. Contact us today to explore how we can transform your digital aspirations into reality.",
  "• Technical Excellence: Our skilled developers stay updated with the latest technologies to create cutting-edge applications.",
  "• User-Centric Approach: User experience is at the forefront of our design. We create intuitive interfaces that resonate with your target audience.",
  "• Reliable Hosting: Our hosting solutions guarantee uptime and security, ensuring your applications are accessible and protected.",
  "• Collaborative Partnership: We work closely with you to understand your goals and tailor solutions that align with your vision.",
  //"• Proven Track Record: Our portfolio boasts successful projects across various industries, showcasing our expertise and versatility.",
];

export default function Home() {
  return (
    <>
      <FlexColumn>
        <MetaInfo title={title} description={description} />
        <InfoCard content={content} />
      </FlexColumn>
    </>
  );
}
