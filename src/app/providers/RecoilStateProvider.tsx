"use client";

import { RecoilRoot } from "recoil";

const RecoilStateProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilStateProvider;
