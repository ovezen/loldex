# Riot API를 활용한 리그 오브 레전드 정보 앱 제작하기

## 목차

- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [트러블 슈팅](#트러블-슈팅)
- [개선할 점](#개선할-점)

## 주요 기능

- 챔피언 목록 정보: 리그 오브 레전드 최신 버전 기준으로 등장하는 모든 챔피언 정보 확인
- 챔피언 상세 정보: 각 챔피언의 상세 정보와 액티브, 패시브 스킬 및 스킨 확인
- 아이템 목록 정보: 리그 오브 레전드 게임 플레이에서 사용 가능한 모든 아이템 정보 확인
- 챔피언 로테이션: 금주의 무료 플레이 제공 챔피언 로테이션 확인

## 기술 스택

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 프로젝트 구조

```bash
src
 ┣ app
 ┃ ┣ api
 ┃ ┃ ┗ rotation
 ┃ ┃ ┃ ┗ route.ts
 ┃ ┣ champions
 ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┣ loading.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ items
 ┃ ┃ ┗ page.tsx
 ┃ ┣ rotation
 ┃ ┃ ┗ page.tsx
 ┃ ┣ error.tsx
 ┃ ┣ layout.tsx
 ┃ ┣ loading.tsx
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ ChampionCards.tsx
 ┃ ┗ ItemCards.tsx
 ┣ constants
 ┃ ┗ constants.ts
 ┣ providers
 ┃ ┗ RQProvider.tsx
 ┣ styles
 ┃ ┗ globals.css
 ┣ types
 ┃ ┣ Champion.ts
 ┃ ┣ ChampionRotation.ts
 ┃ ┗ Item.ts
 ┗ utils
   ┣ riotApi.ts
   ┗ serverApi.ts
```

## 트러블 슈팅

1. Next.js 환경 변수 설정

- 발생한 문제: 환경변수 접두사를 제대로 사용하지 않아 클라이언트 코드에서 접근 실패
- 해결 방법: 클라이언트 코드에서 접근할 때 NEXT_PUBLIC_을 붙여서 사용
