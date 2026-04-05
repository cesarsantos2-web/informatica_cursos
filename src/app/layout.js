import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/ui/topBar"; 
import Footer from "@/components/ui/footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SchoolFlow",
  description: "O melhor para os melhores",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >
      <body className="min-h-full flex flex-col">
        <TopBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
