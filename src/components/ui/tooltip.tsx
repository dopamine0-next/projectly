"use client";

import * as React from "react";
import { Tooltip } from "@base-ui/react/tooltip";
import { cn } from "@/lib/utils";

// ─── Provider ────────────────────────────────────────────────────────────────
// Re-export the shared delay provider used in the root layout.
export const TooltipProvider = Tooltip.Provider;

// ─── Root ─────────────────────────────────────────────────────────────────────
export const TooltipRoot = Tooltip.Root;

// ─── Trigger ──────────────────────────────────────────────────────────────────
export const TooltipTrigger = Tooltip.Trigger;

// ─── Portal ───────────────────────────────────────────────────────────────────
export const TooltipPortal = Tooltip.Portal;

// ─── Positioner ───────────────────────────────────────────────────────────────
export const TooltipPositioner = Tooltip.Positioner;

// ─── Arrow ────────────────────────────────────────────────────────────────────
export const TooltipArrow = Tooltip.Arrow;

// ─── Popup (styled content bubble) ───────────────────────────────────────────
interface TooltipPopupProps extends React.ComponentPropsWithoutRef<typeof Tooltip.Popup> {
  className?: string;
}

export const TooltipPopup = React.forwardRef<
  React.ElementRef<typeof Tooltip.Popup>,
  TooltipPopupProps
>(({ className, ...props }, ref) => (
  <Tooltip.Popup
    ref={ref}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white",
      "shadow-md animate-in fade-in-0 zoom-in-95",
      "data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[ending-style]:zoom-out-95",
      className
    )}
    {...props}
  />
));
TooltipPopup.displayName = "TooltipPopup";

// ─── Convenience compound: <Tooltip> ─────────────────────────────────────────
// Provides a simple shadcn-style API so callers don't need to compose
// Root / Trigger / Portal / Positioner / Popup manually.
interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  /** How long to wait before showing the tooltip (ms). */
  delay?: number;
}

export function TooltipComponent({ children, content, side = "top", delay = 600 }: TooltipProps) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger delay={delay} render={<span className="inline-flex items-center" />}>
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner side={side} sideOffset={8}>
          <TooltipPopup>{content}</TooltipPopup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
