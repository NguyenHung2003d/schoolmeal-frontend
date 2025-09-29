import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Suspense } from "react";
import Loader from "./loading";

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
      <body className={`${merriweather.variable}`} suppressHydrationWarning>
        <Providers>
          <div
            className="relative min-h-screen flex flex-col"
            style={{ background: "linear-gradient(135deg, #D3CAE2, #E6C17A)" }}
          >
            <Navbar />
            <Suspense fallback={<Loader />}>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
