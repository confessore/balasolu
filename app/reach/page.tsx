import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import Monks from "@/components/monks";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center gap-1 py-5";
const close = [
  "We get it. We know that reaching the other people can be like getting teeth pulled.",
  "We're here for you because this is our family business.",
  "Your bread and butter is our bread and butter and your satisfaction is our satisfaction.",
];
const content = [
  "In the heart of the bustling city, nestled among skyscrapers and technology hubs, there lived a man named Leo. He was known throughout the digital realm as 'The Tech Whisperer.' Leo possessed an uncanny ability to communicate with websites and online platforms, navigating their complex networks as if they were living, breathing entities.",
  "Leo's reputation had spread far and wide, and businesses from every corner of the world sought his expertise. His unique talent? Connecting with the developers and hosts behind websites and digital platforms, understanding their intricate codes, and unraveling even the most perplexing technological glitches.",
  "One day, Leo received a peculiar request. A small, family-owned bakery named 'Bread & Butter Delights' reached out to him. Their website, which was the heart of their business, had suddenly gone offline, leaving them in a state of panic. The website developers seemed unresponsive, and the hosting platform's support was caught in a loop of automated responses.",
  "Understanding that their business was indeed their bread and butter, Leo immediately swung into action. He visited the bakery and sat down with the worried owners, Maggie and Ben. They shared stories of how the website had brought customers from all over the city to their charming bakery, making it an integral part of the community.",
  "Leo reassured them with a confident smile and asked for the details. As Maggie and Ben explained the situation, Leo closed his eyes and took a deep breath. It was as if he was attuning himself to the digital wavelengths that surrounded them. He opened his eyes, his gaze fixed on the vintage bakery sign hanging above the counter.",
  "'Leave it to me,' Leo said, his voice serene yet determined.",
  "Leo returned home and sat down in front of his computer. With a blend of focus and intuition, he reached out to the website's servers, his fingers dancing across the keyboard. His communication wasn't through traditional means; he was delving into the very essence of the digital realm, speaking in a language only a select few could understand.",
  "'Hello, dear website,' he whispered, his words taking the form of code and algorithms.",
  "A flicker of light danced across the screen, and the website's homepage slowly began to materialize. Leo's heart swelled with a sense of accomplishment as he navigated through the virtual pathways, identifying the issue that had caused the outage.",
  "Hours passed, and Leo's connection with the website deepened. It was a delicate dance of understanding, patience, and problem-solving. Finally, a triumphant smile graced his lips as the website's functions were fully restored.",
  "Maggie and Ben received a call from Leo the next morning. He informed them that their beloved website was up and running again. The couple rushed to their computer and clicked on the link, their hearts pounding with anticipation. To their delight, their bakery's digital storefront was as vibrant as ever, welcoming visitors with images of delectable pastries and warm loaves of bread.",
  "Overwhelmed with gratitude, Maggie and Ben insisted on inviting Leo to the bakery. When he arrived, the scent of freshly baked goods enveloped him, and the couple presented him with a basket of their finest treats. As they chatted, Leo humbly explained that he simply had a unique way of reaching out to the digital world, bridging the gap between humans and technology.",
  "Word of Leo's incredible ability continued to spread, and soon, businesses of all sizes sought his guidance. He became a beacon of hope in the tech world, proving that even in a realm dominated by machines and algorithms, a touch of human connection and understanding could work wonders.",
  "And so, 'The Tech Whisperer' continued his journey, ensuring that businesses, big and small, could always reach the people who developed and hosted their websites – all through the unique and mysterious language of the digital realm.",
];

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1>Reach</h1>
      <p>
        Can you reach the people who develop and host your website? We are
        reachable by voice and text and understand that your business is your
        bread and butter.
      </p>
      <div className={`${flex}`}>
        <InfoCard
          title="So close you could touch us..."
          content={close}
          hidden={false}
        />
        <InfoCard title="The Tech Whisperer" content={content} hidden={false} />
      </div>
      <Logo />
      <NavGroup />
      <Monks />
    </main>
  );
}
