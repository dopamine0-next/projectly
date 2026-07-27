"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, User, Lock, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const allowedUsers = ["marwah", "aisyah", "amaylia", "joseph", "ilyas"];
  const adminUser = "isc";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nim || !password) return;
    
    const username = nim.toLowerCase().trim();
    
    if (username !== adminUser && !allowedUsers.includes(username)) {
      setErrorMsg("Username tidak terdaftar. Gunakan: isc, marwah, aisyah, amaylia, joseph, atau ilyas.");
      return;
    }
    
    setErrorMsg("");
    setIsLoading(true);
    
    // Simpan role & nama ke localStorage
    if (username === adminUser) {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userName", "Admin ISC");
      setTimeout(() => router.push("/admin"), 800);
    } else {
      localStorage.setItem("userRole", "user");
      // Format nama agar huruf pertama kapital
      const capitalizedName = username.charAt(0).toUpperCase() + username.slice(1);
      localStorage.setItem("userName", capitalizedName);
      setTimeout(() => router.push("/onboarding"), 800);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col h-full bg-white p-6 justify-center">
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_280)] to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Projectly</h1>
        <p className="text-sm text-gray-500 max-w-[240px]">
          Terhubung, berkolaborasi, dan capai tujuanmu bersama.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1.5 ml-1">Username / NIM</label>
          <div className="relative">
            <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              value={nim}
              onChange={(e) => {
                setNim(e.target.value);
                setErrorMsg("");
              }}
              placeholder="mis. marwah, isc"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-400 font-medium text-gray-900"
              required
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5 ml-1">
            <label className="block text-xs font-bold text-gray-500">Kata Sandi</label>
            <a href="#" className="text-xs font-bold text-[oklch(0.55_0.22_280)] hover:underline">Lupa Kata Sandi?</a>
          </div>
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMsg("");
              }}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-400 font-medium text-gray-900"
              required
            />
          </div>
        </div>

        {errorMsg && (
          <p className="text-red-500 text-xs font-semibold mt-2 text-center">{errorMsg}</p>
        )}
      </div>

      <button 
        type="submit"
        disabled={isLoading || !nim || !password}
        className="flex items-center justify-center w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-12 rounded-xl shadow-md text-base disabled:opacity-70 transition-all"
      >
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Masuk ke Dashboard"}
      </button>
    </form>
  );
}
