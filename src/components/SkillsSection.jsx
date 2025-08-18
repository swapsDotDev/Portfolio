import { useState, useEffect } from "react";
import { Terminal, Code, Database, Wrench, Zap, ChevronRight } from "lucide-react";


const skills = [
  // Frontend
  { 
    name: "HTML/CSS", 
    logo: "/projects/logo/html.png", 
    category: "frontend",
    proficiency: 90,
    description: "Semantic HTML5 & Modern CSS3",
    experience: "2+ years"
  },
  { 
    name: "JavaScript", 
    logo: "/projects/logo/js.png", 
    category: "frontend",
    proficiency: 85,
    description: "ES6+, DOM manipulation, Async/Await",
    experience: "1.5+ years"
  },
  { 
    name: "ReactJS", 
    logo: "/projects/logo/react.png", 
    category: "frontend",
    proficiency: 80,
    description: "Hooks, Context API, Component lifecycle",
    experience: "1+ year"
  },
  { 
    name: "NextJS", 
    logo: "/projects/logo/nextjs.jpg", 
    category: "frontend",
    proficiency: 75,
    description: "SSR, SSG, API Routes, App Router",
    experience: "6+ months"
  },

  // Backend
  { 
    name: "NodeJS", 
    logo: "/projects/logo/nodejs.png", 
    category: "backend",
    proficiency: 85,
    description: "Event-driven, Non-blocking I/O",
    experience: "1+ year"
  },
  {
    name: "ExpressJS",
    logo: "/projects/logo/expressjs.jpg",
    category: "backend",
    proficiency: 80,
    description: "RESTful APIs, Middleware, Authentication",
    experience: "1+ year"
  },
  { 
    name: "MongoDB", 
    logo: "/projects/logo/mongodb.png", 
    category: "backend",
    proficiency: 75,
    description: "NoSQL, Aggregation, Schema design",
    experience: "8+ months"
  },
  {
    name: "PostgreSQL",
    logo: "/projects/logo/elephant.png",
    category: "backend",
    proficiency: 70,
    description: "Relational DB, Complex queries, Indexing",
    experience: "6+ months"
  },
  { 
    name: "Python", 
    logo: "/projects/logo/python.png", 
    category: "backend",
    proficiency: 75,
    description: "OOP, Data structures, Automation",
    experience: "1+ year"
  },
  { 
    name: "FastAPI", 
    logo: "/projects/logo/api.png", 
    category: "backend",
    proficiency: 70,
    description: "Async APIs, Auto docs, Type hints",
    experience: "4+ months"
  },
  { 
    name: "Flutter", 
    logo: "/projects/logo/flutter.jpg", 
    category: "mobile",
    proficiency: 65,
    description: "Cross-platform mobile development",
    experience: "3+ months"
  },

  // Tools
  { 
    name: "Git/GitHub", 
    logo: "/projects/logo/github.png", 
    category: "tools",
    proficiency: 85,
    description: "Version control, Branching, CI/CD",
    experience: "1.5+ years"
  },
  { 
    name: "Docker", 
    logo: "/projects/logo/docker.png", 
    category: "tools",
    proficiency: 70,
    description: "Containerization, Multi-stage builds",
    experience: "4+ months"
  },
  { 
    name: "Postman", 
    logo: "/projects/logo/Postman.jpg", 
    category: "tools",
    proficiency: 90,
    description: "API testing, Collections, Environments",
    experience: "1+ year"
  },
  {
    name: "Agentic AI",
    logo: "/projects/logo/ai-brain.png",
    category: "tools",
    proficiency: 60,
    description: "LLMs, Prompt engineering, AI workflows",
    experience: "2+ months"
  },
  { 
    name: "OpenCV", 
    logo: "/projects/logo/ai.png",
    category: "tools",
    proficiency: 55,
    description: "Computer vision, Image processing",
    experience: "2+ months"
  },
];


const categories = [
  { name: "all", icon: Terminal, color: "emerald" },
  { name: "frontend", icon: Code, color: "blue" },
  { name: "backend", icon: Database, color: "purple" },
  { name: "mobile", icon: Zap, color: "orange" },
  { name: "tools", icon: Wrench, color: "green" }
];

const commands = [
  "$ ls skills/",
  "$ cat skills.json | grep proficiency",
  "$ find . -name '*.js' -o -name '*.py' -o -name '*.ts'",
  "$ docker ps | grep development_stack"
];

// SkillCard component
const SkillCard = ({ skill, index, isAnimated, categoryColor }) => (
  <div
    data-skill-index={index}
    className={`skill-card group relative bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/80 backdrop-blur border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 rounded-lg p-4 sm:p-6 
                hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-${categoryColor}-500/10
                opacity-0 translate-y-4 ${isAnimated ? 'animate-fade-in-up opacity-100 translate-y-0' : ''}`}
    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-center gap-3 mb-4">
      {skill.logo && (
        <img
          src={skill.logo}
          alt={skill.name + " logo"}
          className="w-10 h-10 object-contain rounded"
        />
      )}
      <div className="flex-1">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-100 dark:text-gray-100 light:text-gray-900">
          {skill.name}
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
          {skill.experience}
        </p>
      </div>
      <div className={`px-2 py-1 rounded text-xs font-mono 
                      bg-${categoryColor}-500/20 text-${categoryColor}-400 
                      dark:bg-${categoryColor}-500/20 dark:text-${categoryColor}-400
                      light:bg-${categoryColor}-100 light:text-${categoryColor}-700`}>
        {skill.category}
      </div>
    </div>

    <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4 leading-relaxed">
      {skill.description}
    </p>

    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-gray-400 dark:text-gray-400 light:text-gray-600">
          Proficiency
        </span>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-400 light:text-gray-600">
          {skill.proficiency}%
        </span>
      </div>
      <div className="h-2 bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-${categoryColor}-500 to-${categoryColor}-600 rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isAnimated ? `${skill.proficiency}%` : '0%',
            transitionDelay: `${index * 100 + 300}ms`
          }}
        />
      </div>
    </div>
  </div>
);


