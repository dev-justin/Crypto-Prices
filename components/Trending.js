import React from "react";
import Image from "next/image";

function Trending({ name, large, symbol, market_cap_rank, price_btc, btc }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-brand-card rounded-lg pt-2 pb-6 px-4 relative m-4 shadow-md">
        <div className="relative h-16 w-16">
          <Image
            src={large || "/money-svgrepo-com.svg"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="mt-4 whitespace-nowrap">{name}</h3>
        <div className="absolute -left-3 -top-3 bg-brand-h rounded-full w-8 h-8 flex justify-center items-center shadow-md">
          <span className=" text-brand-bg">{market_cap_rank}</span>
        </div>
        <div>
          <span>${(price_btc * btc).toFixed(2)} USD</span>
        </div>
      </div>
    </>
  );
}

export default Trending;
