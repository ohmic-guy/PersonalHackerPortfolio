import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window rounded-lg p-8 ${className}`}>
      <div className="flex items-center mb-6">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 font-mono text-sm text-text-secondary">{title}</span>
      </div>
      {children}
    </div>
  );
}
