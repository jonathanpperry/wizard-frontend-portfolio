import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
      </body>
    </html>
  );
}
