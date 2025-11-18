import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  Zap,
  Trophy,
  ArrowRight,
  Sparkles,
  Terminal,
  GitBranch,
  Server,
  Database,
  Cpu,
} from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Posit Source Technologies",
    location: "Pune, India",
    date: "Jan 2025 - June 2025",
    description:
      "Architected full-stack web applications using modern MERN stack with Python microservices. Spearheaded automation initiatives that eliminated manual bottlenecks, reducing operational errors by 30% while optimizing database queries and API endpoints for 15% performance gains. Collaborated across teams to deliver enterprise-grade solutions with scalable architecture patterns.",
    skills: ["ReactJS", "Node.js", "Python", "ExpressJS", "FastAPI", "MongoDB"],
    impact: "Boosted app performance by 15% • Reduced errors by 30%",
    type: "internship",
    commits: "240+",
    features: "8",
    codeReviews: "30+"
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Independent Contractor",
    location: "Remote • Cross-Platform",
    date: "Jan 2022 - Present",
    description:
      "Delivered end-to-end web solutions for diverse clients, specializing in responsive React frontends with Node.js backends. Built scalable cloud architectures using MongoDB and implemented CI/CD pipelines. Known for translating complex business requirements into elegant code, maintaining 100% client satisfaction across 20+ project deliveries.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind", "JavaScript", "AWS"],
    impact: "20+ successful deployments • 100% client satisfaction",
    type: "freelance",
    commits: "100+",
    features: "16+",
    codeReviews: "30"
  },
];

