"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

const RecoilStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  );
};

export default RecoilStateProvider;
