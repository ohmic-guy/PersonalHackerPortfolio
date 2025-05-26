import TerminalWindow from "./terminal-window";
import { Shield, Brain, Skull, Github, ExternalLink, Target, Bug, Zap } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "RedStorm Scanner",
      description: "Advanced penetration testing framework with AI-powered vulnerability assessment and automated exploit generation.",
      tech: ["Python", "Metasploit", "TensorFlow"],
      icon: Target,
      status: "CLASSIFIED",
    },
    {
      title: "Neural Threat Hunter",
      description: "Machine learning model trained to detect zero-day exploits and advanced persistent threats in network traffic.",
      tech: ["PyTorch", "Wireshark", "Kali"],
      icon: Brain,
      status: "ACTIVE",
    },
    {
      title: "CryptoBreaker Suite",
      description: "Cryptographic analysis toolkit for red team operations with quantum-resistant algorithm testing capabilities.",
      tech: ["C++", "Python", "OpenSSL"],
      icon: Skull,
      status: "STEALTH",
    },
    {
      title: "Social Engineering Bot",
      description: "AI-powered OSINT gathering and social engineering automation for authorized penetration testing scenarios.",
      tech: ["React", "Node.js", "NLP"],
      icon: Bug,
      status: "OPERATIONAL",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="exploit_arsenal.py">
          <div className="font-mono">
            <div className="text-hack-red mb-6">$ python exploit_arsenal.py --show-classified</div>
            <h2 className="text-3xl font-bold mb-8 text-center text-hack-red font-sans">Red Team Arsenal</h2>
            
            <div className="grid md:grid-cols-2 gap-6 ml-4">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="bg-darker-surface rounded-lg border border-dark-border hover-hack transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-6 h-6 text-hack-red" />
                          <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                        </div>
                        <span className={`px-2 py-1 text-xs font-mono rounded ${
                          project.status === 'CLASSIFIED' ? 'bg-blood-red text-text-primary' :
                          project.status === 'ACTIVE' ? 'bg-terminal-green text-dark-bg' :
                          project.status === 'STEALTH' ? 'bg-exploit-purple text-text-primary' :
                          'bg-warning-orange text-dark-bg'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-text-secondary mb-4 font-sans">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-dark-bg rounded text-xs text-hack-red border border-hack-red"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-hack-red hover:text-text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                        <button className="text-hack-red hover:text-text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <button className="red-border px-6 py-3 rounded font-mono hover-hack transition-all duration-300">
                <Zap className="inline-block w-4 h-4 mr-2" />
                Access Full Arsenal
              </button>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
