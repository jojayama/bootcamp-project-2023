import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jodi's Personal Website",
  description: "A personal website for Jodi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <html lang="en">
          <body className={roboto_serif.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
        </html>
  );
}
