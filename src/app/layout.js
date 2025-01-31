import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Tahu Bulat",
  description: "Website Usaha Tahu Bulat ",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${geistSans.variable} ${roboto.variable} antialiased`}>
        <main className="max-w-4xl mx-auto px-4">
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
