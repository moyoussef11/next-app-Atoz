import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Palestine from "./components/Palestine/Palestine";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Palestine/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
