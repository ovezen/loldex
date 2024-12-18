import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* 제목 */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Riot Games API를 활용하여 챔피언과 각종 아이템 정보를 제공합니다.
      </p>

      {/* 링크 카드 섹션 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* 챔피언 링크 */}
        <Link
          href={"/champions"}
          className="group flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-[450px] h-[300px]">
            <Image
              src="/images/lolChamps.jpg"
              alt="lolChamps"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white py-4">
            챔피언
          </p>
        </Link>

        {/* 아이템 링크 */}
        <Link
          href={"/items"}
          className="group flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-[450px] h-[300px]">
            <Image
              src="/images/lolItems.jpg"
              alt="lolItems"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white py-4">
            아이템
          </p>
        </Link>

        {/* 로테이션 링크 */}
        <Link
          href={"/rotation"}
          className="group flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-[450px] h-[300px]">
            <Image
              src="/images/lolRotate.jpg"
              alt="lolRotate"
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white py-4">
            로테이션
          </p>
        </Link>
      </div>
    </div>
  );
}
