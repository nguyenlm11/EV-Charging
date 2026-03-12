"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#22C55E] rounded-3xl flex items-center justify-center shadow-xl shadow-green-500/50"></div>
            <div className="text-left">
              <h1 className="text-6xl font-bold text-white tracking-tighter">
                EV-Charging
              </h1>
              <p className="text-xl text-gray-400">
                Sạc nhanh • Đổi pin • Thuê xe điện
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-white mb-4">
          Chào mừng bạn đến với PinGo
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Tìm trạm sạc gần nhất, thuê xe điện theo giờ, đặt lịch đổi pin chỉ
          trong 1 phút.
        </p>

        <Button
          onClick={goToLogin}
          // className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-black font-bold text-xl py-4 rounded-2xl shadow-lg shadow-green-500/40 transition-all active:scale-95"
          // size="lg"
          text="Đăng nhập"
        />

        <p className="mt-6 text-gray-500">
          Chưa có tài khoản?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-[#22C55E] hover:underline font-medium cursor-pointer"
          >
            Đăng ký miễn phí
          </span>
        </p>

        <p className="text-xs text-gray-600 mt-16">
          © 2026 PinGo • Xe điện Việt Nam
        </p>
      </div>
    </div>
  );
}
