import "../globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Providers } from "../providers";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Kitchen Staff - SchoolMeal",
  description: "Quản lý bếp - SchoolMeal",
};

export default function KitchenRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable}`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}