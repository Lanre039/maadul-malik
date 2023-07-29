import Navbar from "@/components/nav";
import "./globals.css";
import { Sora, Bungee_Inline } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  // display: "swap",
});
const bungleInline = Bungee_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const metadata = {
  title: "MA'ADUL MALIK",
  description: "Your journey to the QUR'AN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${sora.className}`}>{children}</body> */}
      <body
        className={`${bungleInline.variable} ${sora.variable} ${sora.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
