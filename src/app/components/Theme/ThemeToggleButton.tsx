"use client";
import { useRecoilState } from "recoil";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const toggleMode = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div
      className="group rounded-md focus:border-black w-full h-full hover:bg-gray-300 p-[0.6rem] dark:bg-[#0E1629] dark:focus:border-gray-300"
      onClick={toggleMode}
    >
      {theme === "light" ? (
        <BsSun
          size={28}
          className="group-hover:scale-125 transition-transform"
        />
      ) : (
        <BiMoon
          size={28}
          className="group-hover:scale-125 transition-transform "
        />
      )}
    </div>
  );
};

export default ThemeToggleButton;
