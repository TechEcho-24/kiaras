import type { Metadata } from "next";
import { Work_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiara's | Decadence Redefined — Luxury Hampers & Bespoke Gifting",
  description: "Handcrafted luxury hampers, bespoke gift boxes, wedding trousseau packaging, and corporate gifting curated with elegance and perfection.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#faf8f5] text-[#231710] selection:bg-[#dfb758] selection:text-[#450206]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
