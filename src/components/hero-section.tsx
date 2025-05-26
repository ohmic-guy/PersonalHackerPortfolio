import { Link } from "wouter";
import TerminalWindow from "./terminal-window";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { Terminal, Code, Skull, Shield } from "lucide-react";

export default function HeroSection() {
  const typingText = useTypingAnimation("RED TEAMER | ETHICAL HACKER | AI/ML SPECIALIST", 80);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative scan-lines">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <TerminalWindow title="redteam_operative.exe" className="max-w-4xl mx-auto">
          <div className="font-mono text-left space-y-4">
            <div className="text-hack-red">$ whoami</div>
            <div className="ml-4">
              <h1 
                className="text-4xl md:text-6xl font-bold mb-2 glitch-text text-text-primary" 
                data-text="OMMKAR ANKIT ROUT"
              >
                OMMKAR ANKIT ROUT
              </h1>
              <div className="text-xl md:text-2xl text-hack-red min-h-[2rem]">
                {typingText}
                <span className="animate-terminal-cursor">|</span>
              </div>
            </div>
            
            <div className="text-hack-red mt-8">$ cat target_profile.txt</div>
            <div className="ml-4 text-text-secondary space-y-1">
              <p className="mb-2 flex items-center">
                <span className="text-hack-red mr-2">[+]</span>
                <Shield className="w-4 h-4 mr-2 text-terminal-green" />
                CISCO Verified Ethical Hacker
              </p>
              <p className="mb-2 flex items-center">
                <span className="text-hack-red mr-2">[+]</span>
                <Terminal className="w-4 h-4 mr-2 text-exploit-purple" />
                AI/ML Security Specialist
              </p>
              <p className="mb-2 flex items-center">
                <span className="text-hack-red mr-2">[+]</span>
                <Code className="w-4 h-4 mr-2 text-warning-orange" />
                ThingQbator Red Team Member
              </p>
              <p className="mb-2 flex items-center">
                <span className="text-hack-red mr-2">[+]</span>
                <Skull className="w-4 h-4 mr-2 text-hack-red" />
                B.Tech CSE (AI/ML) - Class of 2028
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="red-border px-6 py-3 rounded font-mono hover-hack transition-all duration-300"
              >
                <Terminal className="inline-block w-4 h-4 mr-2" />
                ./establish_connection
              </button>
              <button
                onClick={() => handleScrollToSection('#projects')}
                className="border border-dark-border px-6 py-3 rounded font-mono hover:border-hack-red transition-all duration-300"
              >
                <Skull className="inline-block w-4 h-4 mr-2" />
                ./view_exploits
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
