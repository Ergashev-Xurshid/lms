import { TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-login">
      <div className="bg-white sm:bg-transparent mx-auto md:px-auto h-screen sm:h-full sm:p-12 p-4 w-[1100px] grid grid-cols-1 items-center ">
        <div className=" rounded-2xl md:col-span-6  w-full md:w-[372px] ">
          <div className="flex flex-col  mb-6 pt-8">
            <div className="flex gap-2 items-center">
              <TriangleAlert size={30} color="red"/>
              <h1 className="w-full text-lg text-[#666] font-bold ">
                (404) Page not found.
              </h1>
            </div>
            <p className="text-gray-500 mb-4">
              Sizning so'rovingizni veb-serverda ko'rib chiqilayotganda xatolik
              yuz berdi. Agar bu server xatosi deb o'ylasangiz, iltimos biz
              bilan bog'laning.
            </p>
            <div className="flex gap-2">
              <button className="border border-transparent rounded-lg px-4 py-1 cursor-pointer bg-[#17a2b8] text-white ">Asosiy sahifa</button>
              <button onClick={()=>navigate(-1)} className="border border-gray-400 rounded-lg px-4 py-1 cursor-pointer hover:bg-gray-100">Orqaga</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
