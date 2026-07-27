import * as React from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cn } from "@/lib/utils";

// ─── Root ─────────────────────────────────────────────────────────────────────
// Wraps ProgressRoot and accepts a `value` prop (0-100).
interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof BaseProgress.Root> {
  className?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, ...props }, ref) => (
    <BaseProgress.Root
      ref={ref}
      className={cn("relative flex w-full items-center gap-2", className)}
      {...props}
    />
  )
);
Progress.displayName = "Progress";

// ─── Track ────────────────────────────────────────────────────────────────────
interface ProgressTrackProps
  extends React.ComponentPropsWithoutRef<typeof BaseProgress.Track> {
  className?: string;
}

const ProgressTrack = React.forwardRef<HTMLDivElement, ProgressTrackProps>(
  ({ className, ...props }, ref) => (
    <BaseProgress.Track
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-zinc-100", className)}
      {...props}
    />
  )
);
ProgressTrack.displayName = "ProgressTrack";

// ─── Indicator ────────────────────────────────────────────────────────────────
interface ProgressIndicatorProps
  extends React.ComponentPropsWithoutRef<typeof BaseProgress.Indicator> {
  className?: string;
}

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ className, ...props }, ref) => (
    <BaseProgress.Indicator
      ref={ref}
      className={cn(
        "h-full w-[var(--progress-value)] rounded-full bg-[oklch(0.55_0.22_280)] transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
ProgressIndicator.displayName = "ProgressIndicator";

export { Progress, ProgressTrack, ProgressIndicator };
