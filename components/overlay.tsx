import Image from "next/image";
import Link from "next/link";

export default function Overlay() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between p-3 font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Feel free to call or text&nbsp;
        <code className="font-mono font-bold">
          <a href="tel:+13522343458">(352) 234 3458</a>
        </code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-3 lg:pointer-events-auto lg:p-0"
          href="/"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/balasolu.svg"
            alt="balasolu logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
