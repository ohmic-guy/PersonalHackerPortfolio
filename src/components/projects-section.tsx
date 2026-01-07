import TerminalWindow from "./terminal-window";
import { Shield, Brain, Zap, Github, ExternalLink, Target, Bug, Lock, Sparkles, Gamepad2 } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cryptex Terminal",
      description: "Real-time encryption fortress with military-grade cryptographic algorithms for secure communication.",
      tech: ["React", "Flask", "Fernet"],
      icon: Lock,
      level: "LEVEL 42",
      status: "ACTIVE",
      xp: "2500 XP",
      color: "neon-cyan",
    },
    {
      title: "RageWall Defense",
      description: "Intelligent DDoS protection system with AI-powered traffic analysis and automated threat response.",
      tech: ["React", "Flask", "Scikit-Learn"],
      icon: Shield,
      level: "LEVEL 38",
      status: "ONLINE",
      xp: "2200 XP",
      color: "neon-magenta",
    },
    {
      title: "Neural Threat Hunter",
      description: "Machine learning model trained to detect zero-day exploits and APTs in network traffic.",
      tech: ["PyTorch", "TensorFlow", "Python"],
      icon: Brain,
      level: "LEVEL 45",
      status: "ELITE",
      xp: "3000 XP",
      color: "arcade-purple",
    },
    {
      title: "Social Engineering Bot",
      description: "AI-powered OSINT gathering and social engineering automation for authorized penetration testing.",
      tech: ["Node.js", "NLP", "React"],
      icon: Bug,
      level: "LEVEL 35",
      status: "STEALTH",
      xp: "1800 XP",
      color: "neon-yellow",
    },
    {
      title: "Portfolio Matrix",
      description: "Modern portfolio website with Matrix game aesthetics featuring smooth animations and retro vibes.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      icon: Sparkles,
      level: "LEVEL 40",
      status: "LIVE",
      xp: "2000 XP",
      color: "neon-green",
    },
    {
      title: "Quantum KeyBreaker",
      description: "Advanced cryptographic analysis toolkit with quantum-resistant algorithm testing capabilities.",
      tech: ["C++", "Python", "OpenSSL"],
      icon: Target,
      level: "LEVEL 50",
      status: "LEGENDARY",
      xp: "5000 XP",
      color: "electric-orange",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LEGENDARY": return "bg-electric-orange text-dark-bg";
      case "ELITE": return "bg-arcade-purple text-white";
      case "ACTIVE": return "bg-neon-cyan text-dark-bg";
      case "ONLINE": return "bg-neon-magenta text-white";
      case "STEALTH": return "bg-neon-yellow text-dark-bg";
      default: return "bg-neon-green text-dark-bg";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="◢ GAME_LEVELS.exe ◣">
          <div className="font-mono">
            <div className="text-neon-cyan mb-6 text-center">
              {'>'} INITIALIZING LEVEL SELECT...
              <div className="text-neon-magenta text-sm mt-2">
                ▼ LOADING COMPLETED MISSIONS ▼
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-center">
              <Gamepad2 className="inline-block w-10 h-10 mr-3 text-neon-cyan" />
              <span className="arcade-glow text-neon-magenta">COMPLETED</span>{" "}
              <span className="arcade-glow text-neon-cyan">LEVELS</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div 
                    key={index} 
                    className="retro-card hover-matrix transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* XP Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="pixel-border bg-dark-bg px-2 py-1 text-xs text-neon-yellow font-bold">
                        {project.xp}
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="pulse-glow p-3 bg-darker-surface rounded-lg">
                          <Icon className={`w-8 h-8 text-${project.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-neon-cyan mb-1">{project.level}</div>
                          <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className="mb-4">
                        <span className={`${getStatusColor(project.status)} px-3 py-1 text-xs font-bold rounded inline-block`}>
                          ◆ {project.status} ◆
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-text-secondary text-sm mb-4 font-sans min-h-[3rem]">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-dark-bg rounded text-xs border border-neon-cyan text-neon-cyan"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-3 border-t border-dark-border">
                        <button className="text-neon-cyan hover:text-neon-magenta transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                        <button className="text-neon-cyan hover:text-neon-magenta transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Stats Footer */}
            <div className="mt-10 text-center retro-card p-6">
              <div className="text-neon-magenta mb-4">
                ▲ MISSION STATISTICS ▲
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-neon-cyan">{projects.length}</div>
                  <div className="text-xs text-text-secondary">Levels Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-magenta">15K+</div>
                  <div className="text-xs text-text-secondary">Total XP</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-yellow">100%</div>
                  <div className="text-xs text-text-secondary">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://github.com/ohmic-guy"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button px-8 py-3 rounded font-bold text-neon-cyan hover:text-neon-magenta transition-all duration-300 inline-flex items-center"
              >
                <Zap className="inline-block w-5 h-5 mr-2" />
                EXPLORE ALL LEVELS
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
