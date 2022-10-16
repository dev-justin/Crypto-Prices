import Image from "next/image";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";

function StatCard({
  name,
  image,
  current_price,
  price_change_percentage_24h,
  market_cap_rank,
  ath_change_percentage,
  ath,
}) {
  const [tooltip, setTooltip] = useState({
    show: false,
    message: "Change from the All Time High (ATH)",
  });

  const toggleTooltip = (ath, name) => {
    setTooltip((prev) => ({
      show: !prev.show,
      message: `${name}s All Time High was $${ath}`,
    }));
  };

  return (
    <div className="bg-brand-card px-4 py-6 rounded-lg shadow-md flex items-center justify-between relative">
      {/* left */}
      <div className="flex gap-4 flex-col-reverse items-start">
        <div className="relative h-8 w-8">
          <Image
            src={image || "/money-svgrepo-com.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-xl text-brand-h">{name}</h1>
      </div>
      {/* right */}
      <div className="md:w-5/6 lg:w-2/3 xl:w-1/2">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="sm:flex flex-col items-end hidden">
            <p
              className="font-bold text-brand-a2 relative cursor-pointer"
              onMouseEnter={() => toggleTooltip(ath, name)}
              onMouseLeave={toggleTooltip}
            >
              {tooltip.show && (
                <span className="absolute -top-8 left-1/2 bg-brand-h py-1 px-2 rounded-md shadow-lg whitespace-nowrap transform -translate-x-1/2">
                  <span>{tooltip.message}</span>
                </span>
              )}
              Change ATH
            </p>
            <div className="mt-4">
              <NumericFormat
                value={ath_change_percentage}
                displayType="text"
                decimalScale={2}
                allowLeadingZeros
                suffix="%"
              />
            </div>
          </div>
          <div className="md:flex flex-col items-end hidden">
            <p className="font-bold text-brand-a2">Change 24H</p>
            <div className="mt-4">
              <NumericFormat
                value={price_change_percentage_24h}
                displayType="text"
                decimalScale={2}
                allowLeadingZeros
                suffix="%"
              />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-bold text-brand-a2">Price</p>
            <div className=" bg-brand-a1 p-2 px-4 rounded-full mt-2 shadow-md whitespace-nowrap">
              <NumericFormat
                value={current_price}
                displayType="text"
                decimalScale={2}
                allowLeadingZeros
                thousandSeparator=","
                prefix="$"
                suffix=" USD"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -left-3 -top-3 bg-brand-h rounded-full w-8 h-8 flex justify-center items-center shadow-md">
        <span className=" text-brand-bg">{market_cap_rank}</span>
      </div>
    </div>
  );
}

export default StatCard;
