import ChampionCards from "@/components/ChampionCards";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

// 메타데이터 넣을 곳

export default async function ChampionsPage() {
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
