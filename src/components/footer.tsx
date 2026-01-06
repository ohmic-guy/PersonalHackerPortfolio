import TerminalWindow from "./terminal-window";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t-2 border-neon-cyan">
      <div className="container mx-auto px-6">
        <TerminalWindow title="◈ GAME_OVER.exe ◈" className="p-6">
          <div className="font-mono text-center">
            <div className="text-neon-cyan mb-3 flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              {'>'} SESSION COMPLETE
              <Sparkles className="w-4 h-4 ml-2" />
            </div>
            <div className="text-text-secondary mb-4 text-lg">
              © 2025 <span className="text-neon-magenta font-bold">Ommkar Ankit Rout</span>
            </div>
            <div className="text-neon-yellow mb-4">
              ▲ ALL SYSTEMS OPERATIONAL ▲
            </div>
            <div className="text-neon-cyan text-sm">
              Crafted with <Heart className="inline-block w-4 h-4 text-neon-pink mx-1 pulse-glow" /> using retro gaming aesthetics
            </div>
            <div className="mt-4 text-neon-green text-xs">
              ◆ PRESS START TO CONTINUE ◆
            </div>
          </div>
        </TerminalWindow>
      </div>
    </footer>
  );
}
