import { BottomNav } from "@/components/layout/BottomNav";
import { Sidebar } from "@/components/layout/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      {/* md:ml-60 memberi ruang untuk sidebar fixed di desktop */}
      <div className="md:ml-60">
        {/* Mobile: kartu sempit ala app (max-w-sm) seperti sebelumnya.
            Desktop (md+): melebar penuh, dibatasi max-width yang nyaman
            dibaca dan diberi padding lebih lega. */}
        <div className="mx-auto w-full max-w-sm pb-20 md:max-w-6xl md:pb-10">
          {children}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
