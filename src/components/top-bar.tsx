"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TopBarProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
  showGreeting?: boolean;
  className?: string;
}

export function TopBar({
  title,
  showBack = false,
  showNotification = false,
  showGreeting = false,
  className,
}: TopBarProps) {
  const router = useRouter();
  const [hasNotification, setHasNotification] = useState(true);
  const [userName, setUserName] = useState("Pengguna");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className={cn("px-5 py-4 flex items-center justify-between bg-white z-40", className)}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        {showGreeting ? (
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <span className="text-primary font-bold uppercase">{userName.charAt(0)}</span>
            </div>
            <div>
              <div className="font-bold text-[oklch(0.55_0.22_280)] text-base leading-tight">Projectly</div>
              <div className="text-xs text-gray-500">Selamat pagi, {userName}</div>
            </div>
          </div>
        ) : (
          title && (
            <h1 className="font-semibold text-lg text-gray-900 tracking-tight">
              {title}
            </h1>
          )
        )}
      </div>

      {showNotification && (
        <button 
          onClick={() => setHasNotification(false)}
          className="w-9 h-9 flex items-center justify-center text-[oklch(0.55_0.22_280)] hover:bg-primary/5 rounded-full transition-colors relative"
        >
          <Bell className="w-5 h-5" />
          {hasNotification && <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>}
        </button>
      )}
    </div>
  );
}
