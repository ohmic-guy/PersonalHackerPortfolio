import TerminalWindow from "./terminal-window";
import { Code, Brain, Shield, Award, IdCard, Lock, Target } from "lucide-react";
import { FaPython } from "react-icons/fa";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 70 },
  ];

  const frameworks = ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"];
  const securityTools = ["Kali Linux", "Metasploit", "Wireshark", "Nmap"];

  const certifications = [
    {
      title: "CISCO Ethical Hacker",
      description: "Verified Certification",
      icon: IdCard,
      featured: true,
    },
    {
      title: "Diploma in Cyber Security",
      description: "Professional Level",
      icon: Shield,
      featured: false,
    },
    {
      title: "Python (Basic)",
      description: "Programming Foundation",
      icon: FaPython,
      featured: false,
    },
    {
      title: "Introduction to Cybersecurity",
      description: "Security Fundamentals",
      icon: Lock,
      featured: false,
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Terminal */}
          <TerminalWindow title="skills_matrix.sh">
            <div className="font-mono">
              <div className="text-matrix mb-4">$ ./skills_matrix.sh --verbose</div>
              <div className="ml-4 space-y-6">
                <div>
                  <h3 className="text-cyber-cyan font-bold mb-3">
                    <Code className="inline-block w-5 h-5 mr-2" />
                    Programming Languages
                  </h3>
                  <div className="space-y-2">
                    {programmingSkills.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{skill.name}</span>
                        <span className="text-matrix">
                          {"█".repeat(Math.floor(skill.level / 10))}
                          {"░".repeat(Math.floor((100 - skill.level) / 10))} {skill.level}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-cyber-cyan font-bold mb-3">
                    <Brain className="inline-block w-5 h-5 mr-2" />
                    AI/ML Frameworks
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {frameworks.map((framework, index) => (
                      <span 
                        key={index}
                        className="bg-dark-surface p-2 rounded text-center border border-dark-border"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-cyber-cyan font-bold mb-3">
                    <Shield className="inline-block w-5 h-5 mr-2" />
                    Security Tools
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {securityTools.map((tool, index) => (
                      <span 
                        key={index}
                        className="bg-dark-surface p-2 rounded text-center border border-dark-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TerminalWindow>
          
          {/* Certifications Terminal */}
          <TerminalWindow title="certifications.json">
            <div className="font-mono">
              <div className="text-matrix mb-4">$ cat certifications.json</div>
              <div className="ml-4 space-y-4">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <div 
                      key={index} 
                      className={`rounded-lg p-4 transition-all duration-300 ${
                        cert.featured 
                          ? "neon-border hover-matrix" 
                          : "bg-dark-surface border border-dark-border hover-matrix"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-matrix">{cert.title}</h3>
                          <p className="text-text-secondary">{cert.description}</p>
                        </div>
                        <Icon className="w-8 h-8 text-cyber-cyan" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
