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

// 문제점
// 1. getItemImgUrl에서 버전 정보를 받아오지 않아서 이미지를 가져오지 못함
// ItemCard 컴포넌트에 전달된 version 값이 undefined 상태로 전달되어서 버전 정보가 없는 잘못된 url이 생성되고 이미지가 로드되지 않았음
// fetchVersion을 직접 호출해서 page.tsx에서 버전 값을 가져옴
// 유효한 버전을 ItemCards 컴포넌트에 전달해서 getItemImgUrl에서도 올바른 URL이 생성될 수 있음.
