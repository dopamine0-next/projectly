"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/top-bar";
import { Plus, Calendar, Clock, MapPin, ChevronRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function BerandaPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  // State for logic
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  const [appliedProjects, setAppliedProjects] = useState<number[]>([]);

  const toggleEvent = (id: number) => {
    setRegisteredEvents(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const applyProject = (id: number) => {
    setAppliedProjects(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const role = localStorage.getItem("userRole");

    if (!name || !role) {
      router.replace("/login");
    } else {
      setUserName(name);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null; // Wait for redirect or check

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <TopBar showGreeting showNotification />
      
      <div className="px-5 py-6 space-y-6">
        <div className="bg-[oklch(0.55_0.22_280)] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <h2 className="text-xl font-bold mb-2 relative z-10">Selamat datang, {userName}!</h2>
          <p className="text-sm text-white/90 relative z-10 mb-4">
            Mulai kolaborasi proyek Anda hari ini dengan bantuan AI.
          </p>
          <Link href="/kolaborasi/buat" className="inline-block bg-white text-[oklch(0.55_0.22_280)] text-sm font-bold py-2 px-4 rounded-xl shadow-sm hover:bg-gray-50 transition-colors relative z-10">
            Mulai Proyek Baru
          </Link>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Akses Cepat</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/profil" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-2 hover:border-[oklch(0.55_0.22_280)/0.3] transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold">P</div>
              <span className="text-sm font-medium text-gray-700">Profil Anda</span>
            </Link>
            <Link href="/komunitas" className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-2 hover:border-[oklch(0.55_0.22_280)/0.3] transition-colors">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 font-bold">A</div>
              <span className="text-sm font-medium text-gray-700">Anggota AI</span>
            </Link>
          </div>
        </div>

        {/* Proyek Terkini */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Proyek Terkini</h3>
            <Link href="/kolaborasi" className="text-xs text-[oklch(0.55_0.22_280)] font-semibold hover:underline">Lihat Semua</Link>
          </div>
          <Link href="/kolaborasi" className="block bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative hover:border-[oklch(0.55_0.22_280)/0.3] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600">
                Frontend Dev
              </span>
              <span className="text-[10px] font-medium text-gray-400">Aktif</span>
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Pitch Deck Startup AI</h4>
            <p className="text-xs text-gray-500 mb-3 line-clamp-1">Proyek kolaborasi untuk kompetisi bisnis digital tingkat nasional.</p>
            <div className="flex justify-between items-center">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full border border-white bg-blue-100 flex items-center justify-center text-[8px] font-bold">A</div>
                <div className="w-5 h-5 rounded-full border border-white bg-green-100 flex items-center justify-center text-[8px] font-bold">B</div>
                <div className="w-5 h-5 rounded-full border border-white bg-orange-100 flex items-center justify-center text-[8px] font-bold">C</div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[oklch(0.55_0.22_280)]">
                60% <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>

        {/* Acara Mendatang */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Acara Mendatang</h3>
            <Link href="#" className="text-xs text-[oklch(0.55_0.22_280)] font-semibold hover:underline">Lihat Semua</Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5">
            {/* Event Card 1 */}
            <div className="w-[240px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden snap-center">
              <div className="h-32 bg-gray-200 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-lg w-10 h-10 shadow-sm">
                  <span className="text-[9px] font-bold text-red-500 uppercase leading-none">Agu</span>
                  <span className="text-sm font-extrabold text-gray-900 leading-none">24</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-gray-900 mb-1 leading-tight">Hackathon Campus 2024</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 mb-3">
                  <MapPin className="w-3 h-3 text-[oklch(0.55_0.22_280)]" /> Aula Utama Kampus
                </div>
                <button 
                  onClick={() => toggleEvent(1)}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${
                    registeredEvents.includes(1) 
                    ? "bg-gray-100 text-gray-500 border border-gray-200" 
                    : "bg-[oklch(0.55_0.22_280)] text-white hover:bg-primary/90 shadow-sm"
                  }`}
                >
                  {registeredEvents.includes(1) ? "Terdaftar" : "Daftar Acara"}
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="w-[240px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden snap-center">
              <div className="h-32 bg-purple-100 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-lg w-10 h-10 shadow-sm">
                  <span className="text-[9px] font-bold text-blue-500 uppercase leading-none">Sep</span>
                  <span className="text-sm font-extrabold text-gray-900 leading-none">05</span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sm text-gray-900 mb-1 leading-tight">Webinar: Future of AI</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 mb-3">
                  <MapPin className="w-3 h-3 text-[oklch(0.55_0.22_280)]" /> Zoom Meeting
                </div>
                <button 
                  onClick={() => toggleEvent(2)}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${
                    registeredEvents.includes(2) 
                    ? "bg-gray-100 text-gray-500 border border-gray-200" 
                    : "bg-[oklch(0.55_0.22_280)] text-white hover:bg-primary/90 shadow-sm"
                  }`}
                >
                  {registeredEvents.includes(2) ? "Terdaftar" : "Daftar Acara"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Open Project */}
        <div className="pb-24">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Open Project</h3>
            <Link href="/kolaborasi" className="text-xs text-[oklch(0.55_0.22_280)] font-semibold hover:underline">Lihat Semua</Link>
          </div>
          <div className="space-y-4">
            {/* Open Project 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-green-50 text-green-600">
                  Open Recruitment
                </span>
                <span className="text-[10px] font-medium text-gray-400">1 jam lalu</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Aplikasi Sistem Kehadiran RFID</h4>
              <p className="text-xs text-gray-500 mb-3">Dibutuhkan segera frontend developer yang menguasai React Native untuk integrasi API.</p>
              
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-[10px] font-bold text-purple-700">D</div>
                  <span className="text-xs font-semibold text-gray-700">Dimas Aditya</span>
                </div>
                <button 
                  onClick={() => applyProject(1)}
                  disabled={appliedProjects.includes(1)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    appliedProjects.includes(1) 
                    ? "bg-gray-100 text-gray-500" 
                    : "bg-white border border-[oklch(0.55_0.22_280)] text-[oklch(0.55_0.22_280)] hover:bg-primary/5"
                  }`}
                >
                  {appliedProjects.includes(1) ? "Menunggu" : "Ajukan Diri"}
                </button>
              </div>
            </div>

            {/* Open Project 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative">
              <div className="flex justify-between items-start mb-2">
                <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-green-50 text-green-600">
                  Open Recruitment
                </span>
                <span className="text-[10px] font-medium text-gray-400">3 jam lalu</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Platform E-Commerce Lokal</h4>
              <p className="text-xs text-gray-500 mb-3">Mencari UI/UX Designer untuk membuat prototype di Figma.</p>
              
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-700">R</div>
                  <span className="text-xs font-semibold text-gray-700">Rina Melati</span>
                </div>
                <button 
                  onClick={() => applyProject(2)}
                  disabled={appliedProjects.includes(2)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    appliedProjects.includes(2) 
                    ? "bg-gray-100 text-gray-500" 
                    : "bg-white border border-[oklch(0.55_0.22_280)] text-[oklch(0.55_0.22_280)] hover:bg-primary/5"
                  }`}
                >
                  {appliedProjects.includes(2) ? "Menunggu" : "Ajukan Diri"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
