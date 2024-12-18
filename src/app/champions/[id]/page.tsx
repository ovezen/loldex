import {
  getPassiveImgUrl,
  getSpellImgUrl,
  SPLASH_IMG_URL,
} from "@/constants/constants";
import { ChampionDetail, ChampionSkill, ChampionSkin } from "@/types/Champion";
import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type DetailProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: DetailProps): Promise<Metadata> {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  return {
    title: `리그 오브 레전드: ${champion.name}`,
    description: `${champion.lore}`,
  };
}

export default async function ChampionDetailPage({ params }: DetailProps) {
  const version = await fetchVersion();
  const champion = await fetchChampionDetail(params.id);

  const keyBoard: string[] = ["Q", "W", "E", "R"];
  const spellsWithKeys: ChampionSkill[] = champion.spells.map(
    (spell: ChampionSkill, index: number) => ({
      ...spell,
      key: keyBoard[index] || "",
    })
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* 챔피언 스플래시 아트 */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${SPLASH_IMG_URL}/${champion.id}_0.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6 sm:px-12 max-w-4xl -mt-16 sm:-mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {champion.name}
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-4">
            {champion.title}
          </p>
          <p className="text-md sm:text-lg text-gray-300 leading-relaxed">
            {champion.lore}
          </p>
        </div>
      </div>

      {/* 챔피언 정보 */}
      <div className="relative z-20">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-t-3xl p-8 -mt-16">
          {/* 스킬 정보 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              스킬 정보
            </h2>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 justify-start">
              {/* 패시브 스킬 */}
              <div className="flex flex-col items-center">
                <Image
                  src={getPassiveImgUrl(version, champion.passive.image.full)}
                  width={50}
                  height={50}
                  alt={champion.passive.name || ""}
                  className="rounded-md shadow-md"
                />
                <p className="mt-1 text-sm text-center text-gray-700 dark:text-gray-300">
                  {champion.passive.name} <br />
                  <span className="text-gray-500">(P)</span>
                </p>
              </div>

              {/* 기본 스킬 */}
              {spellsWithKeys.map((spell: ChampionSkill) => (
                <div key={spell.id} className="flex flex-col items-center">
                  <Image
                    src={getSpellImgUrl(version, spell.image.full)}
                    alt={spell.name}
                    width={50}
                    height={50}
                    priority
                    className="object-cover rounded-md shadow-md"
                  />
                  <p className="mt-1 text-sm text-center text-gray-700 dark:text-gray-300">
                    {spell.name} <br />
                    <span className="text-gray-500">({spell.key})</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 스킨 정보 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              스킨 정보
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {champion.skins.map((skin: ChampionSkin) => (
                <div key={skin.id} className="flex flex-col items-center">
                  <Image
                    src={`${SPLASH_IMG_URL}/${champion.id}_${skin.num}.jpg`}
                    alt={skin.name}
                    width={260}
                    height={154}
                    priority
                    className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skin.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
