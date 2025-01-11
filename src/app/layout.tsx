// Libraries
import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "@ant-design/v5-patch-for-react-19";

// Css
import "@/css/app.scss";

// Providers
import { Providers } from "./providers";
// import { PageLoading } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to React 19",
  description: "Explore the latest React features with this interactive demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased`}
      >
        <Providers>
          {/* <PageLoading /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
