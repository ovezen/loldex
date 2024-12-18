"use client";

import { Champion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionCards from "@/components/ChampionCards";
import Loading from "../loading";

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
    return <Loading />;
  }

  if (error) {
    return <div>Error!</div>;
  }

  const { allPlayers, newPlayers } = data as RotationProps;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 py-8">
      <article className="flex flex-col gap-10 min-h-screen py-8 pb-20 m-auto max-w-custom container">
        <div>
          <div className="text-3xl txt pb-10">
            <h2 className="text-3xl font-bold">이번 주 무료 챔피언</h2>
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
              이번 주 신규 플레이어를 위한 무료 챔피언
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newPlayers.map((champion: Champion) => (
              <ChampionCards key={champion.id} champion={champion} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
