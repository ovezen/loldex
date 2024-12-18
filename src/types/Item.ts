import { Image } from "./Champion";

// 아이템 기본 정보 타입
export interface Item {
  id: string;
  name: string;
  description: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  tags: string[];
}

// 아이템 목록 구조
export interface ItemList {
  type: string;
  version: string;
  data: {
    [key: string]: Item;
  };
}
