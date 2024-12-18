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
