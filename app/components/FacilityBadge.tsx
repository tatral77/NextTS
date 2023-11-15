import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
type Props = {};

const FacilityBadge = (props: Props) => {
  return (
    <div className="flex mr-4 mt-2">
      <div className="p-1 text-center text-sm">
        <FaAccessibleIcon />
      </div>
      <div className="p-1 text-center text-sm ">
        <span>4 Bags</span>
      </div>
    </div>
  );
};

export default FacilityBadge;
