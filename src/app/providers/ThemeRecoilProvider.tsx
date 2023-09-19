"use client";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

const RecoilStateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  );
};

export default RecoilStateProvider;
