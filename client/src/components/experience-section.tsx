import TerminalWindow from "./terminal-window";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const workExperience = [
    {
      title: "Student Body Member",
      company: "thingQbator TAT",
      period: "Feb 2025 - Present",
      location: "Bhubaneswar, Odisha, India",
      description: "Active member of the student innovation community, collaborating on technology projects and startup initiatives.",
      current: true,
    },
    {
      title: "Frontend Developer",
      company: "PyDaddy",
      period: "May 2024 - Dec 2024",
      location: "India",
      description: "Developed responsive web applications using React.js, implemented AI integrations with Flask backends, and contributed to user interface design and optimization.",
      current: false,
    },
  ];

  const education = [
    {
      degree: "B.Tech CSE (AI & ML)",
      institution: "Trident Academy of Technology",
      period: "Sep 2024 - 2028",
      location: "Bhubaneswar, Odisha, India",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.",
      current: true,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Narasinga Choudhury Higher Secondary School",
      period: "Apr 2020 - Jul 2022",
      location: "Odisha, India",
      description: "Completed 12th grade with focus on science and mathematics foundation.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <TerminalWindow title="work_experience.log">
            <div className="font-mono">
              <div className="text-matrix mb-6">$ cat work_experience.log</div>
              <h2 className="text-2xl font-bold mb-6 text-cyber-cyan font-sans">Professional Experience</h2>
              
              <div className="ml-4 space-y-6">
                {workExperience.map((exp, index) => (
                  <div key={index} className={`relative pl-8 border-l-2 ${exp.current ? 'border-matrix' : 'border-dark-border'}`}>
                    <div className={`absolute -left-2 top-0 w-4 h-4 ${exp.current ? 'bg-matrix' : 'bg-dark-border'} rounded-full`}></div>
                    <div className="bg-dark-surface p-6 rounded-lg border border-dark-border hover-matrix">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-matrix flex items-center">
                          <Briefcase className="w-5 h-5 mr-2" />
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

          {/* Education */}
          <TerminalWindow title="education.log">
            <div className="font-mono">
              <div className="text-matrix mb-6">$ cat education.log</div>
              <h2 className="text-2xl font-bold mb-6 text-cyber-cyan font-sans">Educational Background</h2>
              
              <div className="ml-4 space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`relative pl-8 border-l-2 ${edu.current ? 'border-matrix' : 'border-dark-border'}`}>
                    <div className={`absolute -left-2 top-0 w-4 h-4 ${edu.current ? 'bg-matrix' : 'bg-dark-border'} rounded-full`}></div>
                    <div className="bg-dark-surface p-6 rounded-lg border border-dark-border hover-matrix">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-matrix flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2" />
                          {edu.degree}
                        </h3>
                        <span className="text-cyber-cyan font-mono flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg text-cyber-cyan mb-2">{edu.institution}</p>
                      <p className="text-text-secondary font-sans mb-2">{edu.description}</p>
                      <p className="text-sm text-text-secondary">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
