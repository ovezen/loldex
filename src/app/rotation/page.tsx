// "use client";

// import ChampionCards from "@/components/ChampionCards";
// import { Champion } from "@/types/Champion";
// import { getChampionRotation } from "@/utils/riotApi";
// import { useQuery } from "@tanstack/react-query";
// import React from "react";

// type RotationProps = {
//   forAllPlayers: Champion[];
//   forNewPlayers: Champion[];
// };

// export default function RotationPage() {
//   const { data, isPending, error } = useQuery<RotationProps>({
//     queryKey: ["Rotation"],
//     queryFn: getChampionRotation,
//     staleTime: 1000 * 60 * 5,
//   });

//   if (isPending) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error!</div>;
//   }

//   const { forAllPlayers, forNewPlayers } = data as RotationProps;

//   return (
//     <div>
//       page
//       {/* 무료 챔피언 로테이션 */}
//       <div>
//         {forAllPlayers.map((champion: Champion) => (
//           <ChampionCards key={champion.id} champion={champion} />
//         ))}
//       </div>
//       {/* 신규 플레이어용 무료 챔피언 로테이션 */}
//       <div>
//         {forNewPlayers.map((champion: Champion) => (
//           <ChampionCards key={champion.id} champion={champion} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Head from "next/head";
import { Champion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionCards from "@/components/ChampionCards";

type RotationProps = {
  allPlayers: Champion[];
  newPlayers: Champion[];
};

export default function RotationPage() {
  const { data, isPending, error, refetch } = useQuery<RotationProps>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  // 데이터가 성공적으로 로드되었을 경우 구조 분해
  const { allPlayers, newPlayers } = data as RotationProps;

  return (
    <>
      <Head>
        <title>금주 로테이션 확인</title>
        <meta
          name="description"
          content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다."
        />
        <meta property="og:title" content="금주 로테이션 확인" />
        <meta
          property="og:description"
          content="Riot Games API를 활용하여 금주 로테이션 정보를 제공합니다."
        />
        <meta property="og:url" content="http://localhost:3000/rotation" />
      </Head>

      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <div>
          <div className="text-3xl txt pb-10">
            <h2 className="text-3xl font-bold">금주 플레이어 로테이션 확인</h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 플레이어 로테이션 정보를
              제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allPlayers.map((champion: Champion) => (
              <ChampionCards key={champion.id} champion={champion} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="txt pb-10">
            <h2 className="text-3xl font-bold">
              금주 신규 플레이어 로테이션 확인
            </h2>
            <p className="text-lg">
              Riot Games API를 활용하여 금주 신규 플레이어 로테이션 정보를
              제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCards key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
