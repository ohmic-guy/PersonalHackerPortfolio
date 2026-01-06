import TerminalWindow from "./terminal-window";
import { UserCheck, TrendingUp, Shield, Brain, Target, Zap, Award, Gamepad2, Star } from "lucide-react";

export default function AboutSection() {
  const playerStats = [
    { 
      label: "Cybersecurity", 
      value: 92, 
      icon: Target, 
      rank: "S-RANK",
      color: "neon-cyan"
    },
    { 
      label: "AI/ML Development", 
      value: 88, 
      icon: Brain, 
      rank: "A-RANK",
      color: "neon-magenta"
    },
    { 
      label: "Full Stack Dev", 
      value: 85, 
      icon: Shield, 
      rank: "A-RANK",
      color: "arcade-purple"
    },
    { 
      label: "Game Testing", 
      value: 90, 
      icon: Gamepad2, 
      rank: "S-RANK",
      color: "neon-yellow"
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="◆ PLAYER_PROFILE.sys ◆" className="animate-slide-up">
          <div className="font-mono">
            <div className="text-neon-magenta mb-6 text-center">
              {'>'} LOADING PLAYER DATA...
              <div className="text-neon-cyan text-sm mt-2">
                ▼ PROFILE ANALYSIS COMPLETE ▼
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="arcade-glow text-neon-cyan">PLAYER</span>{" "}
              <span className="arcade-glow text-neon-magenta">PROFILE</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 ml-4">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="retro-card p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-neon-cyan flex items-center">
                    <UserCheck className="inline-block w-6 h-6 mr-2" />
                    CHARACTER BIO
                  </h3>
                  <div className="space-y-4 text-text-secondary font-sans text-base">
                    <p>
                      <span className="text-neon-yellow">▸</span> B.Tech CSE (AI/ML) student passionate about the intersection of artificial intelligence and cybersecurity. Expert in building intelligent systems and securing them against evolving threats.
                    </p>
                    
                    <div className="pixel-border bg-darker-surface p-4 rounded">
                      <h4 className="text-neon-magenta font-mono mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 pulse-glow" />
                        [ACTIVE QUESTS]
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-neon-green mr-2">✓</span>
                          <span>Ethical Hacking & Penetration Testing</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-neon-cyan mr-2">✓</span>
                          <span>Deep Learning & Neural Networks</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-neon-yellow mr-2">◆</span>
                          <span>Cryptography & Network Security</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-neon-magenta mr-2">◆</span>
                          <span>Computer Vision & NLP Development</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p>
                      <span className="text-neon-cyan">▸</span> Beyond coding, I'm an avid photographer capturing the world through my lens 📸 and a game alpha-tester helping shape the future of gaming experiences 🎮
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats Panel */}
              <div>
                <div className="retro-card p-6">
                  <h3 className="text-xl font-bold mb-4 text-neon-yellow flex items-center">
                    <Award className="inline-block w-5 h-5 mr-2" />
                    QUICK STATS
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-3 pixel-border bg-darker-surface">
                      <div className="text-3xl font-bold text-neon-cyan pulse-glow">2028</div>
                      <div className="text-xs text-text-secondary">Graduation Year</div>
                    </div>
                    <div className="text-center p-3 pixel-border bg-darker-surface">
                      <div className="text-3xl font-bold text-neon-magenta pulse-glow">4+</div>
                      <div className="text-xs text-text-secondary">Certifications</div>
                    </div>
                    <div className="text-center p-3 pixel-border bg-darker-surface">
                      <div className="text-3xl font-bold text-neon-yellow pulse-glow">50+</div>
                      <div className="text-xs text-text-secondary">Projects Built</div>
                    </div>
                    <div className="text-center p-3 pixel-border bg-darker-surface">
                      <div className="text-3xl font-bold text-neon-green pulse-glow">∞</div>
                      <div className="text-xs text-text-secondary">Lines of Code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Player Stats */}
            <div className="mt-8 ml-4">
              <h3 className="text-2xl font-bold mb-6 text-center text-neon-magenta">
                <TrendingUp className="inline-block w-6 h-6 mr-2" />
                ATTRIBUTE LEVELS
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {playerStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="retro-card p-5 hover-matrix">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-${stat.color} flex items-center font-bold text-lg`}>
                          <Icon className="w-5 h-5 mr-2" />
                          {stat.label}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded font-bold pixel-border text-${stat.color}`}>
                          {stat.rank}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-dark-bg rounded-full h-4 border-2 border-neon-cyan overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-1000 relative`}
                              style={{ width: `${stat.value}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                            </div>
                          </div>
                          <span className={`text-${stat.color} font-mono text-lg font-bold min-w-[3rem]`}>
                            {stat.value}%
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-xs font-mono text-neon-green">
                            {"█".repeat(Math.floor(stat.value / 10))}{"░".repeat(10 - Math.floor(stat.value / 10))}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
