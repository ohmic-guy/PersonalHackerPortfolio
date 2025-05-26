import TerminalWindow from "./terminal-window";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-dark-border">
      <div className="container mx-auto px-6">
        <TerminalWindow title="footer.sh" className="p-6">
          <div className="font-mono text-center">
            <div className="text-matrix mb-2">$ echo "Connection terminated successfully"</div>
            <div className="text-text-secondary mb-4">
              © 2025 Ohmic Guy. All systems secured.
            </div>
            <div className="text-cyber-cyan">
              Designed with <Heart className="inline-block w-4 h-4 text-neon-pink mx-1" /> using terminal aesthetics
            </div>
          </div>
        </TerminalWindow>
      </div>
    </footer>
  );
}
