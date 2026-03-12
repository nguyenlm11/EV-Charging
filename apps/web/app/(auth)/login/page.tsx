"use client";

import { Button } from "@repo/ui"; // giữ nguyên như template của bạn
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#22C55E] rounded-2xl flex items-center justify-center">
              {/* <Zap className="w-8 h-8 text-white" /> */}
            </div>
            <div className="text-white">
              <h1 className="text-5xl font-bold tracking-tighter">PinGo</h1>
              <p className="text-sm text-gray-400 -mt-1">
                Sạc nhanh • Đổi pin • Thuê xe
              </p>
            </div>
          </div>
        </div>

        {/* Card Login */}
        <div className="bg-[#1E2937] rounded-3xl p-8 shadow-2xl border border-gray-700">
          <h2 className="text-2xl font-semibold text-white text-center mb-8">
            Đăng nhập
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">
                Email hoặc Số điện thoại
              </p>
              <input
                type="text"
                placeholder="example@email.com hoặc 0987654321"
                className="w-full bg-[#334155] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#22C55E]"
              />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-2">Mật khẩu</p>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#334155] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#22C55E]"
              />
            </div>

            <Button
              onClick={() => alert("Đăng nhập thành công! (demo)")}
              className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold py-3 rounded-xl text-lg"
            >
              Đăng nhập
            </Button>

            <div className="text-center text-gray-400 text-sm">
              Chưa có tài khoản?{" "}
              <Link href="/register" className="text-[#22C55E] hover:underline">
                Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-8">
          © 2026 PinGo - Xe điện Việt Nam
        </p>
      </div>
    </div>
  );
}
