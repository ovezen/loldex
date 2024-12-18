import ItemCards from "@/components/ItemCards";
import { Item } from "@/types/Item";
import { fetchItems, fetchVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "리그 오브 레전드 아이템 목록 정보",
  description:
    "Riot Games API를 활용한 리그 오브 레전드 아이템 목록 정보를 확인할 수 있습니다.",
  openGraph: {
    title: "리그 오브 레전드 아이템 목록 정보",
    description:
      "Riot Games API를 활용한 리그 오브 레전드 아이템 목록 정보를 확인할 수 있습니다.",
  },
};

export default async function ItemsPage() {
  const version: string = await fetchVersion();
  const items: Item[] = await fetchItems();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item: Item) => (
          <ItemCards key={item.id} item={item} version={version} />
        ))}
      </div>
    </div>
  );
}
