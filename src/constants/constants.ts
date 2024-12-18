// Data Dragon API 기본 URL
export const API_URL = "https://ddragon.leagueoflegends.com";

// 챔피언 스퀘어 이미지 URL
export const SQUARE_IMG_URL = `${API_URL}/cdn/14.24.1/img/champion`;

// 챔피언 스플래시 아트 이미지 URL
export const SPLASH_IMG_URL = `${API_URL}/cdn/img/champion/splash`;

// 최신 버전 데이터 URL
export const getDataUrl = (version: string) =>
  `${API_URL}/cdn/${version}/data/ko_KR`;

// 챔피언 액티브 스킬 이미지 URL
export const getSpellImgUrl = (version: string, spellImg: string) =>
  `${API_URL}/cdn/${version}/img/spell/${spellImg}`;

// 챔피언 패시브 스킬 이미지 URL
export const getPassiveImgUrl = (version: string, passiveImg: string) =>
  `${API_URL}/cdn/${version}/img/passive/${passiveImg}`;

// 아이템 이미지 URL
export const getItemImgUrl = (version: string, item: string) =>
  `${API_URL}/cdn/${version}/img/item/${item}`;
