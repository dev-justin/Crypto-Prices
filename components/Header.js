import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-brand-card py-4 px-8 shadow-md">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="relative h-6 w-6 md:h-10 md:w-10">
              <Image src="/money-svgrepo-com.svg" layout="fill" />
            </div>
            <h3 className="md:text-2xl font-bold">Crypto Prices 🤑</h3>
          </div>
        </Link>
        <div>
          <Link href="https://github.com/dev-justin">
            <a className="bg-brand-a1 px-4 py-2 rounded-full shadow-lg hover:opacity-90 hover:shadow-xl active:scale-95 inline-block transition duration-300 ease-out cursor-pointer text-xs md:text-base">
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
