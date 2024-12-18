// Data Dragon API 기본 URL
export const API_URL = "https://ddragon.leagueoflegends.com";

// 챔피언 스퀘어 이미지 URL/
export const SQUARE_IMG_URL = `${API_URL}/cdn/14.24.1/img/champion`;

// 최신 버전 데이터 url
export const getDataUrl = (version: string) =>
  `${API_URL}/cdn/${version}/data/ko_KR`;
