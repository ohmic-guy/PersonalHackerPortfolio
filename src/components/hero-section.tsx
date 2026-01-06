import { Link } from "wouter";
import TerminalWindow from "./terminal-window";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import { Gamepad2, Cpu, Zap, Trophy, Sparkles, Shield } from "lucide-react";

export default function HeroSection() {
  const typingText = useTypingAnimation("GAME DEVELOPER • CYBER WARRIOR • AI ARCHITECT", 80);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative scan-lines">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <TerminalWindow title="◢ MATRIX_GAME.exe ◣" className="max-w-5xl mx-auto pixel-border">
          <div className="font-mono text-left space-y-6">
            {/* Game Start Sequence */}
            <div className="text-neon-cyan text-center mb-4">
              <div className="text-sm">▼ SYSTEM BOOT SEQUENCE ▼</div>
              <div className="text-xs text-neon-magenta">LOADING PLAYER DATA...</div>
            </div>
            
            {/* Player Identity */}
            <div className="text-neon-magenta">{'>'} PLAYER_ID.identify()</div>
            <div className="ml-6">
              <h1 
                className="text-5xl md:text-7xl font-bold mb-3 arcade-glow" 
                data-text="OMMKAR ANKIT ROUT"
              >
                <span className="rainbow-text">OMMKAR ANKIT ROUT</span>
              </h1>
              <div className="text-xl md:text-3xl text-neon-cyan min-h-[2.5rem]">
                {typingText}
                <span className="animate-terminal-cursor text-neon-yellow">█</span>
              </div>
            </div>
            
            {/* Stats Display */}
            <div className="text-neon-magenta mt-8">{'>'} STATS.display()</div>
            <div className="ml-6 grid md:grid-cols-2 gap-3">
              <div className="retro-card p-3 flex items-center space-x-3">
                <div className="pulse-glow">
                  <Shield className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <div className="text-neon-yellow text-xs">DEFENSE LVL</div>
                  <div className="text-white">CISCO Certified Hacker</div>
                </div>
              </div>
              
              <div className="retro-card p-3 flex items-center space-x-3">
                <div className="pulse-glow">
                  <Cpu className="w-8 h-8 text-neon-magenta" />
                </div>
                <div>
                  <div className="text-neon-yellow text-xs">INTELLIGENCE</div>
                  <div className="text-white">AI/ML Specialist</div>
                </div>
              </div>
              
              <div className="retro-card p-3 flex items-center space-x-3">
                <div className="pulse-glow">
                  <Zap className="w-8 h-8 text-electric-orange" />
                </div>
                <div>
                  <div className="text-neon-yellow text-xs">POWER</div>
                  <div className="text-white">ThingQbator Member</div>
                </div>
              </div>
              
              <div className="retro-card p-3 flex items-center space-x-3">
                <div className="pulse-glow">
                  <Trophy className="w-8 h-8 text-neon-green" />
                </div>
                <div>
                  <div className="text-neon-yellow text-xs">ACHIEVEMENT</div>
                  <div className="text-white">B.Tech CSE - 2028</div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={() => handleScrollToSection('#contact')}
                className="neon-button px-8 py-4 rounded font-bold text-neon-cyan hover:text-neon-magenta transition-all duration-300 flex items-center"
              >
                <Sparkles className="inline-block w-5 h-5 mr-2" />
                START MISSION
              </button>
              <button
                onClick={() => handleScrollToSection('#projects')}
                className="pixel-border bg-darker-surface px-8 py-4 rounded font-bold text-neon-yellow hover:text-neon-cyan transition-all duration-300 flex items-center"
              >
                <Gamepad2 className="inline-block w-5 h-5 mr-2" />
                VIEW LEVELS
              </button>
            </div>
            
            {/* Game Info */}
            <div className="mt-6 text-center text-neon-green text-sm">
              <div>▲ PRESS ANY BUTTON TO CONTINUE ▲</div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
