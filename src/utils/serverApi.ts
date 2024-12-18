"use server";

import { apiURL } from "@/constants/constants";
import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

// 최신 버전 정보
export async function fetchVersion(): Promise<string> {
  const response = await fetch(`${apiURL}/api/versions.json`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`버전 정보를 불러오지 못했습니다.: ${response.status}`);
  }

  const data: string[] = await response.json();
  return data[0];
}

// 챔피언 목록
export async function fetchChampionList(): Promise<Champion[]> {
  const version = await fetchVersion();
  const response = await fetch(
    `${apiURL}/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`챔피언 목록을 불러오지 못했습니다.: ${response.status}`);
  }

  const data = await response.json();
  const champions: Champion[] = Object.values(data.data);
  return champions;
}

// 아이템 목록
export async function fetchItems(): Promise<Item[]> {
  const version = await fetchVersion();
  const response = await fetch(`${apiURL}/cdn/${version}/data/ko_KR/item.json`);

  if (!response.ok) {
    throw new Error(`아이템 목록을 불러오지 못했습니다.: ${response.status}`);
  }

  const data = await response.json();
  const items: Item[] = Object.values(data.data);
  return items;
}
