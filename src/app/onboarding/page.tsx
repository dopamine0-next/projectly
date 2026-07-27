"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Check, Search, Trophy, Briefcase, Rocket, BookOpen, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("Alex");
  const totalSteps = 5; // Step 6 is success state without progress bar

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col h-[100dvh] bg-white relative">
      {/* Top Bar with Progress (Hidden on Success step) */}
      {step < 6 && (
        <div className="px-5 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
          <button 
            onClick={prevStep}
            className={cn("w-8 h-8 flex items-center justify-center -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors", step === 1 && "invisible")}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex-1 px-8 flex justify-center">
            <div className="flex gap-1.5 w-full max-w-[120px]">
              {[1, 2, 3, 4, 5].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-300",
                    s <= step ? "bg-[oklch(0.55_0.22_280)]" : "bg-gray-100"
                  )}
                />
              ))}
            </div>
          </div>
          
          <div className="w-8" /> {/* Spacer */}
        </div>
      )}

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 flex flex-col">
        {step === 1 && <StepWelcome onNext={nextStep} userName={userName} />}
        {step === 2 && <StepSelectField onNext={nextStep} />}
        {step === 3 && <StepMainGoal onNext={nextStep} />}
        {step === 4 && <StepCurrentSkills onNext={nextStep} />}
        {step === 5 && <StepAvailability onNext={nextStep} />}
        {step === 6 && <StepSuccess userName={userName} />}
      </div>
    </div>
  );
}

function StepWelcome({ onNext, userName }: { onNext: () => void, userName: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10">
      <div className="w-full h-48 bg-purple-50 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-purple-100">
         {/* Placeholder for illustration */}
         <div className="w-3/4 h-3/4 rounded-xl bg-purple-200/50 flex items-center justify-center">
            <span className="text-purple-400 font-bold text-sm">Team Illustration</span>
         </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Welcome to Projectly, {userName}!</h2>
      <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-[280px]">
        Let's set up your profile to personalize your project and teammate recommendations.
      </p>
      <Button className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto" onClick={onNext}>
        Let's Get Started
      </Button>
    </div>
  );
}

function StepSelectField({ onNext }: { onNext: () => void }) {
  const fields = [
    { id: "uiux", label: "UI/UX", icon: "🎨" },
    { id: "web", label: "Web Development", icon: "💻" },
    { id: "mobile", label: "Mobile Development", icon: "📱" },
    { id: "ml", label: "Machine Learning", icon: "🤖" },
    { id: "data", label: "Data Science", icon: "📊" },
    { id: "security", label: "Cyber Security", icon: "🛡️" },
  ];
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (selected.includes(id)) setSelected(selected.filter(i => i !== id));
    else setSelected([...selected, id]);
  };

  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">What's your field?</h2>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        Select all that apply to help us tailor your experience.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {fields.map((f) => {
          const isSelected = selected.includes(f.id);
          return (
            <button
              key={f.id}
              onClick={() => toggle(f.id)}
              className={cn(
                "p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border transition-all h-28",
                isSelected 
                  ? "border-[oklch(0.55_0.22_280)] bg-purple-50 shadow-sm shadow-primary/10" 
                  : "border-gray-100 bg-white shadow-sm"
              )}
            >
              <div className={cn("text-2xl", isSelected ? "" : "opacity-60")}>{f.icon}</div>
              <span className={cn("text-xs font-bold leading-tight", isSelected ? "text-[oklch(0.55_0.22_280)]" : "text-gray-600")}>
                {f.label}
              </span>
            </button>
          );
        })}
      </div>

      <Button 
        className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto" 
        onClick={onNext}
        disabled={selected.length === 0}
      >
        Continue
      </Button>
    </div>
  );
}

function StepMainGoal({ onNext }: { onNext: () => void }) {
  const goals = [
    { id: "compete", label: "Compete in competitions", icon: Trophy },
    { id: "portfolio", label: "Build my portfolio", icon: Briefcase },
    { id: "startup", label: "Build a startup", icon: Rocket },
    { id: "learn", label: "Just learning & exploring", icon: BookOpen },
  ];
  const [selected, setSelected] = useState<string>("portfolio");

  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight max-w-[250px]">What's your main goal on Projectly?</h2>

      <div className="space-y-3 mb-8">
        {goals.map((g) => {
          const isSelected = selected === g.id;
          const Icon = g.icon;
          return (
            <button
              key={g.id}
              onClick={() => setSelected(g.id)}
              className={cn(
                "w-full p-4 rounded-xl flex items-center gap-4 border transition-all text-left",
                isSelected 
                  ? "border-[oklch(0.55_0.22_280)] bg-white shadow-md shadow-primary/5" 
                  : "border-gray-100 bg-gray-50/50"
              )}
            >
              <Icon className={cn("w-5 h-5", isSelected ? "text-[oklch(0.55_0.22_280)]" : "text-gray-400")} />
              <span className={cn("text-sm font-bold flex-1", isSelected ? "text-gray-900" : "text-gray-600")}>
                {g.label}
              </span>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                isSelected ? "border-[oklch(0.55_0.22_280)]" : "border-gray-300"
              )}>
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.55_0.22_280)]" />}
              </div>
            </button>
          );
        })}
      </div>

      <Button 
        className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto" 
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  );
}

