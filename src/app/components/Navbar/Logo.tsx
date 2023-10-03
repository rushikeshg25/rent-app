"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
//import img from "../../../../public/logo.png";
import { useTheme } from "next-themes";

const Logo = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  let src: any;

  switch (resolvedTheme) {
    case "light":
      src = "/LightMode.png";
      break;
    case "dark":
      src = "/DarkMode.png";
      break;
  }

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src={src}
      height="80"
      width="150"
      alt="Logo"
    />
  );
};

export default Logo;
