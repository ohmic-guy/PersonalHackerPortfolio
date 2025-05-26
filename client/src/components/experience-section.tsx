import TerminalWindow from "./terminal-window";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Student Body Member",
      company: "thingQbator TAT",
      period: "Feb 2025 - Present",
      location: "Bhubaneswar, Odisha, India",
      description: "Active member of the student innovation community, collaborating on technology projects and startup initiatives.",
      current: true,
      type: "work",
    },
    {
      title: "Frontend Developer",
      company: "PyDaddy",
      period: "May 2024 - Dec 2024",
      location: "India",
      description: "Developed responsive web applications using React.js, implemented AI integrations with Flask backends, and contributed to user interface design and optimization.",
      current: false,
      type: "work",
    },
    {
      title: "B.Tech CSE (AI & ML)",
      company: "Trident Academy of Technology, Bhubaneswar",
      period: "Sep 2024 - 2028",
      location: "Bhubaneswar, Odisha, India",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.",
      current: true,
      type: "education",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <TerminalWindow title="timeline.log">
          <div className="font-mono">
            <div className="text-matrix mb-6">$ tail -f timeline.log</div>
            <h2 className="text-3xl font-bold mb-8 text-center text-cyber-cyan font-sans">Experience & Education</h2>
            
            <div className="ml-4 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative pl-8 border-l-2 ${exp.current ? 'border-matrix' : 'border-dark-border'}`}>
                  <div className={`absolute -left-2 top-0 w-4 h-4 ${exp.current ? 'bg-matrix' : 'bg-dark-border'} rounded-full`}></div>
                  <div className="bg-dark-surface p-6 rounded-lg border border-dark-border hover-matrix">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-matrix flex items-center">
                        {exp.type === 'work' ? <Briefcase className="w-5 h-5 mr-2" /> : <GraduationCap className="w-5 h-5 mr-2" />}
                        {exp.title}
                      </h3>
                      <span className="text-cyber-cyan font-mono flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-cyber-cyan mb-2">{exp.company}</p>
                    <p className="text-text-secondary font-sans mb-2">{exp.description}</p>
                    <p className="text-sm text-text-secondary">{exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
