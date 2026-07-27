"use client";

import { useState } from "react";
import { TopBar } from "@/components/top-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MEMBERS = [
  { id: 1, name: "Sarah J.", role: "Ilmu Komputer, Smt 3", match: 98, matchText: "Cocok", matchDesc: "Cocok dengan tech stack dan minat di FinTech.", skills: ["React", "TypeScript", "Tailwind CSS"], available: true, status: "Tersedia Sekarang" },
  { id: 2, name: "David M.", role: "Rekayasa Perangkat Lunak, Smt 2", match: 85, matchText: "Potensial", matchDesc: "Keahlian frontend kuat, namun jadwal terbatas.", skills: ["Vue.js", "JavaScript", "Figma"], available: false, status: "Kapasitas Terbatas" },
  { id: 3, name: "Elena K.", role: "Desain Interaktif, Smt 4", match: 72, matchText: "Alternatif", matchDesc: "Overlap desain yang bagus, mencari lebih banyak pengalaman kode.", skills: ["HTML/CSS", "UI/UX", "React"], available: true, status: "Tersedia Sekarang" }
];

export default function KomunitasPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [invitedIds, setInvitedIds] = useState<number[]>([]);

  const toggleInvite = (id: number) => {
    setInvitedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredMembers = MEMBERS.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    if (activeFilter === "Tersedia") return matchesSearch && m.available;
    // Add logic for Keahlian or Angkatan if needed
    return matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Custom TopBar for this page */}
      <div className="px-5 py-4 flex items-center justify-between bg-white z-40 sticky top-0">
        <div className="flex items-center gap-3">
          <Link href="/kolaborasi" className="w-8 h-8 flex items-center justify-center -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="font-semibold text-lg text-gray-900 tracking-tight">
            Rekomendasi Anggota AI
          </h1>
        </div>
      </div>
      
      <div className="px-5 pb-24">
        {/* Header Text */}
        <div className="text-center py-4 mb-2">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
            Direkomendasikan<br/>untuk: <span className="text-[oklch(0.55_0.22_280)]">Frontend<br/>Developer</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-[280px] mx-auto">
            AI kami telah menemukan kecocokan terbaik untuk proyek Anda berdasarkan keselarasan keahlian, ketersediaan, dan minat bersama.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari anggota (nama atau keahlian)..." 
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
          {["Semua", "Keahlian", "Tersedia", "Angkatan"].map(filter => (
            <Badge 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"} 
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "font-medium px-4 py-1.5 rounded-full flex-shrink-0 cursor-pointer transition-colors",
                activeFilter === filter ? "bg-[oklch(0.55_0.22_280)] text-white hover:bg-primary/90" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              )}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-sm">Tidak ada anggota yang cocok dengan pencarian.</div>
          ) : (
            filteredMembers.map((member) => {
              const isInvited = invitedIds.includes(member.id);
              
              return (
                <div key={member.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-[oklch(0.55_0.22_280)]">{member.name.charAt(0)}</div>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">{member.name}</h3>
                      <p className="text-[10px] text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "flex gap-3 p-2.5 rounded-xl border mb-3",
                    member.match >= 90 ? "bg-teal-50/50 border-teal-100/50" : 
                    member.match >= 80 ? "bg-orange-50/50 border-orange-100/50" : "bg-gray-50 border-gray-100"
                  )}>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold",
                      member.match >= 90 ? "bg-teal-100 text-teal-700" : 
                      member.match >= 80 ? "bg-orange-100 text-orange-700" : "bg-gray-200 text-gray-700"
                    )}>{member.match}%</div>
                    <div>
                      {member.match >= 90 && <p className="text-[10px] font-bold text-teal-800 mb-0.5">{member.matchText}</p>}
                      <p className={cn(
                        "text-[9px] leading-tight",
                        member.match >= 90 ? "text-teal-700/80" : 
                        member.match >= 80 ? "text-orange-700/80" : "text-gray-600"
                      )}>{member.matchDesc}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-[10px] font-bold text-gray-500 mb-1.5">Keahlian Utama</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map(skill => (
                        <span key={skill} className="text-[9px] font-medium px-2 py-1 bg-gray-50 text-gray-700 rounded-md border border-gray-100">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className={cn("w-1.5 h-1.5 rounded-full", member.available ? "bg-green-500" : "bg-orange-500")}></div>
                      <span className="text-[9px] text-gray-500 font-medium">{member.status}</span>
                    </div>
                    <Button 
                      onClick={() => toggleInvite(member.id)}
                      variant={isInvited ? "secondary" : (member.available ? "default" : "outline")} 
                      className={cn(
                        "text-xs font-bold h-8 px-6 rounded-lg transition-all",
                        isInvited ? "bg-gray-100 text-gray-500 hover:bg-gray-200" : 
                        (member.available ? "bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white" : "text-[oklch(0.55_0.22_280)] border-[oklch(0.55_0.22_280)] hover:bg-primary/5")
                      )}
                    >
                      {isInvited ? <><Check className="w-3 h-3 mr-1" /> Diundang</> : "Undang"}
                    </Button>
                  </div>
                </div>
              );
            })
          )}

        </div>
      </div>
    </div>
  );
}
