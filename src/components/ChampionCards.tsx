import React from "react";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import { SQUARE_IMG_URL } from "@/constants/constants";
import Link from "next/link";

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCards = ({ champion }: ChampionCardProps) => {
  const IMG_URL = `${SQUARE_IMG_URL}/${champion.id}.png`;

  return (
    <Link
      href={`/champions/${champion.id}`}
      className="border rounded-lg"
    >
      <Image src={IMG_URL} alt={champion.name} width={100} height={100} />
      <h3>{champion.name}</h3>
      <p>{champion.title}</p>
    </Link>
  );
};

export default ChampionCards;
