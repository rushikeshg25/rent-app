import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modals/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renting App",
  description: "Renting made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal isOpen /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
