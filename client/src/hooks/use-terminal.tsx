import { useState, useCallback } from "react";

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'error';
}

export function useTerminal() {
  const [output, setOutput] = useState<TerminalLine[]>([
    { text: "Welcome to Ommkar's Interactive Terminal v2.0", type: 'output' },
    { text: "Type 'help' to see available commands.", type: 'output' },
  ]);

  const commands = {
    help: 'Available commands: help, about, skills, projects, contact, clear',
    about: 'I am a B.Tech CSE (AI/ML) student passionate about cybersecurity and AI.',
    skills: 'Skills: Python, React, TensorFlow, Cybersecurity, Ethical Hacking',
    projects: 'Featured projects: AI Security Scanner, Neural Network Visualizer, Crypto Portfolio Tracker',
    contact: 'Email: omkarankit2004@gmail.com | LinkedIn: linkedin.com/in/ohmicguy',
    clear: 'CLEAR_TERMINAL'
  };

  const executeCommand = useCallback((command: string) => {
    const cmd = command.toLowerCase().trim();
    
    setOutput(prev => [
      ...prev,
      { text: `guest@ommkar:~$ ${command}`, type: 'command' }
    ]);

    if (cmd === 'clear') {
      setOutput([
        { text: "Welcome to Ommkar's Interactive Terminal v2.0", type: 'output' },
        { text: "Type 'help' to see available commands.", type: 'output' },
      ]);
    } else if (commands[cmd as keyof typeof commands]) {
      setOutput(prev => [
        ...prev,
        { text: commands[cmd as keyof typeof commands], type: 'output' }
      ]);
    } else {
      setOutput(prev => [
        ...prev,
        { text: `Command not found: ${command}. Type 'help' for available commands.`, type: 'error' }
      ]);
    }
  }, []);

  return { output, executeCommand };
}
