import React from "react";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import { SQUARE_IMG_URL } from "@/constants/constants";
import Link from "next/link";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCards = ({ champion }: ChampionCardProps) => {
  const IMG_URL = `${SQUARE_IMG_URL}/${champion.id}.png`;

  return (
    <Link
      href={`/champions/${champion.id}`}
      className="group block p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {/* 이미지 */}
      <div className="relative w-24 h-24 mx-auto mb-3 overflow-hidden rounded-full">
        <Image
          src={IMG_URL}
          alt={champion.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* 챔피언 소개 */}
      <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center">
        {champion.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {champion.title}
      </p>
    </Link>
  );
};

export default ChampionCards;
