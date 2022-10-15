import Image from "next/image";
import React from "react";

function CryptoNews({ link, title, image_url }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="max-w-xs flex flex-col items-center bg-brand-card rounded-lg shadow-md overflow-clip h-full hover:shadow-xl active:scale-95 transition duration-300 ease-out"
      >
        <div className="w-full h-24 relative xl:h-36 2xl:h-64">
          <Image
            src={image_url || "/money-svgrepo-com.svg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-xs p-2 2xl:p-4 xl:text-sm 2xl:text-base">
          {title}
        </h1>
      </a>
    </div>
  );
}

export default CryptoNews;
