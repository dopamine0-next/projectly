"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Loader2 } from "lucide-react";

export default function BuatKolaborasiPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    deadline: ""
  });

  const [roles, setRoles] = useState([
    { id: 1, title: "Frontend Developer", count: 2, description: "" },
    { id: 2, title: "UX Designer", count: 1, description: "" }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);

  const totalRoles = roles.reduce((sum, role) => sum + role.count, 0);

  const updateRoleCount = (id: number, delta: number) => {
    setRoles(roles.map(r => {
      if (r.id === id) {
        const newCount = Math.max(0, r.count + delta);
        return { ...r, count: newCount };
      }
      return r;
    }));
  };

  const updateRoleDescription = (id: number, desc: string) => {
    setRoles(roles.map(r => r.id === id ? { ...r, description: desc } : r));
  };

  const addRole = () => {
    setRoles([...roles, { 
      id: Date.now(), 
      title: "Role Baru", 
      count: 1, 
      description: "" 
    }]);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      router.push("/kolaborasi");
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <TopBar title="Buat Kolaborasi" showBack className="border-b border-gray-100 sticky top-0" />
      
      <div className="px-5 py-6 pb-32">
        {/* Detail Proyek */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-gray-500 tracking-wider mb-4">DETAIL PROYEK</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nama Proyek</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="mis. aplikasi Kampus Ramah Lingkungan" 
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Deskripsi</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Jelaskan tujuan, ruang lingkup, dan visi kolaborasi ini..." 
                rows={4}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-400 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Kategori</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
              >
                <option value="" disabled>Pilih Kategori</option>
                <option value="tech">Technology</option>
                <option value="design">Design</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Tenggat Waktu Target</label>
              <input 
                type="date" 
                value={formData.deadline}
                onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Role yang Dibutuhkan */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xs font-bold text-gray-500 tracking-wider">ROLE YANG DIBUTUHKAN</h2>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-[oklch(0.55_0.22_280)] rounded-full">Total {totalRoles} Role</span>
          </div>

          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                <div className="flex justify-between items-center mb-3">
                  <input 
                    type="text"
                    value={role.title}
                    onChange={(e) => setRoles(roles.map(r => r.id === role.id ? { ...r, title: e.target.value } : r))}
                    className="text-sm font-bold text-gray-900 bg-transparent border-none p-0 focus:ring-0 focus:outline-none w-1/2"
                  />
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateRoleCount(role.id, -1)}
                      className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-500 shadow-sm"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{role.count}</span>
                    <button 
                      onClick={() => updateRoleCount(role.id, 1)}
                      className="w-6 h-6 flex items-center justify-center bg-purple-50 border border-purple-100 rounded text-[oklch(0.55_0.22_280)] shadow-sm"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <textarea 
                  value={role.description}
                  onChange={(e) => updateRoleDescription(role.id, e.target.value)}
                  placeholder="Tambahkan deskripsi singkat" 
                  rows={2}
                  maxLength={100}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-[11px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-gray-400 resize-none"
                />
                <div className="text-right text-[9px] text-gray-400 mt-1">{role.description.length}/100</div>
              </div>
            ))}

            <button 
              onClick={addRole}
              className="w-full py-3 border border-dashed border-gray-300 rounded-xl text-xs font-bold text-[oklch(0.55_0.22_280)] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Tambah Peran Lain
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Buttons */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-5 bg-white border-t border-gray-100 z-50 mb-[68px]">
        <Button 
          onClick={handleSubmit}
          disabled={isLoading || !formData.name}
          className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-12 rounded-xl mb-3 shadow-md disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publikasikan Kolaborasi"}
        </Button>
        <Button variant="outline" className="w-full border-gray-200 text-[oklch(0.55_0.22_280)] font-bold h-12 rounded-xl hover:bg-gray-50">
          Simpan Draf
        </Button>
      </div>
    </div>
  );
}
