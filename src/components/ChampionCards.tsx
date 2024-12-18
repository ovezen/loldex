import React from "react";
import { Champion } from "@/types/Champion";
import Image from "next/image";

interface ChampionCardProps {
  champion: Champion;
  version: string;
}

const ChampionCards = ({ champion, version }: ChampionCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        width: "150px",
      }}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
        alt={champion.name}
        width={100}
        height={100}
      />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
    </div>
  );
};

export default ChampionCards;
