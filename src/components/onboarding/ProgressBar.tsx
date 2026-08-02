import clsx from "clsx";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number; // 1-based
}

export function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <div className="flex w-full gap-1.5">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={clsx(
            "h-1.5 flex-1 rounded-full transition-colors",
            index < currentStep ? "bg-brand-600" : "bg-gray-100"
          )}
        />
      ))}
    </div>
  );
}
