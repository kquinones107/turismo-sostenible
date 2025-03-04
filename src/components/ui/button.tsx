import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className = "", onClick = () => {} }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-black font-medium hover:shadow-lg transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
