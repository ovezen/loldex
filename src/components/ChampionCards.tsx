import React from "react";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import { SQUARE_IMG_URL } from "@/constants/constants";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCards = ({ champion }: ChampionCardProps) => {
  const IMAGE_URL = `${SQUARE_IMG_URL}/${champion.id}.png`;

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
      <Image src={IMAGE_URL} alt={champion.name} width={100} height={100} />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
    </div>
  );
};

export default ChampionCards;
