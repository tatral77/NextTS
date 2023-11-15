"use client";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col md:flex-row bg-black text-myGolden-100 justify-end text-[13px] space-x-10 py-4 px-4">
        <div>
          Address: 515 Battersea Park Rd, London SW11 8BN, United Kingdom{" "}
        </div>
        <div>Contact:+44 20 3617 1118</div>
        <div>Email: comfortchauffeurs@live.com</div>
      </div>
    </div>
  );
}

export default Header;
