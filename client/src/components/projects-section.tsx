import TerminalWindow from "./terminal-window";
import { Shield, Brain, DollarSign, Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Cryptex Terminal",
      description: "A real-time encryption-decryption application for secure communication, featuring advanced cryptographic algorithms.",
      tech: ["Python", "Flask", "React"],
      icon: Shield,
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive web application to visualize neural network architectures and training processes in real-time.",
      tech: ["React", "D3.js", "PyTorch"],
      icon: Brain,
    },
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website showcasing my projects, skills, and achievements with a sleek design and smooth animations.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      icon: DollarSign,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="projects_showcase.py">
          <div className="font-mono">
            <div className="text-matrix mb-6">$ python projects_showcase.py --display-all</div>
            <h2 className="text-3xl font-bold mb-8 text-center text-cyber-cyan font-sans">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div key={index} className="bg-dark-surface rounded-lg border border-dark-border hover-matrix transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-matrix">{project.title}</h3>
                        <Icon className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <p className="text-text-secondary mb-4 font-sans">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-dark-bg rounded text-xs text-matrix border border-matrix"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-cyber-cyan hover:text-matrix transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                        <button className="text-cyber-cyan hover:text-matrix transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://github.com/ohmic-guy"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border px-6 py-3 rounded font-mono hover-matrix transition-all duration-300 inline-block"
              >
                <Github className="inline-block w-4 h-4 mr-2" />
                View All Projects
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
