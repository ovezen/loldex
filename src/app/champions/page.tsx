import ChampionCards from "@/components/ChampionCards";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "리그 오브 레전드 챔피언 목록 정보",
  description:
    "Riot Games API를 활용한 리그 오브 레전드 챔피언 목록 정보를 확인할 수 있습니다.",
  keywords: ["League of Legends", "LoL", "챔피언 정보"],
  openGraph: {
    title: "리그 오브 레전드 챔피언 목록 정보",
    description:
      "Riot Games API를 활용한 리그 오브 레전드 챔피언 목록 정보를 확인할 수 있습니다.",
  },
};

export default async function ChampionsPage() {

  // error.tsx 에러 복구 확인
  // if (Math.random() < 0.5) {
  //   throw new Error("테스트: 50% 확률로 발생한 오류");
  // }

  const championList: Champion[] = await fetchChampionList();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {championList.map((champion: Champion) => (
          <ChampionCards key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
