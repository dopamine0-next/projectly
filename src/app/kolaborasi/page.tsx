"use client";

import { useState } from "react";
import { TopBar } from "@/components/top-bar";
import { Progress, ProgressTrack, ProgressIndicator } from "@/components/ui/progress";
import { MoreVertical, Plus, Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function KolaborasiPage() {
  const [activeTab, setActiveTab] = useState<"proyek" | "permintaan">("proyek");

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <TopBar showGreeting showNotification />
      
      <div className="px-5 py-2">
        {/* Tabs */}
        <div className="flex p-1 bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <button 
            onClick={() => setActiveTab("proyek")}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg shadow-sm transition-colors",
              activeTab === "proyek" ? "text-[oklch(0.55_0.22_280)] bg-primary/10" : "text-gray-500 hover:text-gray-900 bg-transparent shadow-none"
            )}
          >
            Proyek Saya
          </button>
          <button 
            onClick={() => setActiveTab("permintaan")}
            className={cn(
              "flex-1 py-2 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors rounded-lg",
              activeTab === "permintaan" ? "text-[oklch(0.55_0.22_280)] bg-primary/10 font-bold shadow-sm" : "text-gray-500 hover:text-gray-900"
            )}
          >
            Permintaan Bergabung
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[oklch(0.55_0.22_280)] text-white text-[10px] font-bold">1</span>
          </button>
        </div>

        <div className="space-y-4 pb-24">
          {activeTab === "proyek" ? (
            <>
          {/* Project Card 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
            <div className="flex justify-between items-start mb-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600">
                ⭐ Status Owner
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">Pitch Deck Startup AI</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              Sedang mencari desainer UX dan pengembang frontend untuk membantu
            </p>
            
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-gray-700">3/5 Anggota</span>
              <span className="text-xs font-bold text-[oklch(0.55_0.22_280)]">60%</span>
            </div>
            <Progress value={60} className="w-full gap-0 mb-4 h-2.5">
              <ProgressTrack className="h-2.5 bg-gray-100">
                <ProgressIndicator className="bg-[oklch(0.55_0.22_280)]" />
              </ProgressTrack>
            </Progress>
            
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-[10px] font-bold">B</div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-[10px] font-bold">C</div>
              </div>
              <button className="text-xs font-bold text-[oklch(0.55_0.22_280)] hover:underline">
                Lihat detail
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
            <div className="flex justify-between items-start mb-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-green-50 text-green-600">
                👥 Status Member
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">Inisiatif Kampus Ramah Lingkungan</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">
              Mengembangkan aplikasi pelacakan keberlanjutan di seluruh kampus. Kami...
            </p>
            
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-gray-700">5/5 Anggota</span>
              <span className="text-xs font-bold text-green-600">100% Penuh</span>
            </div>
            <Progress value={100} className="w-full gap-0 mb-4 h-2.5">
              <ProgressTrack className="h-2.5 bg-gray-100">
                <ProgressIndicator className="bg-[oklch(0.55_0.22_280)]" />
              </ProgressTrack>
            </Progress>
            
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100"></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-green-100"></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-orange-100"></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold">+2</div>
              </div>
              <button className="text-xs font-bold text-[oklch(0.55_0.22_280)] hover:underline">
                Lihat detail
              </button>
            </div>
          </div>

          {/* Mulai Proyek Baru */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-dashed text-center flex flex-col items-center justify-center mt-2">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Mulai Proyek Baru</h3>
            <p className="text-xs text-gray-500 mb-4 max-w-[200px] mx-auto">
              Punya ide cemerlang? Buat ruang kerja dan mulai rekrut anggota.
            </p>
            <Link href="/kolaborasi/buat" className="bg-[oklch(0.55_0.22_280)] text-white text-xs font-bold py-2.5 px-6 rounded-xl shadow-md flex items-center gap-2 hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Buat Project
            </Link>
          </div>
          </>
          ) : (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-purple-50 text-[oklch(0.55_0.22_280)]">
                  Meminta Bergabung
                </span>
                <span className="text-xs text-gray-400">2 jam yang lalu</span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900">Budi Santoso</h3>
                  <p className="text-[10px] text-gray-500">Mendaftar sebagai: Frontend Developer</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 leading-relaxed mb-5 bg-gray-50 p-3 rounded-xl border border-gray-100">
                "Halo, saya sangat tertarik dengan proyek Pitch Deck Startup AI ini. Saya memiliki pengalaman dengan React dan TailwindCSS selama 1 tahun."
              </p>
              
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
                  <X className="w-4 h-4" /> Tolak
                </button>
                <button className="flex-1 py-2.5 bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-colors">
                  <Check className="w-4 h-4" /> Terima
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
