import Image from "next/image";

export default function Discord() {
    return (
      <>
        <a href="https://discord.com/api/oauth2/authorize?client_id=1021189711366213672&permissions=0&scope=bot"      
            className="">
            <Image src="/discord-mark-blue.svg"
                alt="discord"
                width={96}  
                height={96}
                className="hover:invert" />
        </a>
      </>
  )
}
