import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#4d7c0f" />
        </linearGradient>
      </defs>

      {/* Top part of S (Blue) */}
      <path 
        d="M 90 45 C 90 15, 30 15, 30 45 C 30 55, 40 60, 50 63" 
        stroke="url(#logoBlueGrad)" 
        strokeWidth="22" 
        strokeLinecap="round" 
        fill="none"
      />
            
      {/* Bottom Leaf part of S (Green) */}
      <path 
        d="M 70 57 C 80 60, 90 65, 90 85 C 90 115, 30 115, 30 85" 
        stroke="url(#logoGreenGrad)" 
        strokeWidth="22" 
        strokeLinecap="round" 
        fill="none"
      />

      {/* Pill in the middle */}
      <g transform="translate(60, 60) rotate(-35) translate(-60, -60)">
        <rect x="35" y="50" width="50" height="22" rx="11" fill="url(#logoBlueGrad)" />
        <path d="M 60 50 h 14 a 11 11 0 0 1 11 11 v 0 a 11 11 0 0 1 -11 11 h -14 z" fill="#f8fafc" />
      </g>
    </svg>
  );
}
