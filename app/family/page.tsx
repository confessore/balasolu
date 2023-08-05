import InfoCard from "@/components/info_card";
import Logo from "@/components/logo";
import NavGroup from "@/components/nav_group";
import Overlay from "@/components/overlay";

const main =
  "flex flex-col justify-between items-center py-24 min-w-full min-h-screen bg-pink-200 text-pink-900 opacity-90";
const main_dark = "dark:bg-pink-900 dark:text-pink-200";
const flex = "flex flex-col max-w-full justify-center items-center py-5";
const content = [
  "Once upon a time in the quaint town of Harmonyville, there lived a young man named Ethan. He had a unique profession that set him apart from the rest of the townsfolk – he was an ethical salesman. Unlike the typical salespeople who were known for their aggressive upselling tactics, Ethan believed in treating everyone, especially his family, with respect and fairness.",
  "Ethan came from a close-knit family consisting of his parents, his younger sister Lily, and his grandmother, Grandma Agnes. The town had its share of pushy salespeople who often took advantage of unsuspecting customers, but Ethan was determined to prove that sales could be done differently.",
  "One day, Ethan's family gathered for a picnic by the tranquil Harmony Lake. The sun was shining, and the aroma of freshly prepared sandwiches filled the air. As they enjoyed their meal, Ethan's parents shared stories of their day at work, and Lily chattered about her latest adventures in school.",
  "Amidst the laughter and joy, the topic of a new gadget came up. A state-of-the-art communication device had been making waves in the town, and it seemed like everyone was getting one. Ethan's family had been discussing the idea of purchasing it, but they were hesitant due to the expensive price tag.",
  "Ethan, ever the thoughtful and considerate individual, listened intently. He understood that this device could enhance their lives, but he also knew that his family's financial situation was a concern. He excused himself from the picnic blanket for a moment and returned with a small presentation he had prepared.",
  "Gathering his family around, Ethan began to explain the features and benefits of the new gadget. He highlighted its advantages in terms of convenience, connectivity, and productivity. However, he also shared a detailed breakdown of the costs, the monthly fees, and the potential impact on their budget.",
  "As he presented the information, Ethan made sure to emphasize that he was not trying to upsell them. He cared deeply about their well-being and wanted them to make an informed decision. He encouraged an open discussion where each family member could share their thoughts and concerns.",
  "Throughout the presentation, Ethan's family was touched by his sincerity and thoughtful approach. They realized that he wasn't just a salesman – he was a son, a brother, and a grandson who genuinely had their best interests at heart. After much deliberation, they collectively decided that while the gadget was appealing, it might be wiser to wait until it became more affordable.",
  "The sunset cast a warm, golden glow over the lake as the family sat there, content with their decision. Ethan's ethical approach had not only strengthened their bond but had also reaffirmed their trust in him. From that day forward, Ethan continued to be the ethical salesman who never tried to upsell his own family or anyone else in Harmonyville.",
  "As time went on, word spread about Ethan's unique approach to sales. His reputation grew, and people began to seek him out for advice, knowing that he would always prioritize their needs over profits. Through his unwavering dedication to ethical salesmanship, Ethan not only made a difference in his family's life but also transformed the way business was conducted in Harmonyville.",
];

export default function Page() {
  return (
    <main className={`${main} ${main_dark}`}>
      <Overlay />
      <h1>Family</h1>
      <div className={`${flex}`}>
        <InfoCard
          title="The Ethical Salesman"
          content={content}
          hidden={false}
        />
      </div>
      <Logo />
      <NavGroup />
    </main>
  );
}
