import React from "react";
import { Item } from "@/types/Item";
import Image from "next/image";
import { getItemImgUrl } from "@/constants/constants";

interface ItemCardProps {
  item: Item;
  version: string;
}

const ItemCards = ({ item, version }: ItemCardProps) => {
  const IMG_URL = getItemImgUrl(version, item.image.full);

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md text-center max-w-[150px]">
      {/* 이미지 */}
      <Image
        src={IMG_URL}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-md"
      />
      {/* 아이템 이름 */}
      <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-300 truncate">
        {item.name}
      </p>
    </div>
  );
};

export default ItemCards;