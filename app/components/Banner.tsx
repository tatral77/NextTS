import React from "react";
import Image from "next/image";
import oldCar from "../../public/gallery/old.png";

type Props = {};
export default function Banner() {
  return (
    <div className="flex justify-around bg-slate-200 py-4 px-4 max-sm:flex-col-reverse ">
      <div className=" m-auto">
        <h2 className="text-4xl font-serif py-2 max-sm:text-4xl max-sm:py-1">
          Comfort Chaufeurs
        </h2>
        <p className="text-2xl max-sm:text-xl">
          High Service For Every Customer.
        </p>
      </div>
      <div className="m-auto max-sm:hidden">
        <Image src={oldCar} className="md:w-4/5 h-auto" alt="banner-image" />
      </div>
    </div>
  );
}
