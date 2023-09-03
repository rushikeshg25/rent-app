import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/Modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renting App",
  description: "Renting made Easy",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
