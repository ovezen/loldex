"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { refresh } = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      {/* 에러 메시지 */}
      <div className="max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          페이지에서 오류가 발생했습니다.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error.message}</p>
        {/* 다시 시도 버튼 */}
        <button
          onClick={() =>
            startTransition(() => {
              refresh();
              reset();
            })
          }
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          다시 시도하기
        </button>
      </div>
    </div>
  );
}
