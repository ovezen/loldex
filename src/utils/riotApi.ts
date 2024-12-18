// import { Champion } from "@/types/Champion";
// import { ChampionRotation } from "@/types/ChampionRotation";
// import { fetchChampionList } from "./serverApi";

// export async function getChampionRotation(): Promise<{
//   forAllPlayers: Champion[];
//   forNewPlayers: Champion[];
// }> {
//   // '/api/rotation' 엔드포인트에서 로테이션 데이터 호출
//   try {
//     const response = await fetch("/api/rotation", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`API 요청에 실패: ${response.status}`);
//     }

//     const data: ChampionRotation = await response.json();
//     const freeChampionIds: number[] = data.freeChampionIds;
//     const freeChampionIdsForNewPlayers: number[] =
//       data.freeChampionIdsForNewPlayers;

//     // 챔피언 목록 정보
//     const champions = await fetchChampionList();

//     // 모든 플레이어용 무료 플레이 챔피언 핕터링
//     const forAllPlayers: Champion[] = champions.filter((champion) =>
//       freeChampionIds.includes(Number(champion.key))
//     );

//     // 신규 플레이어용 무료 플레이 챔피언 필터링
//     const forNewPlayers: Champion[] = champions.filter((champion) =>
//       freeChampionIdsForNewPlayers.includes(Number(champion.key))
//     );

//     return {
//       forAllPlayers,
//       forNewPlayers,
//     };
//   } catch (error) {
//     console.error("로테이션 데이터를 가져오지 못했습니다.", error);
//     throw new Error("챔피언 로테이션 데이터를 가져오지 못했습니다.");
//   }
// }

import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";

// rotation 데이터 호출 / 플레이 가능한 챔피언 필터링
export async function getChampionRotation(): Promise<{
  allPlayers: Champion[];
  newPlayers: Champion[];
}> {
  try {
    const res = await fetch("/api/rotation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    const data: ChampionRotation = await res.json();
    const freeChampionIds: number[] = data.freeChampionIds;
    const freeChampionIdsForNewPlayers: number[] =
      data.freeChampionIdsForNewPlayers;

    const champions = await fetchChampionList();

    // 무료 플레이 가능한 챔피언 필터링
    const allPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );

    const newPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIdsForNewPlayers.includes(Number(champion.key))
    );

    return {
      allPlayers,
      newPlayers,
    };
  } catch (error) {
    console.error(
      "챔피언 로테이션 데이터를 가져오는 중 에러가 발생했습니다.",
      error
    );
    throw new Error("챔피언 로테이션 데이터를 가져오는 데 실패했습니다.");
  }
}
