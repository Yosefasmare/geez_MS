import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GE'EZ Marketing Solution PLC | Premier Real Estate Brokerage in Addis Ababa",
  description:
    "GE'EZ Marketing Solution PLC is Ethiopia's premier real estate marketing and advisory firm. Over 220+ luxury apartment and commercial space transactions in Bole, Kazanchis, and CMC.",
  keywords: [
    "Ethiopian Real Estate",
    "Addis Ababa Property",
    "GE'EZ Marketing Solution PLC",
    "Bole Apartments",
    "Ethiopia Luxury Homes",
    "Real Estate Brokerage Ethiopia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1815]">
        {children}
      </body>
    </html>
  );
}
