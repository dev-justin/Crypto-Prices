import Image from "next/image";
import React from "react";
import { NumericFormat } from "react-number-format";

function StatCard({ name, icon, price_usd, volume_1hrs_usd }) {
  return (
    <div className="bg-brand-card px-4 py-6 rounded-lg shadow-md flex items-center justify-between">
      {/* left */}
      <div className="flex gap-4 flex-col-reverse items-start">
        <div className="relative h-8 w-8">
          <Image
            src={icon || "/money-svgrepo-com.svg"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h1 className="text-xl">{name}</h1>
      </div>
      {/* right */}
      <div className="md:w-1/3">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="md:flex flex-col items-end hidden">
            <p className="font-bold text-brand-a2">Volume 1H</p>
            <div className="mt-4">
              <NumericFormat
                value={volume_1hrs_usd}
                displayType="text"
                decimalScale={0}
                allowLeadingZeros
                thousandSeparator=","
              />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="font-bold text-brand-a2">Price</p>
            <div className=" bg-brand-a1 p-2 rounded-full mt-2 shadow-md">
              <NumericFormat
                value={price_usd}
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
    </div>
  );
}

export default StatCard;
