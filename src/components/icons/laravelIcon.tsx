import React from "react";

type Props = {
  className?: string;
};

export function LaravelIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      xmlns="https://logospng.org/download/laravel/logo-laravel-icon-1024.png"
      role="img"
      aria-label="Laravel"
    >
      <path d="M128 0L0 64v128l128 64 128-64V64z" />
    </svg>
  );
}
