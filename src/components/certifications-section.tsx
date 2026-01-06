import TerminalWindow from "./terminal-window";
import { Award, Shield, Code, Lock, Trophy, Star, Zap } from "lucide-react";
import { FaPython } from "react-icons/fa";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "CISCO Ethical Hacker",
      issuer: "CISCO Networking Academy",
      date: "2024",
      level: "LEGENDARY",
      description: "Advanced ethical hacking and penetration testing certification",
      icon: Shield,
      color: "neon-cyan",
      badge: "⚡ VERIFIED",
    },
    {
      title: "Diploma in Cyber Security",
      issuer: "Professional Certification",
      date: "2024",
      level: "EPIC",
      description: "Comprehensive cybersecurity defense and offense training",
      icon: Lock,
      color: "neon-magenta",
      badge: "🛡️ ELITE",
    },
    {
      title: "Python Programming",
      issuer: "HackerRank",
      date: "2023",
      level: "RARE",
      description: "Advanced Python programming and algorithm mastery",
      icon: FaPython,
      color: "neon-yellow",
      badge: "🐍 MASTER",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "CISCO",
      date: "2023",
      level: "RARE",
      description: "Foundation in cybersecurity principles and practices",
      icon: Code,
      color: "neon-green",
      badge: "🔰 COMPLETE",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "LEGENDARY": return "text-neon-cyan";
      case "EPIC": return "text-neon-magenta";
      case "RARE": return "text-neon-yellow";
      default: return "text-neon-green";
    }
  };

  const getLevelBg = (level: string) => {
    switch (level) {
      case "LEGENDARY": return "bg-neon-cyan";
      case "EPIC": return "bg-neon-magenta";
      case "RARE": return "bg-neon-yellow";
      default: return "bg-neon-green";
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="◈ ACHIEVEMENTS_UNLOCKED.json ◈">
          <div className="font-mono">
            <div className="text-neon-magenta mb-6 text-center">
              {'>'} LOADING ACHIEVEMENT DATA...
              <div className="text-neon-cyan text-sm mt-2">
                ▼ DISPLAYING ALL UNLOCKED CERTIFICATIONS ▼
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="arcade-glow text-neon-cyan">ACHIEVEMENT</span>{" "}
              <span className="arcade-glow text-neon-magenta">VAULT</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 ml-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={index} 
                    className="retro-card p-6 hover-matrix transition-all duration-300 group"
                  >
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="pulse-glow p-3 bg-darker-surface rounded-lg">
                          <Icon className={`w-8 h-8 text-${cert.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                            {cert.title}
                          </h3>
                          <div className="text-xs text-neon-green">{cert.issuer}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neon-yellow">{cert.badge}</div>
                      </div>
                    </div>
                    
                    {/* Level Badge */}
                    <div className="mb-3">
                      <span className={`${getLevelColor(cert.level)} font-bold text-sm px-3 py-1 rounded border-2 border-current inline-block`}>
                        ◆ {cert.level} ◆
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4 font-sans">
                      {cert.description}
                    </p>
                    
                    {/* Date and Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-neon-cyan">ACQUIRED:</span>
                        <span className="text-neon-magenta">{cert.date}</span>
                      </div>
                      <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                        <div className={`h-full ${getLevelBg(cert.level)} animate-pulse`} style={{ width: '100%' }}></div>
                      </div>
                      <div className="text-right text-neon-green text-xs font-bold">
                        ✓ MASTERY COMPLETE
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Achievement Stats */}
            <div className="mt-10 retro-card p-6">
              <div className="text-center">
                <div className="text-neon-cyan mb-4">
                  ▲ CERTIFICATION STATISTICS ▲
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-cyan">4</div>
                    <div className="text-xs text-text-secondary">Total Certs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-magenta">1</div>
                    <div className="text-xs text-text-secondary">Legendary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-yellow">100%</div>
                    <div className="text-xs text-text-secondary">Completion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-green">∞</div>
                    <div className="text-xs text-text-secondary">XP Gained</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className="neon-button px-6 py-3 rounded font-bold text-neon-cyan hover:text-neon-magenta transition-all duration-300 inline-flex items-center">
                <Trophy className="inline-block w-5 h-5 mr-2" />
                VIEW ALL ACHIEVEMENTS
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
