import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import Providers from "@/providers/RQProvider";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description:
    "Riot Games API를 활용한 리그 오브 레전드 챔피언, 아이템, 로테이션 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-500 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

              {/* 로고 */}
              <div>
                <Link href="/" className="text-white text-2xl font-bold">
                  <Image
                    src="/icons/RiotGames.png"
                    alt="RiotLogo"
                    width={100}
                  height={100}/>
                </Link>
              </div>

              {/* 내비게이션 메뉴 */}
              <ul className="hidden md:flex space-x-6">
                <li>
                  <Link
                    href={"/"}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    홈
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/champions"}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    챔피언
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/items"}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    아이템
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/rotation"}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    로테이션
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
