import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League of Legends Info App",
  description:
    "Get the latest information on champions, items, and more from Riot Games API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>홈</Link>
            </li>
            <li>
              <Link href={"/champions"}>챔피언</Link>
            </li>
            <li>
              <Link href={"/items"}>아이템</Link>
            </li>
            <li>
              <Link href={"/rotation"}>로테이션</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
