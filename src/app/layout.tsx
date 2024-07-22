import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coustra",
  description: "a community driven agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn("bg-[#fafafa]", inter.className)}>
        <Header />
        <main className='mt-[65px] max-w-[1250px] p-5 xl:py-0 mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
