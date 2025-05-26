import { useState, useRef, useEffect } from "react";
import TerminalWindow from "./terminal-window";
import { useTerminal } from "@/hooks/use-terminal";

export default function TerminalSection() {
  const { output, executeCommand } = useTerminal();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="interactive_terminal.sh">
          <div className="font-mono">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-cyber-cyan font-sans">Interactive Terminal</h2>
              <p className="text-text-secondary mt-2">Try commands: help, about, skills, projects, contact</p>
            </div>
            
            <div 
              ref={outputRef}
              className="bg-dark-bg rounded p-4 h-64 overflow-y-auto cursor-text"
              onClick={handleTerminalClick}
            >
              {output.map((line, index) => (
                <div key={index} className={line.type === 'command' ? 'text-cyber-cyan' : line.type === 'error' ? 'text-red-400' : 'text-text-secondary'}>
                  {line.text}
                </div>
              ))}
              <div className="mt-2">
                <span className="text-cyber-cyan">guest@ommkar:~$ </span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-4 flex items-center">
              <span className="text-cyber-cyan mr-2">guest@ommkar:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-matrix"
                placeholder="Enter command..."
                autoComplete="off"
              />
            </form>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
