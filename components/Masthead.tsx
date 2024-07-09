import Image from "next/image";

export function Masthead() {
  return (
    <header className="w-full flex justify-center items-center p-8">
      <Image
        src="./stocks-logo-take-home-project.svg"
        alt="Stocks"
        width={160}
        height={40}
        priority
      />
    </header>
  );
}
