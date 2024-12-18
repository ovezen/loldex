import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#4F46E5" size={50} />
    </div>
  );
}
