"use client";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const ThemeToggleButton = () => {
  const [sun, setSun] = useState(true);
  return (
    <div className="group rounded-md active:border-black w-full h-full hover:bg-gray-300 p-[0.6rem]">
      {sun ? (
        <BsSun
          size={28}
          className="group-hover:scale-125 transition-transform"
        />
      ) : (
        <BiMoon
          size={28}
          className="group-hover:scale-125 transition-transform"
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
