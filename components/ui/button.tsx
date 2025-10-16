import * as React from "react";
import { cn } from "./utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary";
};

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition rounded-md focus:outline-none focus:ring disabled:opacity-50";
  const variants = {
    default: "bg-slate-900 text-white hover:opacity-95",
    outline: "border border-slate-300 bg-white hover:bg-slate-50",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
  } as const;
  return <button className={cn(base, variants[variant] || variants.default, className)} {...props} />;
}
