import * as React from "react";
import { cn } from "./utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => {
    return <textarea ref={ref} className={cn("w-full rounded-xl border border-slate-200 px-3 py-2", className)} {...props} />;
  }
);
Textarea.displayName = "Textarea";
