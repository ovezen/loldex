import React from "react";
import { Item } from "@/types/Item";
import Image from "next/image";
import { apiURL } from "@/constants/constants";

interface ItemCardProps {
  item: Item;
  version: string;
}

const ItemCards = ({ item, version }: ItemCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px",
        textAlign: "center",
        width: "150px",
      }}
    >
      <Image
        src={`${apiURL}/cdn/${version}/img/item/${item.id}.png`}
        alt={item.name}
        width={64}
        height={64}
      />
      <p>{item.name}</p>
    </div>
  );
};

export default ItemCards;
