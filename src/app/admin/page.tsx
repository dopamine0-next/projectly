"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, LayoutTemplate, Settings, LogOut } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const name = localStorage.getItem("userName");
    
    // Proteksi sederhana
    if (role !== "admin") {
      router.replace("/login");
    } else if (name) {
      setUserName(name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    router.push("/login");
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-gray-50">
      {/* Admin Top Bar */}
      <div className="px-5 py-4 flex items-center justify-between bg-[oklch(0.55_0.22_280)] text-white shadow-md z-40 sticky top-0">
        <div className="font-bold text-lg tracking-tight">Projectly Admin</div>
        <button onClick={handleLogout} className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 p-5 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Selamat Datang, {userName}!</h1>
        <p className="text-sm text-gray-500 mb-6">Berikut adalah ringkasan aktivitas aplikasi hari ini.</p>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">1,245</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Pengguna</p>
          </div>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-purple-50 text-[oklch(0.55_0.22_280)] rounded-full flex items-center justify-center mb-3">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">342</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Proyek Aktif</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-sm font-bold text-gray-900 mb-3">Tindakan Cepat</h2>
        <div className="space-y-3">
          <button className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Kelola Pengguna</h4>
              <p className="text-xs text-gray-500">Lihat, edit, atau hapus data pengguna</p>
            </div>
          </button>
          
          <button className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Pengaturan Sistem</h4>
              <p className="text-xs text-gray-500">Konfigurasi algoritma rekomendasi AI</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
