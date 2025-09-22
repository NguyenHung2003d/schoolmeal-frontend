import "./globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Providers from "./providers";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "SchoolMeal",
  description: "SchoolMeal - Dinh dưỡng cho bé yêu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
