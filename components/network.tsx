import Image from "next/image";
import React from "react";

export default function Network() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3 py-5">
      <a
        href="https://www.aptec-inc.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/de.png"
          alt="Appropriate Technology, Inc"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </a>
      <a
        href="https://therightcareer.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/ccs.png"
          alt="Community and Career Solutions"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </a>
      <a
        href="https://twinstar-bosskills.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://twinstar-bosskills.vercel.app/twinstar.png"
          alt="TwinStar"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </a>
      <a
        href="https://tequila.balasolu.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="balasolu_n.png"
          alt="tequila"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </a>
      <a
        href="https://github.com/confessore/rexmit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://repository-images.githubusercontent.com/538283283/d59b0b4f-63a7-429a-a5b7-44d067245e0c"
          alt="rexmit"
          width={160}
          height={160}
          className="rounded-xl"
        />
      </a>
    </div>
  );
}

/*<div className="flex flex-col text-center">
          <Image
            src="/milkdrunk.png"
            alt="milkdrunk"
            width={96}
            height={96}
            className="rounded-xl"
          />
          <p className="text-pink-900 dark:text-pink-200">coming soon!</p>
        </div>*/
