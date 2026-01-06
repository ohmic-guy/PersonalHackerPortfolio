import TerminalWindow from "./terminal-window";
import { Code, Brain, Shield, Zap, Star } from "lucide-react";
import { FaPython } from "react-icons/fa";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", level: 90, color: "neon-cyan" },
    { name: "JavaScript", level: 80, color: "neon-yellow" },
    { name: "C++", level: 70, color: "neon-magenta" },
    { name: "TypeScript", level: 85, color: "arcade-purple" },
  ];

  const frameworks = [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "OpenCV", icon: "👁️" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
  ];
  
  const securityTools = [
    { name: "Kali Linux", icon: "🐉" },
    { name: "Metasploit", icon: "💣" },
    { name: "Wireshark", icon: "🦈" },
    { name: "Nmap", icon: "🎯" },
    { name: "Burp Suite", icon: "🔓" },
    { name: "OWASP ZAP", icon: "⚡" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="◆ SKILL_TREE.sys ◆">
          <div className="font-mono">
            <div className="text-neon-magenta mb-6 text-center">
              {'>'} ANALYZING SKILL LEVELS...
              <div className="text-neon-cyan text-sm mt-2">
                ▼ CALCULATING MASTERY POINTS ▼
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="arcade-glow text-neon-cyan">SKILL</span>{" "}
              <span className="arcade-glow text-neon-magenta">MATRIX</span>
            </h2>
            
            <div className="ml-4 space-y-8">
              {/* Programming Languages */}
              <div className="retro-card p-6">
                <h3 className="text-neon-cyan font-bold mb-4 text-xl flex items-center">
                  <Code className="inline-block w-6 h-6 mr-2" />
                  CODING POWER LEVELS
                </h3>
                <div className="space-y-4">
                  {programmingSkills.map((skill, index) => {
                    const getLevelColor = () => {
                      switch (skill.color) {
                        case 'neon-cyan': return 'text-neon-cyan';
                        case 'neon-yellow': return 'text-neon-yellow';
                        case 'neon-magenta': return 'text-neon-magenta';
                        case 'arcade-purple': return 'text-arcade-purple';
                        default: return 'text-neon-cyan';
                      }
                    };
                    
                    return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">{skill.name}</span>
                        <span className={`${getLevelColor()} font-bold`}>
                          LVL {skill.level}
                        </span>
                      </div>
                      <div className="relative w-full h-6 bg-dark-bg rounded-full overflow-hidden border-2 border-neon-cyan">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-white drop-shadow-lg">
                            {"█".repeat(Math.floor(skill.level / 10))}
                            {"░".repeat(10 - Math.floor(skill.level / 10))}
                          </span>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
              
              {/* AI/ML Frameworks */}
              <div className="retro-card p-6">
                <h3 className="text-neon-magenta font-bold mb-4 text-xl flex items-center">
                  <Brain className="inline-block w-6 h-6 mr-2" />
                  AI/ML ARSENAL
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {frameworks.map((framework, index) => (
                    <div 
                      key={index}
                      className="pixel-border bg-darker-surface p-3 text-center hover-matrix transition-all cursor-pointer group"
                    >
                      <div className="text-2xl mb-1">{framework.icon}</div>
                      <div className="text-sm text-neon-cyan group-hover:text-neon-magenta transition-colors">
                        {framework.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Security Tools */}
              <div className="retro-card p-6">
                <h3 className="text-neon-yellow font-bold mb-4 text-xl flex items-center">
                  <Shield className="inline-block w-6 h-6 mr-2" />
                  CYBER WEAPONS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {securityTools.map((tool, index) => (
                    <div 
                      key={index}
                      className="pixel-border bg-darker-surface p-3 text-center hover-matrix transition-all cursor-pointer group"
                    >
                      <div className="text-2xl mb-1">{tool.icon}</div>
                      <div className="text-sm text-neon-yellow group-hover:text-neon-cyan transition-colors">
                        {tool.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Skill Stats */}
              <div className="retro-card p-6">
                <div className="text-center">
                  <div className="text-neon-green mb-4">
                    ▲ POWER LEVEL STATISTICS ▲
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-cyan pulse-glow">15+</div>
                      <div className="text-xs text-text-secondary">Skills Mastered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-magenta pulse-glow">90%</div>
                      <div className="text-xs text-text-secondary">Avg Mastery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-yellow pulse-glow">50K+</div>
                      <div className="text-xs text-text-secondary">XP Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-green pulse-glow">
                        <Star className="inline-block w-8 h-8" />
                      </div>
                      <div className="text-xs text-text-secondary">Elite Rank</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="neon-button px-8 py-3 rounded font-bold text-neon-cyan hover:text-neon-magenta transition-all duration-300 inline-flex items-center">
                <Zap className="inline-block w-5 h-5 mr-2" />
                LEVEL UP
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