const techStats = [
  {
    icon: Code,
    label: "Lines of Code",
    value: "50K+",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  { 
    icon: GitBranch, 
    label: "Git Commits", 
    value: "750+", 
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Server,
    label: "Projects Deployed",
    value: "4+",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  { 
    icon: Database, 
    label: "Databases Designed", 
    value: "12", 
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const highlights = [
  {
    icon: Code,
    text: "6 months professional experience",
    detail: "Jan 2025 - Present",
    color: "text-blue-500",
  },
  { 
    icon: Zap, 
    text: "Modern full-stack mastery", 
    detail: "MERN + Python",
    color: "text-purple-500" 
  },
  {
    icon: Trophy,
    text: "Cross-platform solutions",
    detail: "Linux • macOS • Windows",
    color: "text-emerald-500",
  },
];

export const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);

  const commands = [
    "$ git log --oneline --author='Swapnil' | wc -l",
    "750",
    "$ find . -name '*.js' -o -name '*.py' | xargs wc -l | tail -1",
    "50847 total",
    "$ docker ps | grep 'swapnil-projects' | wc -l", 
    "4"
];

  useEffect(() => {
  if (currentCommand >= commands.length) return;

  let index = 0;
  const command = commands[currentCommand];
  let currentLine = "";

  const interval = setInterval(() => {
    if (index <= command.length) {
      currentLine = command.slice(0, index);
      setTerminalOutput(prev => {
        const lines = prev.split("\n");
        lines[lines.length - 1] = currentLine; // replace only last line
        return lines.join("\n");
      });
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        // once full line typed, add newline for next command
        setTerminalOutput(prev => prev + "\n");
        setCurrentCommand(prev => prev + 1);
      }, 1000);
    }
  }, 50);

  return () => clearInterval(interval);
}, [currentCommand]);

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                       dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                       light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
                       bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 
                         bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 
                         backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300
                         px-4 py-2 rounded-full text-sm font-mono 
                         text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-6">
            <Terminal className="h-4 w-4" />
            /var/log/experience
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 
                        text-gray-100 dark:text-gray-100 light:text-gray-900">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-blue-400 via-purple-500 to-emerald-400
                           dark:from-blue-400 dark:via-purple-500 dark:to-emerald-400
                           light:from-blue-600 light:via-purple-600 light:to-emerald-600">
              Journey
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto">
            Building scalable solutions across platforms • Writing code that matters
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`group relative transition-all duration-500 ${
                    activeCard === idx ? "scale-[1.02]" : ""
                  }`}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Terminal-style experience card */}
                  <div className={`relative overflow-hidden rounded-lg transition-all duration-500
                                  ${activeCard === idx 
                                    ? 'bg-[#0D1117] dark:bg-[#0D1117] light:bg-white border-emerald-500/50 shadow-xl shadow-emerald-500/10' 
                                    : 'bg-[#0D1117] dark:bg-[#0D1117] light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-300'
                                  } border`}>
                    
                    {/* Terminal header */}
                    <div className="flex items-center justify-between px-4 sm:px-6 py-3
                                   bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50
                                   border-b border-slate-700 dark:border-slate-700 light:border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                      <span className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                        {exp.company.toLowerCase().replace(/\s+/g, '-')}.log
                      </span>
                      <div className={`px-2 py-1 rounded text-xs font-mono ${
                        exp.type === "internship"
                          ? "bg-blue-500/20 text-blue-400 dark:text-blue-400 light:text-blue-600"
                          : "bg-purple-500/20 text-purple-400 dark:text-purple-400 light:text-purple-600"
                      }`}>
                        {exp.type === "internship" ? "INTERN" : "FREELANCE"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      {/* Header info */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-1
                                       group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 
                                       transition-colors">
                            {exp.title}
                          </h3>
                          <p className="font-mono text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-2">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="font-mono">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-mono">{exp.date}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1 bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100
                                     text-gray-300 dark:text-gray-300 light:text-gray-700
                                     text-sm rounded-full border border-slate-700 dark:border-slate-700 light:border-slate-300
                                     hover:border-emerald-500/50 hover:bg-emerald-500/10 
                                     transition-colors cursor-pointer font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-sm font-mono text-gray-400 dark:text-gray-400 light:text-gray-600">commits</div>
                          <div className="text-lg font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                            {exp.commits}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-mono text-gray-400 dark:text-gray-400 light:text-gray-600">features</div>
                          <div className="text-lg font-bold text-blue-400 dark:text-blue-400 light:text-blue-600">
                            {exp.features}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-mono text-gray-400 dark:text-gray-400 light:text-gray-600">reviews</div>
                          <div className="text-lg font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">
                            {exp.codeReviews}
                          </div>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex items-center gap-2 text-sm font-mono">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-yellow-400 dark:text-yellow-400 light:text-yellow-600">
                          {exp.impact}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-400 light:text-gray-600 
                                             transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live terminal */}
            <div className="sticky top-8">
              <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white rounded-lg 
                             border border-slate-700 dark:border-slate-700 light:border-slate-300 
                             overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 
                               bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50
                               border-b border-slate-700 dark:border-slate-700 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="font-mono text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
                    stats.sh
                  </span>
                </div>
                
                <div className="p-4 h-50 overflow-hidden">
                  <div className="font-mono text-sm">
                    <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 whitespace-pre-line">
                      {terminalOutput}
                    </div>
                    {currentCommand < commands.length && (
                      <span className="animate-pulse text-emerald-400 dark:text-emerald-400 light:text-emerald-600">█</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Tech stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {techStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
                             border border-slate-700 dark:border-slate-700 light:border-slate-300
                             rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300
                             hover:shadow-lg"
                  >
                    <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                    <div className="text-lg font-bold text-gray-100 dark:text-gray-100 light:text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4 text-gray-100 dark:text-gray-100 light:text-gray-900">
                  Key <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">Metrics</span>
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className={`group relative p-4 rounded-lg cursor-pointer transition-all duration-300 
                                 border ${
                                   hoveredHighlight === idx
                                     ? 'scale-105 bg-[#0D1117] dark:bg-[#0D1117] light:bg-white border-emerald-500/50 shadow-lg'
                                     : 'bg-[#0D1117] dark:bg-[#0D1117] light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-300'
                                 }`}
                      onMouseEnter={() => setHoveredHighlight(idx)}
                      onMouseLeave={() => setHoveredHighlight(null)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100 
                                       transition-transform group-hover:scale-110">
                          <highlight.icon className={`h-4 w-4 ${highlight.color}`} />
                        </div>
                        <div>
                          <div className="font-medium text-gray-100 dark:text-gray-100 light:text-gray-900 
                                        group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 
                                        transition-colors text-sm">
                            {highlight.text}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono mt-1">
                            {highlight.detail}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience progress */}
              <div className="mt-6 p-4 bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
                             rounded-lg border border-slate-700 dark:border-slate-700 light:border-slate-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-1 font-mono">
                    6+
                  </div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-3 font-mono">
                    months of professional coding
                  </div>
                  <div className="w-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 
                               dark:from-blue-500 dark:via-purple-500 dark:to-emerald-500
                               light:from-blue-600 light:via-purple-600 light:to-emerald-600
                               h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mt-2 font-mono">
                    Just getting started...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import {
//   Briefcase,
//   Calendar,
//   MapPin,
//   Code,
//   Zap,
//   Trophy,
//   ArrowRight,
//   Sparkles,
// } from "lucide-react";
// import { useState } from "react";

// const experiences = [
//   {
//     title: "Software Developer Intern",
//     company: "Posit Source Technologies",
//     location: "Pune, India",
//     date: "Jan 2025 - June 2025",
//     description:
//       "Worked on full-stack web application development using ReactJS, Node.js, and Python. Lead initiatives to automate manual processes and reduce errors by 30%. Refactored existing codebases and optimized data handling, improving application performance by 15%. Collaborated with cross-functional teams to deliver scalable and maintainable solutions aligned with business goals.",
//     skills: ["ReactJS", "Node.js", "Python", "ExpressJS", "FastAPI"],
//     impact: "Improved app performance by 15% and reduced errors by 30%",
//     type: "internship",
//   },
//   {
//     title: "Freelance Web Developer",
//     company: "Independent",
//     location: "Remote",
//     date: "Jan 2022 - Present",
//     description:
//       "Delivered tailored websites and web applications for clients across various industries, emphasizing clean UI, mobile responsiveness, and performance. Implemented scalable backend systems using Node.js and MongoDB, and crafted intuitive UIs with React and Tailwind CSS. Known for strong communication and a client-centric approach that resulted in 20+ successful project deliveries.",
//     skills: ["React", "Node.js", "MongoDB", "Tailwind", "JavaScript"],
//     impact: "Delivered few custom web solutions with high client satisfaction",
//     type: "freelance",
//   },
// ];

// const highlights = [
//   {
//     icon: Code,
//     text: "3+ years hands-on experience of projects",
//     color: "text-blue-500",
//   },
//   { icon: Zap, text: "Modern tech stacks mastery", color: "text-purple-500" },
//   {
//     icon: Trophy,
//     text: "Deployed projects successfully",
//     color: "text-orange-500",
//   },
//   { icon: Sparkles, text: "Client satisfaction 100%", color: "text-green-500" },
// ];

// export const ExperienceSection = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [hoveredHighlight, setHoveredHighlight] = useState(null);

//   return (
//     <section
//       id="experience"
//       className="py-20 px-2 relative overflow-hidden bg-secondary/30"
//     >
//       <div className="container mx-auto max-w-6xl relative z-10">
//         <div className="mb-10">
//           <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full text-xs font-medium text-foreground mb-3">
//             <Briefcase className="h-3 w-3" />
//             Professional Journey
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
//             My <span className="text-primary">Experience</span>
//           </h2>
//           <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center">
//             Crafting digital experiences with passion and precision
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2">
//             <div className="relative">
//               <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
//               <div className="space-y-8">
//                 {experiences.map((exp, idx) => (
//                   <div
//                     key={idx}
//                     className={`relative transition-all duration-500 ${
//                       activeCard === idx ? "scale-[1.03]" : "hover:scale-[1.01]"
//                     }`}
//                     onMouseEnter={() => setActiveCard(idx)}
//                     onMouseLeave={() => setActiveCard(null)}
//                   >
//                     <div className="absolute left-2 top-6 z-10">
//                       <div
//                         className={`w-6 h-6 rounded-full border-4 border-background shadow-lg transition-all duration-300 ${
//                           activeCard === idx
//                             ? "bg-primary scale-110 shadow-primary/20"
//                             : "bg-primary/80"
//                         }`}
//                       >
//                         <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
//                           <Briefcase className="h-2.5 w-2.5 text-primary" />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="ml-14 group">
//                       <div
//                         className={`relative p-5 rounded-md transition-all duration-500 border text-left ${
//                           activeCard === idx
//                             ? "bg-card border-primary/40 shadow-lg"
//                             : "bg-card border-border hover:border-primary/20"
//                         }`}
//                       >
//                         <div className="relative z-10">
//                           <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
//                             <div>
//                               <h3 className="text-lg font-bold text-card-foreground mb-0.5 group-hover:text-primary transition-colors">
//                                 {exp.title}
//                               </h3>
//                               <p className="text-sm font-medium text-primary">
//                                 {exp.company}
//                               </p>
//                             </div>
//                             <div
//                               className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-medium ${
//                                 exp.type === "internship"
//                                   ? "bg-secondary text-secondary-foreground"
//                                   : "bg-accent text-accent-foreground"
//                               }`}
//                             >
//                               {exp.type === "internship"
//                                 ? "Internship"
//                                 : "Freelance"}
//                             </div>
//                           </div>

//                           <div className="flex flex-wrap gap-3 mb-2 text-xs text-muted-foreground">
//                             <div className="flex items-center gap-1">
//                               <MapPin className="h-3 w-3" />
//                               {exp.location}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Calendar className="h-3 w-3" />
//                               {exp.date}
//                             </div>
//                           </div>

//                           <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
//                             {exp.description}
//                           </p>

//                           <div className="flex flex-wrap gap-1 mb-2">
//                             {exp.skills.map((skill, skillIdx) => (
//                               <span
//                                 key={skillIdx}
//                                 className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full border border-border hover:bg-accent transition-colors cursor-pointer"
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="flex items-center gap-2 text-xs font-medium text-primary">
//                             <Trophy className="h-3 w-3" />
//                             {exp.impact}
//                             <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="sticky top-8 text-left">
//               <h3 className="text-xl font-bold mb-4 text-foreground">
//                 Key <span className="text-primary">Highlights</span>
//               </h3>
//               <div className="space-y-2">
//                 {highlights.map((highlight, idx) => (
//                   <div
//                     key={idx}
//                     className={`group relative p-4 rounded-md cursor-pointer transition-all duration-300 border ${
//                       hoveredHighlight === idx
//                         ? "scale-105 shadow-lg bg-card border-primary/40"
//                         : "hover:scale-102 bg-card border-border"
//                     }`}
//                     onMouseEnter={() => setHoveredHighlight(idx)}
//                     onMouseLeave={() => setHoveredHighlight(null)}
//                   >
//                     <div className="relative z-10 flex items-center gap-3">
//                       <div
//                         className={`p-2 rounded-full bg-secondary transition-transform group-hover:scale-110`}
//                       >
//                         <highlight.icon
//                           className={`h-4 w-4 ${highlight.color}`}
//                         />
//                       </div>
//                       <span className="font-medium text-card-foreground group-hover:text-primary transition-colors text-sm">
//                         {highlight.text}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 p-4 bg-secondary rounded-md border border-border">
//                 <div className="text-left">
//                   <div className="text-2xl font-bold text-primary mb-1">1</div>
//                   <div className="text-xs text-muted-foreground">
//                     Year of Professional Experience
//                   </div>
//                   <div className="mt-3 w-full bg-background rounded-full h-1.5">
//                     <div
//                       className="bg-primary h-1.5 rounded-full animate-pulse"
//                       style={{ width: "20%" }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
