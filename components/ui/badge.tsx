import * as React from "react";
import { cn } from "./utils";

export function Badge({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900 text-white", className)} {...props} />;
}
