import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY as string;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API KEY를 찾을 수 없습니다." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        method: "GET",
        headers: {
          "X-Riot_Token": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: ChampionRotation[] = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("데이터 패치 중 에러 발생", error);

    return NextResponse.json(
      { error: "챔피언 정보를 가져오지 못했습니다." },
      { status: 500 }
    );
  }
}