function StepCurrentSkills({ onNext }: { onNext: () => void }) {
  const [skills, setSkills] = useState(["JavaScript", "UX Design"]);
  const suggestions = ["React", "Figma", "Python", "SQL", "Data Analysis", "Node.js"];

  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">What skills do you already have?</h2>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-[280px]">
        Select a few skills to help us match you with the right projects and teammates.
      </p>

      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search skills (e.g. React, Python)" 
          className="w-full pl-9 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-gray-400"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Your Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <div key={s} className="bg-[oklch(0.55_0.22_280)] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm shadow-primary/20">
              {s}
              <button className="text-white/80 hover:text-white">&times;</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Suggested for you</h3>
        <div className="flex flex-wrap gap-2">
          {suggestions.map(s => (
            <button key={s} className="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
              <PlusIcon className="w-3 h-3 text-gray-400" />
              {s}
            </button>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto" 
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  );
}

function PlusIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5v14M5 12h14"/></svg>;
}

function StepAvailability({ onNext }: { onNext: () => void }) {
  const options = [
    { id: "light", label: "Light", desc: "1-3 hrs/week", icon: "☕" },
    { id: "moderate", label: "Moderate", desc: "4-8 hrs/week", icon: "🔥" },
    { id: "intensive", label: "Intensive", desc: "9+ hrs/week", icon: "⚡" },
  ];
  const [selected, setSelected] = useState<string>("moderate");

  return (
    <div className="flex flex-col h-full py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">How much time can you commit?</h2>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed">
        Set expectations for project collaboration.
      </p>

      <div className="space-y-4 mb-8">
        {options.map((o) => {
          const isSelected = selected === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              className={cn(
                "w-full p-4 rounded-2xl flex items-center gap-4 border transition-all text-left",
                isSelected 
                  ? "border-[oklch(0.55_0.22_280)] bg-purple-50 shadow-sm shadow-primary/10" 
                  : "border-gray-100 bg-white"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center text-lg",
                isSelected ? "bg-white border border-primary/20 shadow-sm" : "bg-gray-50 border border-gray-100"
              )}>
                {o.icon}
              </div>
              <div className="flex-1">
                <div className={cn("text-sm font-bold mb-0.5", isSelected ? "text-gray-900" : "text-gray-700")}>{o.label}</div>
                <div className="text-xs text-gray-500">{o.desc}</div>
              </div>
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                isSelected ? "border-[oklch(0.55_0.22_280)]" : "border-gray-300"
              )}>
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.55_0.22_280)]" />}
              </div>
            </button>
          );
        })}
      </div>

      <Button 
        className="w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto" 
        onClick={onNext}
      >
        Finish Setup
      </Button>
    </div>
  );
}

function StepSuccess({ userName }: { userName: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10">
      <div className="w-20 h-20 bg-[oklch(0.55_0.22_280)] rounded-full mb-8 flex items-center justify-center shadow-lg shadow-primary/30 mt-10">
         <Check className="w-10 h-10 text-white" strokeWidth={3} />
      </div>
      
      <h2 className="text-3xl font-extrabold text-[oklch(0.55_0.22_280)] mb-4 tracking-tight">You're all set, {userName}!</h2>
      
      <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-[280px]">
        Your recommendations are ready. We've found <span className="font-bold text-[oklch(0.55_0.22_280)]">12 projects</span> matching your profile.
      </p>

      <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 text-left mb-10">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Your Focus Areas</h3>
        <div className="flex flex-wrap gap-2">
          {["Frontend Dev", "UX Design", "Community", "Part-time"].map(s => (
            <div key={s} className="bg-white text-[oklch(0.55_0.22_280)] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm border border-gray-100">
              {s}
            </div>
          ))}
        </div>
      </div>

      <Link 
        href="/"
        className="flex items-center justify-center w-full bg-[oklch(0.55_0.22_280)] hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-md text-base mt-auto"
      >
        Go to Home
      </Link>
    </div>
  );
}
