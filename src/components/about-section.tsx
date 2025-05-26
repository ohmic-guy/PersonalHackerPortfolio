import TerminalWindow from "./terminal-window";
import { UserCheck, TrendingUp, Shield, Brain, Target, Zap, Award } from "lucide-react";

export default function AboutSection() {
  const combatStats = [
    { 
      label: "Penetration Testing", 
      value: 92, 
      icon: Target, 
      status: "ELITE",
      color: "hack-red"
    },
    { 
      label: "AI/ML Security", 
      value: 88, 
      icon: Brain, 
      status: "ADVANCED",
      color: "terminal-green"
    },
    { 
      label: "Social Engineering", 
      value: 85, 
      icon: Shield, 
      status: "EXPERT",
      color: "exploit-purple"
    },
    { 
      label: "Red Team Ops", 
      value: 90, 
      icon: Zap, 
      status: "OPERATIONAL",
      color: "warning-orange"
    },
  ];

  const achievements = [
    { title: "CISCO Ethical Hacker", level: "VERIFIED", year: "2024" },
    { title: "Cybersecurity Diploma", level: "PROFESSIONAL", year: "2024" },
    { title: "Python Certification", level: "ADVANCED", year: "2024" },
    { title: "Red Team Member", level: "ACTIVE", year: "2025" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="operative_profile.sh" className="animate-slide-up">
          <div className="font-mono">
            <div className="text-hack-red mb-4">$ ./execute operative_profile.sh --detailed</div>
            <div className="grid lg:grid-cols-3 gap-8 ml-4">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-hack-red">
                  <UserCheck className="inline-block w-6 h-6 mr-2" />
                  Operative Intel
                </h2>
                <div className="space-y-4 text-text-secondary font-sans">
                  <p>Elite red teamer specializing in AI-powered cyber warfare and advanced penetration testing. Expert in developing autonomous attack vectors and defensive countermeasures.</p>
                  
                  <div className="bg-darker-surface p-4 rounded border border-hack-red">
                    <h3 className="text-hack-red font-mono mb-2">[CLASSIFIED] Current Operations:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <span className="text-terminal-green mr-2">[✓]</span>
                        Neural Network Exploitation Frameworks
                      </li>
                      <li className="flex items-center">
                        <span className="text-terminal-green mr-2">[✓]</span>
                        Advanced Persistent Threat Development
                      </li>
                      <li className="flex items-center">
                        <span className="text-warning-orange mr-2">[~]</span>
                        Quantum-Resistant Cryptanalysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-hack-red mr-2">[!]</span>
                        Zero-Day Research & Weaponization
                      </li>
                    </ul>
                  </div>
                  
                  <p>When not breaching systems, you'll find me analyzing threat landscapes, developing ML security models, or capturing digital evidence through advanced photography techniques.</p>
                </div>
              </div>
              
              {/* Achievement Badges */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-terminal-green">
                  <Award className="inline-block w-5 h-5 mr-2" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-darker-surface p-3 rounded border border-dark-border hover-hack">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-text-primary font-semibold text-sm">{achievement.title}</span>
                        <span className="text-xs text-text-secondary">{achievement.year}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-mono rounded ${
                        achievement.level === 'VERIFIED' ? 'bg-terminal-green text-dark-bg' :
                        achievement.level === 'PROFESSIONAL' ? 'bg-exploit-purple text-text-primary' :
                        achievement.level === 'ADVANCED' ? 'bg-warning-orange text-dark-bg' :
                        'bg-hack-red text-text-primary'
                      }`}>
                        {achievement.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Combat Stats */}
            <div className="mt-8 ml-4">
              <h3 className="text-xl font-bold mb-4 text-hack-red">
                <TrendingUp className="inline-block w-5 h-5 mr-2" />
                Combat Effectiveness
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {combatStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-darker-surface p-4 rounded border border-dark-border hover-hack">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-${stat.color} flex items-center font-semibold`}>
                          <Icon className="w-4 h-4 mr-2" />
                          {stat.label}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded font-mono ${
                          stat.status === 'ELITE' ? 'bg-hack-red text-text-primary' :
                          stat.status === 'ADVANCED' ? 'bg-terminal-green text-dark-bg' :
                          stat.status === 'EXPERT' ? 'bg-exploit-purple text-text-primary' :
                          'bg-warning-orange text-dark-bg'
                        }`}>
                          {stat.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-dark-bg rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 bg-${stat.color}`}
                            style={{ width: `${stat.value}%` }}
                          ></div>
                        </div>
                        <span className={`text-${stat.color} font-mono text-sm font-bold`}>
                          {stat.value}%
                        </span>
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
