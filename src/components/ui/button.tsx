import { cn } from "@/lib/utils";
import React from "react";

const variants = {
  default: "bg-zinc-700 hover:bg-zinc-600",
  secondary: "bg-zinc-800 hover:bg-zinc-700",
  outline: "border border-zinc-600 hover:bg-zinc-800",
};

export function Button({
  className,
  variant = "default",
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: "icon";
}) {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 text-sm text-gray-100 transition",
        size === "icon" && "h-10 w-10 p-0 flex items-center justify-center",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
