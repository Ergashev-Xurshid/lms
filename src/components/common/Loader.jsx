import { ScaleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ScaleLoader size={50} color="#6f5fcd" />
    </div>
  );
}
