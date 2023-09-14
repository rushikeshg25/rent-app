"use client";
import { useRecoilState } from "recoil";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { DarkMode } from "@/app/RecoilState/DarkModeState";

const ThemeToggleButton = () => {
  const [sun, setSun] = useRecoilState(DarkMode);
  const toggleMode = () => {
    setSun((prev) => !prev);
  };
  return (
    <div
      className="group rounded-md active:border-black w-full h-full hover:bg-gray-300 p-[0.6rem]"
      onClick={toggleMode}
    >
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
