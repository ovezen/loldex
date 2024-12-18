// 챔피언 기본 정보 타입
export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  info: {
    [key: string]: number;
  };
}

// 이미지 정보 타입
export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 챔피언 스킬 정보 타입
export interface ChampionSkill {
  id: string;
  key: string;
  name: string;
  description: string;
  image: Image;
}

// 챔피언 패시브 타입
export interface ChampionPassive {
  name: string;
  description: string;
  image: Image;
}

// 챔피언 스킨 정보 타입
export interface ChampionSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

// 챔피언 상세 정보 타입
export interface ChampionDetail extends Champion {
  lore: string;
  spells: ChampionSkill[];
  skins: ChampionSkin[];
  passive: ChampionPassive;
}

// 챔피언 상세 정보 API 응답 형태를 나타내는 타입
export type ChampionDetailResponse = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
};