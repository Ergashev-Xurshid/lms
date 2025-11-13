import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import gerb from "../assets/gerb.png";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");

  function generateCaptcha() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const result = a - b;
    return { text: `${a} - ${b}`, result };
  }

  const refreshCaptcha = () => setCaptcha(generateCaptcha());

  const onSubmit = (data) => {
    // 1️⃣ Captcha tekshiruvi
    if (parseInt(data.captcha) !== captcha.result) {
      setError("Captcha noto‘g‘ri kiritildi!");
      refreshCaptcha();
      return;
    }

    // 2️⃣ Username va password tekshiruvi
    if (data.username === "admin" && data.password === "admin123") {
      // login muvaffaqiyatli
      localStorage.setItem("token", "admin_token"); // oddiy token
      localStorage.setItem("role", "admin"); // role saqlash
      setError("");
      navigate("/admin/dashboard");
    } else if (data.username === "teacher" && data.password === "teacher123") {
      localStorage.setItem("token", "teacher_token");
      localStorage.setItem("role", "teacher");
      navigate("/teacher/dashboard");
    }
    if (data.username === "student" && data.password === "student123") {
      localStorage.setItem("token", "student_token");
      localStorage.setItem("role", "student");
      navigate("/student/dashboard");
    } else {
      setError("Username yoki parol noto‘g‘ri!");
      refreshCaptcha();
    }
  };

  const randomStyle = (i) => {
    const colors = [
      "#1d4ed8",
      "#2563eb",
      "#4338ca",
      "#b91c1c",
      "#0f766e",
      "#78350f",
    ];
    return {
      transform: `rotate(${Math.random() * 40 - 20}deg)`,
      color: colors[i % colors.length],
      fontWeight: 700,
      fontSize: `${Math.random() * 10 + 26}px`,
      letterSpacing: "3px",
      display: "inline-block",
      marginRight: "2px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-login">
      <div className="bg-white sm:bg-transparent mx-auto md:px-auto h-screen sm:h-full sm:p-12 w-[1100px] grid grid-cols-1 items-center">
        <div className="bg-white md:rounded-2xl md:col-span-6  w-full md:w-[372px] h-[500px]">
          <div className="flex flex-col items-center mb-6 pt-8">
            <img src={gerb} alt="Logo" className="w-16 h-16 mb-3" />
            <h1 className="w-full text-[16px] text-[#666] font-bold text-center">
              QARSHI DAVLAT TEXNIKA UNIVERSITETI
            </h1>
            <p className="text-gray-500 text-sm">LMS axborot tizimi</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 px-8 pb-8"
          >
            <div>
              <input
                type="text"
                placeholder="Talaba ID raqami"
                {...register("username", {
                  required: "ID raqam kiritilishi shart",
                })}
                className={`w-full border rounded-lg px-4 py-2 outline-none ${
                  errors.username ? "border-red-500" : "border-green-400"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Parol"
                {...register("password", {
                  required: "Parol kiritilishi shart",
                })}
                className={`w-full border rounded-lg px-4 py-2 outline-none ${
                  errors.password ? "border-red-500" : "border-green-400"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div
                className="select-none cursor-pointer"
                title="Yangilash uchun bosing"
                onClick={refreshCaptcha}
              >
                {captcha.text.split("").map((char, i) => (
                  <span key={i} style={randomStyle(i)}>
                    {char}
                  </span>
                ))}
              </div>

              <input
                type="text"
                placeholder="Natijani kiriting"
                {...register("captcha", { required: "Captcha to‘ldirilsin" })}
                className={`w-[60%] border rounded-lg px-4 py-2 outline-none ${
                  errors.captcha ? "border-red-500" : "border-green-400"
                }`}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition cursor-pointer"
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
