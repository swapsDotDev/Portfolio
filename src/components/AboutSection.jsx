import { Briefcase, Code, User, Terminal, FileText, ExternalLink } from "lucide-react";

const TerminalHeader = ({ title }) => (
  <div className="flex items-center gap-2 bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200 px-4 py-2">
    <div className="flex gap-2">
      {[ "red", "yellow", "green" ].map(color => (
        <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
      ))}
    </div>
    <span className="ml-2 text-slate-300 dark:text-slate-300 light:text-gray-700 font-mono text-sm">{title}</span>
  </div>
);

const SkillBadge = ({ color, text }) => (
  <span className={`px-2 py-1 bg-${color}/20 text-${color}-300 dark:text-${color}-300 light:text-${color}-600 text-xs rounded-md font-mono`}>{text}</span>
);

const SkillCard = ({ icon, iconBg, title, description, badges, hoverColor }) => (
  <div className={`group bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/70 backdrop-blur-sm rounded-lg border border-slate-700/30 dark:border-slate-700/30 light:border-slate-300 p-6
                  hover:border-${hoverColor}/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-${hoverColor}/10`}>
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-lg bg-gradient-to-br from-${iconBg[0]}/20 to-${iconBg[1]}/20 border border-${iconBg[0]}/30 dark:border-${iconBg[0]}/30 light:border-${iconBg[1]}/30`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className={`font-bold text-lg text-white dark:text-white light:text-gray-900 mb-2 group-hover:text-${hoverColor} dark:group-hover:text-${hoverColor} light:group-hover:text-${hoverColor} transition-colors`}>
          {title}
        </h4>
        <p className="text-slate-300 dark:text-slate-300 light:text-gray-700 text-sm leading-relaxed">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {badges.map((b, i) => <SkillBadge key={i} color={b.color} text={b.text} />)}
        </div>
      </div>
    </div>
  </div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-slate-810 to-slate-820">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                        dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                        light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
                        bg-[size:50px_50px] [background-position:0_0,0_0]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-2">
                {[ "red", "yellow", "green" ].map(color => (
                  <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
                ))}
              </div>
              <span className="ml-4 text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono text-sm">/home/swapnil/about.js</span>
            </div>
            <h2 className="text-3xl md:text-2xl font-bold text-white dark:text-white light:text-gray-900">
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">const</span>{" "}
              <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">developer</span>{" "}
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">=</span>{" "}
              <span className="text-green-400 dark:text-green-400 light:text-green-600">"Swapnil Kale"</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            {/* Terminal Bio */}
            <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white rounded-lg border border-[#30363D] dark:border-[#30363D] light:border-slate-300 shadow-2xl overflow-hidden">
              <TerminalHeader title="terminal" />
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="text-green-400 dark:text-green-400 light:text-emerald-600">
                  <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">swapnil@dev</span>
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">:</span>
                  <span className="text-purple-400 dark:text-purple-400 light:text-purple-600">~/portfolio</span>
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">$</span> ./about.sh
                </div>
                <div className="space-y-3 text-slate-300 dark:text-slate-300 light:text-gray-700">
                  <div><span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600">INFO:</span> Initializing developer profile...</div>
                  <div><span className="text-yellow-400 dark:text-yellow-400 light:text-yellow-600">ROLE:</span> Full-Stack Developer & Problem Solver</div>
                  <div><span className="text-green-400 dark:text-green-400 light:text-emerald-600">STACK:</span> ReactJS | Python | Flutter | FastAPI</div>
                  <div><span className="text-purple-400 dark:text-purple-400 light:text-purple-600">FOCUS:</span> Cross-platform development & sustainability</div>
                  <div><span className="text-blue-400 dark:text-blue-400 light:text-blue-600">STATUS:</span> Ready for new challenges ✨</div>
                </div>
              </div>
            </div>

            {/* Description + Buttons */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Terminal className="h-6 w-6 text-cyan-400" /> Developer. Innovator. Problem Solver.
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm <span className="text-cyan-400 font-semibold">Swapnil Kale</span> — a passionate software developer with hands-on experience in building impactful web and mobile apps using <span className="text-blue-400 font-mono">ReactJS</span>, <span className="text-green-400 font-mono">Python</span>, <span className="text-purple-400 font-mono">Flutter</span>, and <span className="text-orange-400 font-mono">FastAPI</span>. I love leveraging technology to solve real-world problems, especially those related to sustainability and efficiency.
                </p>

                <p>
                  My journey includes crafting HR management systems, satellite-image-based afforestation tools, and intuitive platforms that blend functionality with user-focused design. I'm a fast learner, a collaborative teammate, and always up for a challenge that makes me grow.
                </p>

                <div className="bg-slate-700/30 rounded-lg p-4 border-l-4 border-cyan-400">
                  <p className="text-cyan-100 italic">
                    "Write once, run everywhere" - Building cross-platform solutions for Linux, macOS, and Windows.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  <Terminal className="h-4 w-4 mr-2" /> ./contact.sh
                </a>

                <a href="https://drive.google.com/drive/folders/1dpQXWMza-DdCXSlqKms3abRZfKsfsrCW?usp=sharing" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-400 hover:to-pink-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <FileText className="h-4 w-4 mr-2" /> Download CV <ExternalLink className="h-3 w-3 ml-2 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <SkillCard
              icon={<Code className="h-6 w-6 text-cyan-400 dark:text-cyan-400 light:text-cyan-600" />}
              iconBg={["cyan-500","blue-500"]}
              title="Full-Stack Development"
              description="Proficient in building robust and scalable web & mobile applications using React, Flutter, Python, and FastAPI."
              badges={[{ color:"blue", text:"React" }, { color:"green", text:"Python" }, { color:"purple", text:"Flutter" }]}
              hoverColor="cyan-400"
            />

            <SkillCard
              icon={<User className="h-6 w-6 text-green-400 dark:text-green-400 light:text-emerald-600" />}
              iconBg={["green-500","emerald-500"]}
              title="User-Centric Design"
              description="I design intuitive and inclusive interfaces that prioritize user needs and accessibility across all platforms."
              badges={[{ color:"green", text:"UX/UI" }, { color:"emerald", text:"Responsive" }, { color:"teal", text:"Accessible" }]}
              hoverColor="green-400"
            />

            <SkillCard
              icon={<Briefcase className="h-6 w-6 text-purple-400 dark:text-purple-400 light:text-purple-600" />}
              iconBg={["purple-500","pink-500"]}
              title="Project Implementation"
              description="Experienced in managing full project lifecycles from ideation to deployment following agile principles."
              badges={[{ color:"purple", text:"Agile" }, { color:"pink", text:"DevOps" }, { color:"violet", text:"CI/CD" }]}
              hoverColor="purple-400"
            />

            {/* System Status */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 font-mono text-sm">System Status</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between"><span className="text-slate-400">Coding Skills</span><span className="text-green-400">█████████░ 90%</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Problem Solving</span><span className="text-cyan-400">██████████ 100%</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Coffee Level</span><span className="text-orange-400">███████░░░ 70%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { Briefcase, Code, User, Terminal, FileText, ExternalLink } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
//       <div className="container mx-auto max-w-6xl relative z-10">
//         {/* Terminal Header */}
//         <div className="mb-12 text-center">
//           <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <span className="ml-4 text-slate-400 font-mono text-sm">/home/swapnil/about.js</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               <span className="text-slate-400 font-mono">const</span>{" "}
//               <span className="text-blue-400">developer</span>{" "}
//               <span className="text-slate-400">=</span>{" "}
//               <span className="text-green-400">"Swapnil Kale"</span>
//             </h2>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Bio */}
//           <div className="space-y-8">
//             {/* Terminal Bio */}
//             <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 overflow-hidden">
//               <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <span className="ml-2 text-slate-300 font-mono text-sm">terminal</span>
//               </div>
              
//               <div className="p-6 font-mono text-sm space-y-4">
//                 <div className="text-green-400">
//                   <span className="text-blue-400">swapnil@dev</span>
//                   <span className="text-slate-400">:</span>
//                   <span className="text-purple-400">~/portfolio</span>
//                   <span className="text-slate-400">$</span> ./about.sh
//                 </div>
                
//                 <div className="space-y-3 text-slate-300">
//                   <div>
//                     <span className="text-cyan-400">INFO:</span> Initializing developer profile...
//                   </div>
//                   <div>
//                     <span className="text-yellow-400">ROLE:</span> Full-Stack Developer & Problem Solver
//                   </div>
//                   <div>
//                     <span className="text-green-400">STACK:</span> ReactJS | Python | Flutter | FastAPI
//                   </div>
//                   <div>
//                     <span className="text-purple-400">FOCUS:</span> Cross-platform development & sustainability
//                   </div>
//                   <div>
//                     <span className="text-blue-400">STATUS:</span> Ready for new challenges ✨
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-white flex items-center gap-3">
//                 <Terminal className="h-6 w-6 text-cyan-400" />
//                 Developer. Innovator. Problem Solver.
//               </h3>

//               <div className="space-y-4 text-slate-300 leading-relaxed">
//                 <p>
//                   I'm <span className="text-cyan-400 font-semibold">Swapnil Kale</span> — a passionate software developer with
//                   hands-on experience in building impactful web and mobile apps
//                   using <span className="text-blue-400 font-mono">ReactJS</span>, <span className="text-green-400 font-mono">Python</span>,{" "}
//                   <span className="text-purple-400 font-mono">Flutter</span>, and <span className="text-orange-400 font-mono">FastAPI</span>. I love
//                   leveraging technology to solve real-world problems, especially
//                   those related to sustainability and efficiency.
//                 </p>

//                 <p>
//                   My journey includes crafting HR management systems,
//                   satellite-image-based afforestation tools, and intuitive platforms
//                   that blend functionality with user-focused design. I'm a fast
//                   learner, a collaborative teammate, and always up for a challenge
//                   that makes me grow.
//                 </p>

//                 <div className="bg-slate-700/30 rounded-lg p-4 border-l-4 border-cyan-400">
//                   <p className="text-cyan-100 italic">
//                     "Write once, run everywhere" - Building cross-platform solutions for Linux, macOS, and Windows.
//                   </p>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-6">
//                 <a 
//                   href="#contact" 
//                   className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
//                 >
//                   <Terminal className="h-4 w-4 mr-2" />
//                   ./contact.sh
//                 </a>

//                 <a
//                   href="https://drive.google.com/drive/folders/1dpQXWMza-DdCXSlqKms3abRZfKsfsrCW?usp=sharing"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-purple-400 hover:to-pink-400 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
//                 >
//                   <FileText className="h-4 w-4 mr-2" />
//                   Download CV
//                   <ExternalLink className="h-3 w-3 ml-2 opacity-70" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Skills Cards */}
//           <div className="space-y-6">
//             {/* Full-Stack Development */}
//             <div className="group bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
//                   <Code className="h-6 w-6 text-cyan-400" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
//                     Full-Stack Development
//                   </h4>
//                   <p className="text-slate-300 text-sm leading-relaxed">
//                     Proficient in building robust and scalable web & mobile
//                     applications using <span className="text-blue-400 font-mono">React</span>, <span className="text-purple-400 font-mono">Flutter</span>, <span className="text-green-400 font-mono">Python</span>, and <span className="text-orange-400 font-mono">FastAPI</span>.
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md font-mono">React</span>
//                     <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md font-mono">Python</span>
//                     <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md font-mono">Flutter</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* User-Centric Design */}
//             <div className="group bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/10">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
//                   <User className="h-6 w-6 text-green-400" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">
//                     User-Centric Design
//                   </h4>
//                   <p className="text-slate-300 text-sm leading-relaxed">
//                     I design intuitive and inclusive interfaces that prioritize
//                     user needs and accessibility across all platforms.
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md">UX/UI</span>
//                     <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-md">Responsive</span>
//                     <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-md">Accessible</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Project Implementation */}
//             <div className="group bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30 p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-400/10">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
//                   <Briefcase className="h-6 w-6 text-purple-400" />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">
//                     Project Implementation
//                   </h4>
//                   <p className="text-slate-300 text-sm leading-relaxed">
//                     Experienced in managing full project lifecycles—from
//                     ideation to deployment—following agile principles.
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md">Agile</span>
//                     <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-md">DevOps</span>
//                     <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-md">CI/CD</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* System Status Widget */}
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/30 p-4">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-slate-300 font-mono text-sm">System Status</span>
//               </div>
//               <div className="space-y-2 text-xs font-mono">
//                 <div className="flex justify-between">
//                   <span className="text-slate-400">Coding Skills</span>
//                   <span className="text-green-400">█████████░ 90%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-slate-400">Problem Solving</span>
//                   <span className="text-cyan-400">██████████ 100%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-slate-400">Coffee Level</span>
//                   <span className="text-orange-400">███████░░░ 70%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { Briefcase, Code, User } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary">Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Developer. Innovator. Problem Solver.
//             </h3>

//             <p className="text-muted-foreground">
//               I&apos;m Swapnil Kale — a passionate software developer with
//               hands-on experience in building impactful web and mobile apps
//               using <strong>ReactJS</strong>, <strong>Python</strong>,{" "}
//               <strong>Flutter</strong>, and <strong>FastAPI</strong>. I love
//               leveraging technology to solve real-world problems, especially
//               those related to sustainability and efficiency.
//             </p>

//             <p className="text-muted-foreground">
//               My journey includes crafting HR management systems,
//               satellite-image-based afforestation tools, and intuitive platforms
//               that blend functionality with user-focused design. I&apos;m a fast
//               learner, a collaborative teammate, and always up for a challenge
//               that makes me grow.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 Get In Touch
//               </a>

//               <a
//                 href="https://drive.google.com/drive/folders/1dpQXWMza-DdCXSlqKms3abRZfKsfsrCW?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cosmic-button"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">
//                     Full-Stack Development
//                   </h4>
//                   <p className="text-muted-foreground">
//                     Proficient in building robust and scalable web & mobile
//                     applications using React, Flutter, Python, and FastAPI.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">User-Centric Design</h4>
//                   <p className="text-muted-foreground">
//                     I design intuitive and inclusive interfaces that prioritize
//                     user needs and accessibility.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">
//                     Project Implementation
//                   </h4>
//                   <p className="text-muted-foreground">
//                     Experienced in managing full project lifecycles—from
//                     ideation to deployment—following agile principles.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { Briefcase, Code, User } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="py-24 px-4 relative">
//       {" "}
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           About <span className="text-primary"> Me</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Passionate Web Developer & Tech Creator
//             </h3>

//             <p className="text-muted-foreground">
//               With over 5 years of experience in web development, I specialize
//               in creating responsive, accessible, and performant web
//               applications using modern technologies.
//             </p>

//             <p className="text-muted-foreground">
//               I&apos;m passionate about creating elegant solutions to complex
//               problems, and I&apos;m constantly learning new technologies and
//               techniques to stay at the forefront of the ever-evolving web
//               landscape.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//               <a href="#contact" className="cosmic-button">
//                 {" "}
//                 Get In Touch
//               </a>

//               <a
//                 href=""
//                 className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Code className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg"> Web Development</h4>
//                   <p className="text-muted-foreground">
//                     Creating responsive websites and web applications with
//                     modern frameworks.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <User className="h-6 w-6 text-primary" />
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">
//                     Designing intuitive user interfaces and seamless user
//                     experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="gradient-border p-6 card-hover">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>

//                 <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Management</h4>
//                   <p className="text-muted-foreground">
//                     Leading projects from conception to completion with agile
//                     methodologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
