# Riot API를 활용한 리그 오브 레전드 정보 앱 제작하기

## 목차

- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [트러블 슈팅](#트러블-슈팅)

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

### 1. Next.js 환경 변수 설정

[블로그 바로가기](https://myinfo7091.tistory.com/64)

```bash
const apiKey = process.env.RIOT_API_KEY;

if (!apiKey) {
  return NextResponse.json(
    { error: "API Key를 찾을 수 없습니다." },
    { status: 500 }
  );
}
```

NEXT_PUBLIC_ 접두사가 누락되어 클라이언트에서 환경 변수를 불러오지 못하고 undefined로 읽히고 있었다.
클라이언트 측에서 접근하기 위해 환경변수 이름에는 NEXT_PUBLIC_ 접두사가 필요하며, 이것이 없는 환경변수는 서버 사이드에서만 접근 가능하다.

NEXT_PUBLIC_을 추가하여 클라이언트 측 접근에서 API key를 사용할 수 있도록 코드를 수정했다.

```bash
# 클라이언트 및 서버에서 접근 가능
NEXT_PUBLIC_API_KEY=your_public_api_key

# 서버에서만 접근 가능
API_SECRET_KEY=your_api_key
```

### 2. rotation 페이지 챔피언 필터링

챔피언 로테이션 페이지에서 사용할 데이터를 확인하고, freeChampionIds 값만으로는 챔피언 목록 정보를 제공할 수 없어서 방법을 찾아보았다.

![image](https://github.com/user-attachments/assets/cd94eb5d-d6f6-47f7-9de9-f0238b5939a8)

Champion 데이터의 구조를 확인해보면 캐릭터의 고유한 id를 포함하고 있는 것을 알 수 있는데, 이 값으로 freeChampionIds와 비교해서 전체 캐릭터 목록 중 일치하는 데이터만 고르면 된다.

riopApi.ts에서 getChampionRotation()으로 데이터를 요청하고 무료 플레이를 지원하는 챔피언만 필터링하려고 했는데, 해당하는 champion 값이 undefined였다.
freeChampionIds를 보고 챔피언 Id를 기준으로 filter를 통해 필요한 데이터를 찾으려고 했는데, 알고 보니 champion 데이터에서는 숫자로 이루어진 key값을 비교해줘야 했다.

```bash
    // 무료 플레이 가능한 챔피언 필터링
    const allPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );

    const newPlayers: Champion[] = champions.filter((champion) =>
      freeChampionIdsForNewPlayers.includes(Number(champion.key))
    );
```

### 3. version 정보 전달 시 undefined 출력

[블로그 바로가기](https://myinfo7091.tistory.com/63)

각종 이미지와 기본 URL 사용을 위해 constants.ts에 필요한 URL과 생성 함수를 정리했는데, ItemCards 컴포넌트에서 각 아이템에 해당하는 이미지가 로드되지 않았다.
아이템 이미지를 가져오기 위해 URL을 생성하는 getItemImgUrl 함수는 버전 정보를 필요로 한다.

확인해보니 version 값이 제대로 전달되지 않은 채 ItemCards 컴포넌트가 렌더링되고 있었다.
undefined인 상태로 ItemCard 컴포넌트에 버전 정보가 전해지면서 잘못된 URL이 생성되어 이미지가 로드되지 않았다.
 
코드 수정을 위해 fetchVersion()을 사용해서 페이지 컴포넌트(items/page.tsx)에서 버전 정보를 미리 가져오고, ItemCards 컴포넌트에 props로 전달했다.

```bash
export const getItemImgUrl = (version: string, itemImg: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemImg}`;
```

```bash
const ItemCards = ({ item, version }: ItemCardProps) => {
  const IMG_URL = getItemImgUrl(version, item.image.full);
```

### 4. next/image를 활용한 외부 이미지 사용

<img> 태그 대신 Next.js의 next/image 컴포넌트를 사용하여 이미지 최적화를 적용하려고 했다.
하지만 기존의 외부 이미지 URL을 그대로 사용했을 때 오류가 발생했다.

```bash
Error: Invalid src prop (https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/Aatrox.png) on `next/image`, hostname "ddragon.leagueoflegends.com" is not configured under images in your `next.config.js`
```

Image 컴포넌트를 사용하면 이미지 로딩과 관련된 자동 최적화가 가능하지만, 이때 외부 URL을 사용한다면 호스트 도메인을 명시적으로 허용해야 했다.

```bash
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // 프로토콜 (http 또는 https)
        hostname: "ddragon.leagueoflegends.com", // 도메인 이름
        port: "", // (선택) 포트가 있으면 지정
        pathname: "/cdn/**", // (선택) 허용할 경로 패턴
      },
    ],
  },
};

export default nextConfig;
```

호스트 도메인을 명시하는 방법을 검색해보니 정해진 형식이 있었고, 이에 맞춰 next.config.mjs(js)파일을 수정했다.
next/image 컴포넌트를 통해 외부 이미지가 문제없이 로드되었고, 이미지 로딩 성능을 개선할 수 있었다.
