import ItemCards from "@/components/ItemCards";
import { Item } from "@/types/Item";
import { fetchItems, fetchVersion } from "@/utils/serverApi";
import React from "react";

export default async function ItemsPage() {
  const version = await fetchVersion();
  const items: Item[] = await fetchItems();

  return (
    <>
      <div>
        <h2>아이템 목록</h2>
      </div>

      <div>
        {items.map((item) => (
          <ItemCards key={item.id} item={item} version={version} />
        ))}
      </div>
    </>
  );
}