// Reusable Category Button
const CategoryButton = ({ category, isActive, onClick }) => {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg 
                 font-mono text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                   isActive
                     ? `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white shadow-lg shadow-${category.color}-500/25`
                     : `bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-white/90`
                 }`}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="capitalize">{category.name}</span>
      {isActive && <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />}
    </button>
  );
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const [typingText, setTypingText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);

  const filteredSkills = skills.filter(
    skill => activeCategory === "all" || skill.category === activeCategory
  );

  // Typing animation
  useEffect(() => {
    if (currentCommand >= commands.length) return;
    const command = commands[currentCommand];
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex <= command.length) {
        setTypingText(command.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentCommand(prev => (prev + 1) % commands.length);
          setTypingText("");
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentCommand]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-skill-index');
            if (idx) setTimeout(() => setAnimatedSkills(prev => new Set([...prev, parseInt(idx)])), idx * 100);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSkills]);

  const getCategoryColor = name => categories.find(cat => cat.name === name)?.color || "gray";

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 relative">
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                       dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                       light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
                       bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header & Terminal Command */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-500 dark:text-emerald-400 light:text-emerald-600 mb-4">
            <Terminal className="h-5 w-5" />
            <span className="font-mono text-sm">/home/swapnil/skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100 dark:text-gray-100 light:text-gray-900">Tech</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 
                           dark:from-blue-400 dark:via-purple-500 dark:to-emerald-400
                           light:from-blue-600 light:via-purple-600 light:to-emerald-600"> Stack</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto text-lg">
            Building robust solutions across the entire development spectrum
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white rounded-lg border border-[#30363D] dark:border-[#30363D] light:border-slate-300">
              <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200 rounded-t-lg">
                <div className="flex items-center gap-2">
                  {["red", "yellow", "green"].map(c => <span key={c} className={`w-3 h-3 rounded-full bg-${c}-500`} />)}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">skills.sh</span>
              </div>
              <div className="p-4 font-mono text-sm flex items-center">
                <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">{typingText}</span>
                <span className="animate-pulse text-emerald-400 dark:text-emerald-400 light:text-emerald-600 ml-1">█</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map(cat => (
            <CategoryButton
              key={cat.name}
              category={cat}
              isActive={activeCategory === cat.name}
              onClick={() => setActiveCategory(cat.name)}
            />
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <SkillCard
              key={`${skill.name}-${activeCategory}`}
              skill={skill}
              index={idx}
              isAnimated={animatedSkills.has(idx)}
              categoryColor={getCategoryColor(skill.category)}
            />
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {[
            { value: skills.length, label: "Technologies", gradient: "from-blue-400 to-emerald-400" },
            { value: "6+", label: "Months Exp", gradient: "from-purple-400 to-blue-400" },
            { value: "3", label: "Platforms", gradient: "from-emerald-400 to-purple-400" },
            { value: "15+", label: "Projects", gradient: "from-blue-400 via-purple-400 to-emerald-400" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}


// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", logo: "/projects/logo/html.png", category: "frontend" },
//   { name: "JavaScript", logo: "/projects/logo/js.png", category: "frontend" },
//   { name: "ReactJS", logo: "/projects/logo/react.png", category: "frontend" },
//   { name: "NextJS", logo: "/projects/logo/nextjs.jpg", category: "frontend" },

//   // Backend
//   { name: "NodeJS", logo: "/projects/logo/nodejs.png", category: "backend" },
//   {
//     name: "ExpressJS",
//     logo: "/projects/logo/expressjs.jpg",
//     category: "backend",
//   },
//   { name: "MongoDB", logo: "/projects/logo/mongodb.png", category: "backend" },
//   {
//     name: "PostgreSQL",
//     logo: "/projects/logo/elephant.png",
//     category: "backend",
//   },
//   { name: "Python", logo: "/projects/logo/python.png", category: "backend" },
//   { name: "FastAPI", logo: "/projects/logo/api.png", category: "backend" },
//   { name: "Flutter", logo: "/projects/logo/flutter.jpg", category: "backend" },

//   // Tools
//   { name: "Git/GitHub", logo: "/projects/logo/github.png", category: "tools" },
//   { name: "Docker", logo: "/projects/logo/docker.png", category: "tools" },
//   { name: "Postman", logo: "/projects/logo/Postman.jpg", category: "tools" },
//   {
//     name: "Agentic AI",
//     logo: "/projects/logo/ai-brain.png",
//     category: "tools",
//   },
//   { name: "OpenCV", logo: "/projects/logo/ai.png", category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory,
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary",
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 {skill.logo && (
//                   <img
//                     src={skill.logo}
//                     alt={skill.name + " logo"}
//                     className="w-7 h-7 object-contain"
//                   />
//                 )}
//                 <h3 className="font-semibold text-lg">{skill.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
