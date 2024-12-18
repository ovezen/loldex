import { SPLASH_IMG_URL } from "@/constants/constants";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type DetailProps = {
  params: {
    id: string;
  };
};

export default async function ChampionDetailPage({ params }: DetailProps) {
  const version = await fetchVersion();
  const champion = await fetchChampionDetail(params.id);

  return (
    <div>
      DetailPage
      <div>
        {/* 챔피언 기본 정보 */}
        <h2>{champion.name}</h2>
        <p>{champion.title}</p>
        <div>
          <Image
            src={`${SPLASH_IMG_URL}/${champion.id}_0.jpg`}
            alt={champion.name}
            width={500}
            height={500}
          />
        </div>
        <p>{champion.lore}</p>
      </div>
    </div>
  );
}
