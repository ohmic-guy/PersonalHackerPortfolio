import TerminalWindow from "./terminal-window";
import { UserCheck, TrendingUp, Shield, Brain } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Cybersecurity", value: 90, icon: Shield, status: "CISCO Certified" },
    { label: "AI/ML Development", value: 85, icon: Brain, status: "Advanced" },
    { label: "Frontend Development", value: 80, icon: TrendingUp, status: "React Expert" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="about_me.sh" className="animate-slide-up">
          <div className="font-mono">
            <div className="text-matrix mb-4">$ ./execute about_me.sh</div>
            <div className="grid md:grid-cols-2 gap-8 ml-4">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-cyber-cyan">
                  <UserCheck className="inline-block w-6 h-6 mr-2" />
                  About Me
                </h2>
                <div className="space-y-4 text-text-secondary font-sans">
                  <p>I'm a B.Tech CSE (AI/ML) student passionate about the intersection of artificial intelligence and cybersecurity. I love building intelligent systems and securing them against evolving threats.</p>
                  
                  <div className="bg-dark-surface p-4 rounded border border-dark-border">
                    <h3 className="text-matrix font-mono mb-2">Current Focus:</h3>
                    <ul className="space-y-1">
                      <li>• Ethical Hacking & Penetration Testing</li>
                      <li>• Cryptography & Network Security</li>
                      <li>• Deep Learning and Neural Networks</li>
                      <li>• Computer Vision & NLP</li>
                    </ul>
                  </div>
                  
                  <p>Beyond tech, I'm an avid photographer capturing the world through my lens and a game alpha-tester helping shape the future of gaming experiences.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyber-cyan">
                  <TrendingUp className="inline-block w-5 h-5 mr-2" />
                  Stats & Achievements
                </h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-dark-surface p-4 rounded border border-dark-border hover-matrix">
                        <div className="flex justify-between items-center mb-2">
                          <span className="flex items-center text-matrix font-semibold">
                            <Icon className="w-5 h-5 mr-2" />
                            <span>{stat.label}</span>
                          </span>
                          <span className="text-xs text-cyber-cyan font-mono">{stat.status}</span>
                        </div>
                        <div className="w-full bg-dark-bg rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-matrix to-cyber-cyan h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${stat.value}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-xs text-text-secondary mt-1 font-mono">{stat.value}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
