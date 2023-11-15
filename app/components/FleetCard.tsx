import React from "react";
import Image from "next/image";
import mercedesbenz from "../../public/gallery/mercedes-benz-banner.png";
import FacilityBadge from "./FacilityBadge";
type Props = {};
export default function FleetCard(props: Props) {
  return (
    <div className="flex flex-col rounded-lg py-6">
      <div className="bg-black text-white  text-lg py-1 px-2 rounded-lg">
        Mercedese Benz
      </div>
      <div className="flex">
        <FacilityBadge />
        <FacilityBadge />
      </div>

      <div className="flex flex-row max-md:flex-col">
        <div className="flex flex-1">
          {" "}
          <Image src={mercedesbenz} alt="" />
        </div>
        <div className="flex flex-1 p-4 justify-center">
          <ul>
            <li>
              <span></span>Minimum 3 hours booking
            </li>
            <li>Free 60 mins airport parking</li>
            <li>Free 60 mins airport parking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
