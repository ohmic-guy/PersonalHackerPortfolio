import { Link } from "wouter";
import TerminalWindow from "./terminal-window";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { Terminal, Code } from "lucide-react";

export default function HeroSection() {
  const typingText = useTypingAnimation("Verified Ethical Hacker & AI/ML Developer", 100);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative scan-lines">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <TerminalWindow title="terminal_portfolio.exe" className="max-w-4xl mx-auto">
          <div className="font-mono text-left space-y-4">
            <div className="text-matrix">$ whoami</div>
            <div className="ml-4">
              <h1 
                className="text-4xl md:text-6xl font-bold mb-2 glitch-text" 
                data-text="OMMKAR ANKIT ROUT"
              >
                OMMKAR ANKIT ROUT
              </h1>
              <div className="text-xl md:text-2xl text-cyber-cyan min-h-[2rem]">
                {typingText}
                <span className="animate-terminal-cursor">|</span>
              </div>
            </div>
            
            <div className="text-matrix mt-8">$ cat profile.txt</div>
            <div className="ml-4 text-text-secondary">
              <p className="mb-2">{'>'} CISCO Verified Ethical Hacker</p>
              <p className="mb-2">{'>'} AI/ML Enthusiast & Developer</p>
              <p className="mb-2">{'>'} ThingQbator Student Body Member</p>
              <p className="mb-2">{'>'} B.Tech CSE (AI/ML) - 2028</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="neon-border px-6 py-3 rounded font-mono hover-matrix transition-all duration-300"
              >
                <Terminal className="inline-block w-4 h-4 mr-2" />
                ./connect
              </button>
              <button
                onClick={() => handleScrollToSection('#projects')}
                className="border border-dark-border px-6 py-3 rounded font-mono hover:border-matrix transition-all duration-300"
              >
                <Code className="inline-block w-4 h-4 mr-2" />
                ./view_projects
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
