import type { Metadata } from "next";
import {  Newsreader} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import {Analytics } from "@vercel/analytics/react"

const reader = Newsreader({
  variable: "--font-reader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shipa",
  description: "Shipment dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${reader.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
