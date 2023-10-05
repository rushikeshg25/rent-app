import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";
import RecoilStateProvider from "./providers/ThemeRecoilProvider";
import SearchModal from "./components/Modals/SearchModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent My Space",
  description: "Renting and Listing Properties made Easy.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <RecoilStateProvider>
        <body className={`${font.className}  dark:bg-[#0F172A] bg-[#F8FAFC]`}>
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <SearchModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28 dark:bg-[#0F172A]">{children}</div>
        </body>
      </RecoilStateProvider>
    </html>
  );
}
