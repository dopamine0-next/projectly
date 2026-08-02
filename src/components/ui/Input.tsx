import { forwardRef, type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, rightElement, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div
          className={clsx(
            "flex items-center gap-2 rounded-xl border bg-white px-3.5 py-2.5 transition-colors focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100",
            error ? "border-red-400" : "border-gray-200"
          )}
        >
          {icon && <span className="text-gray-400">{icon}</span>}
          <input
            id={inputId}
            ref={ref}
            className={clsx(
              "w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400",
              className
            )}
            {...props}
          />
          {rightElement}
        </div>
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
