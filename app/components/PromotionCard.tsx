import React from "react";

type Props = {};

const PromotionCard = (props: Props) => {
  return (
    <div>
      <div className="relative w-64">
        <div className="absolute left-4 bottom-4 bg-red-600 h-full w-full rounded-xl"></div>

        <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
          <div className="h-2 w-20 bg-red-600"></div>

          <div className="text-5xl font-extrabold text-white">85%</div>

          <p className="leading-snug text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <a
            href="#"
            className="flex items-center block text-red-600 font-bold tracking-wide"
          >
            <span>Learn More</span>
            <i className="bx bx-right-arrow-alt ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
