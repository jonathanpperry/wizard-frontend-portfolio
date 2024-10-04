import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FirefliesBackground from "@/components/FirefliesBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Jon Perry's Portfolio",
  description: "Welcome to my portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}

        <FirefliesBackground />
      </body>
    </html>
  );
}
