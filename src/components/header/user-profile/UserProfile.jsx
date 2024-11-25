import React from "react";
import profileImage from "../../../assets/images/Ellipse.png";
export default function UserProfile() {
  return (
    <div className="w-[20%] flex gap-8 justify-end items-center">
      <button
        className={`
             bg-gradient-to-r from-primary_2 to-primary_1 text-primary
             px-6 py-1 rounded-full text-[.8rem] inline-block self-center
            `}
      >
        Premium
      </button>
      <div class={`relative inline-block p-[.125rem] bg-gradient-to-r from-primary_2
        rounded-full
       to-primary_1 `}>
        <img
          src={profileImage}
          alt="Image"
          class=""
        />
      </div>
    </div>
  );
}
