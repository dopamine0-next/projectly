"use client";

import { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress, ProgressTrack, ProgressIndicator } from "@/components/ui/progress";
import { ChevronRight, PenTool, Code2, Database, LayoutTemplate, Briefcase, Trophy, CheckCircle2 } from "lucide-react";

export default function ProfilPage() {
  const [showAllActivities, setShowAllActivities] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("Pengguna");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <TopBar showGreeting showNotification />
      
      <div className="px-5 py-4 space-y-6">
        {/* Profile Info */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="w-20 h-20 bg-primary/10 rounded-full mb-3 flex items-center justify-center border-2 border-white shadow-md">
            <span className="text-3xl font-bold text-[oklch(0.55_0.22_280)] uppercase">{userName.charAt(0)}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">{userName}</h2>
          <p className="text-sm text-gray-500 font-medium">Mahasiswa Sistem Informasi</p>
          <p className="text-xs text-gray-400 mb-4">UNPAM University</p>
          
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "default" : "outline"} 
            className={isEditing 
              ? "w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-semibold h-10 rounded-xl" 
              : "w-full text-[oklch(0.55_0.22_280)] border-[oklch(0.55_0.22_280)] hover:bg-[oklch(0.55_0.22_280)/0.05] font-semibold h-10 rounded-xl"
            }
          >
            {isEditing ? <><CheckCircle2 className="w-4 h-4 mr-2" /> Selesai Edit</> : "Edit Profil"}
          </Button>
        </div>

        {/* Suggested Skill */}
        <div className="bg-[oklch(0.55_0.22_280)] rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">Keahlian selanjutnya yang disarankan</p>
          <h3 className="text-2xl font-bold mb-1">Next.js</h3>
          <p className="text-xs text-white/90 mb-4">Karena anda menguasai <span className="font-semibold">React</span></p>
          
          <button className="text-xs font-semibold bg-white text-[oklch(0.55_0.22_280)] px-4 py-2 rounded-lg flex items-center gap-1 shadow-sm hover:bg-gray-50 transition-colors">
            Pelajari Lebih Lanjut
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Keahlian (Skills) */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4">Keahlian</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-[#F24E1E]" />
                  <span className="text-sm font-semibold text-gray-700">Figma</span>
                </div>
                <span className="text-xs font-bold text-gray-500">90%</span>
              </div>
              <Progress value={90} className="w-full gap-0">
                <ProgressTrack className="h-2 bg-gray-100">
                  <ProgressIndicator className="bg-[#F24E1E]" />
                </ProgressTrack>
              </Progress>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#61DAFB]" />
                  <span className="text-sm font-semibold text-gray-700">React</span>
                </div>
                <span className="text-xs font-bold text-gray-500">75%</span>
              </div>
              <Progress value={75} className="w-full gap-0">
                <ProgressTrack className="h-2 bg-gray-100">
                  <ProgressIndicator className="bg-[#61DAFB]" />
                </ProgressTrack>
              </Progress>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#336791]" />
                  <span className="text-sm font-semibold text-gray-700">PostgreSQL</span>
                </div>
                <span className="text-xs font-bold text-gray-500">40%</span>
              </div>
              <Progress value={40} className="w-full gap-0">
                <ProgressTrack className="h-2 bg-gray-100">
                  <ProgressIndicator className="bg-[#336791]" />
                </ProgressTrack>
              </Progress>
            </div>
          </div>
        </div>

        {/* Minat (Interests) */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Minat</h3>
          <div className="flex flex-wrap gap-2">
            {["UI/UX Design", "Web3", "Machine Learning", "Startups", "Hackathons"].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white border border-gray-200 text-gray-600 font-medium px-3 py-1.5 rounded-lg shadow-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Riwayat Aktivitas (Activity History) */}
        <div className="pb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Riwayat Aktivitas</h3>
            <button 
              onClick={() => setShowAllActivities(!showAllActivities)}
              className="text-xs text-[oklch(0.55_0.22_280)] font-semibold cursor-pointer"
            >
              {showAllActivities ? "Sembunyikan" : "Lihat Semua"}
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <LayoutTemplate className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">Campus Navigate App</h4>
                <p className="text-xs text-gray-500 mb-1">Menyelesaikan Prototipe UI di Figma. 2 hari yang lalu</p>
                <span className="text-[10px] text-gray-400 font-medium">2 hari yang lalu</span>
              </div>
            </div>

            <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">Study Group Finder</h4>
                <p className="text-xs text-gray-500 mb-1">Bergabung dengan tim backend...</p>
                <span className="text-[10px] text-gray-400 font-medium">1 minggu yang lalu</span>
              </div>
            </div>

            <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">Hackathon Spring 2024</h4>
                <p className="text-xs text-gray-500 mb-1">Membentuk tim dengan 3 orang...</p>
                <span className="text-[10px] text-gray-400 font-medium">2 minggu yang lalu</span>
              </div>
            </div>
            
            {showAllActivities && (
              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all animate-in fade-in slide-in-from-top-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5 text-[oklch(0.55_0.22_280)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">Menyelesaikan Kursus React</h4>
                  <p className="text-xs text-gray-500 mb-1">Mendapatkan sertifikat kompetensi React lanjutan.</p>
                  <span className="text-[10px] text-gray-400 font-medium">1 bulan yang lalu</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
