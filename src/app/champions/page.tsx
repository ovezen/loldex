import ChampionCards from "@/components/ChampionCards";
import { Champion } from "@/types/Champion";
import { fetchChampionList, fetchVersion } from "@/utils/serverApi";

export default async function ChampionsPage() {
  const version = await fetchVersion();
  const championList: Champion[] = await fetchChampionList();

  return (
    <>
      <div>
        <h2>챔피언 목록</h2>
      </div>

      <div>
        {championList.map((champion) => (
          <ChampionCards
            key={champion.id}
            champion={champion}
            version={version}
          />
        ))}
      </div>
    </>
  );
}
