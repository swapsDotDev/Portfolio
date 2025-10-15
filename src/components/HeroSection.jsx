import { ArrowDown, Terminal, Cpu, HardDrive, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentOS, setCurrentOS] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  // --- Data ---
  const osInfo = [
    { name: "Ubuntu 22.04 LTS", icon: <img src="/projects/logo/Linux.webp" alt="Linux" className="w-6 h-6" />, color: "#E95420" },
    { name: "macOS Ventura", icon: <img src="/projects/logo/apple.webp" alt="macOS" className="w-9 h-9" />, color: "#007AFF" },
    { name: "Windows 11 Pro", icon: <img src="/projects/logo/Windows11.webp" alt="Windows" className="w-6 h-6" />, color: "#0078D4" }
  ];

const terminalCommands = [
  "$ whoami",
  "swapnil-kale",
  "$ cat skills.json",
  `{
      "languages": ["Python", "JavaScript", "NodeJs", "SQL"],
    }`,
  "$ ls projects/",
  "avkash-hrms/  elearning/  realtime-task-board/  civic-voice/  portfolio/",
  "$ uptime",
  "Coding for 6 months, passionate for a lifetime ⚡"
];

  const code = [
    { tokens: [{ t: "keyword", v: "const " }, { t: "identifier", v: "developer " }, { t: "operator", v: "= " }, { t: "punctuation", v: "{" }] },
    { indent: 1, tokens: [{ t: "variable", v: "name" }, { t: "operator", v: ": " }, { t: "string", v: '"Swapnil Kale"' }, { t: "punctuation", v: "," }] },
    { indent: 1, tokens: [{ t: "variable", v: "stack" }, { t: "operator", v: ": " }, { t: "string", v: '"MERN + Python"' }, { t: "punctuation", v: "," }] },
    { indent: 1, tokens: [{ t: "variable", v: "platforms" }, { t: "operator", v: ": " }, { t: "punctuation", v: "[" }, { t: "string", v: '"Linux"' }, { t: "punctuation", v: ", " }, { t: "string", v: '"macOS"' }, { t: "punctuation", v: ", " }, { t: "string", v: '"Windows"' }, { t: "punctuation", v: "],"}] },
    { indent: 1, tokens: [{ t: "variable", v: "passion" }, { t: "operator", v: ": " }, { t: "string", v: '"Cross-platform solutions"' }, { t: "punctuation", v: "," }] },
    { indent: 1, tokens: [{ t: "variable", v: "motto" }, { t: "operator", v: ": " }, { t: "string", v: '"Write once, run everywhere"' }] },
    { tokens: [{ t: "punctuation", v: "}" }] }
  ];

  // --- Hooks ---
  useEffect(() => {
    const interval = setInterval(() => setCurrentOS(p => (p + 1) % osInfo.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine >= terminalCommands.length) return;

    const command = terminalCommands[currentLine];
    let i = 0;

    const typing = setInterval(() => {
      if (i <= command.length) {
        setTypedText(command.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentLine(p => p + 1);
          setTypedText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentLine]);

  // --- Utility ---
  const tokenClasses = {
    keyword: "text-blue-400 dark:text-blue-400 light:text-blue-600",
    identifier: "text-yellow-300 dark:text-yellow-300 light:text-yellow-600",
    variable: "text-red-300 dark:text-red-300 light:text-red-600",
    string: "text-green-300 dark:text-green-300 light:text-green-600",
    operator: "text-gray-300 dark:text-gray-300 light:text-gray-700",
    punctuation: "text-gray-300 dark:text-gray-300 light:text-gray-700"
  };

  const CodeLine = ({ indent = 0, tokens }) => (
    <div className={`pl-${indent * 4}`}>
      {tokens.map((t, i) => (
        <span key={i} className={tokenClasses[t.t]}>{t.v}</span>
      ))}
    </div>
  );

  const PanelHeader = ({ title, right }) => (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 
                    bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
                    border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
      {!right && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        </div>
      )}
      <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">{title}</span>
    </div>
  );

  const StatCard = ({ icon, label, value, color }) => (
    <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 
                    backdrop-blur border border-slate-700 dark:border-slate-700 light:border-slate-300 
                    rounded-lg p-2 sm:p-3 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">{label}</span>
      </div>
      <div className={`text-xs sm:text-sm font-mono ${color || "text-white dark:text-white light:text-gray-900"}`}>
        {value}
      </div>
    </div>
  );

  // --- JSX ---
  return (
    <section id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-background">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                       dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                       light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
                       bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Path + Heading */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-500 dark:text-emerald-400 light:text-emerald-600">
              <Terminal className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-mono text-xs sm:text-sm">/home/swapnil</span>
            </div>
            {/* Mobile OS info below path, only on mobile */}
            <div className="mt-2 flex justify-center lg:hidden">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1.5">
                <span className="text-sm">{osInfo[currentOS].icon}</span>
                <span className="text-xs font-mono text-gray-300">{osInfo[currentOS].name.split(" ")[0]}</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in text-black dark:text-white">Swapnil</span>
                <span className="ml-3 text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600
                   dark:from-blue-400 dark:via-purple-500 dark:to-emerald-400
                   opacity-0 animate-fade-in-delay-1">Kale</span>
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in text-black dark:text-white">
                Full-Stack
              </span>
              <span className="ml-2 text-emerald-600 dark:text-emerald-400 opacity-0 animate-fade-in-delay-1">
                Developer
              </span>
            </h1>
          </div>

          {/* Description + Stats */}
          <div className="space-y-4 opacity-0 animate-fade-in-delay-3">
            <p className="text-base sm:text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Passionate about building scalable and user-focused applications across the stack. From developing responsive frontends with React to crafting robust backends with Node.js, Express, and MongoDB, I create clean, efficient, and reliable solutions that work seamlessly across platforms.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
              <StatCard 
                icon={<Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />} 
                label="Runtime" 
                value="6+ months" 
              />
              <StatCard 
                icon={<HardDrive className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />} 
                label="Projects" 
                value="15+ repos" 
              />
              <StatCard 
                icon={<Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />} 
                label="Status" 
                value="Available" 
                color="text-emerald-400" 
              />
              <StatCard 
                icon={
                  <span className="flex items-center justify-center h-4 w-4 sm:h-5 sm:w-5">
                    {osInfo[currentOS].icon}
                  </span>
                } 
                label="OS" 
                value={osInfo[currentOS].name.split(" ")[0]} 
              />
            </div>

          </div>

          {/* CTA */}
          <div className="pt-4 sm:pt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="inline-flex items-center gap-2 
                                        bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 
                                        text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold 
                                        hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
              ./view-projects.sh
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-8 lg:mt-0">
          {/* Terminal */}
          <div className="bg-[#0D1117] rounded-lg shadow-2xl border border-[#30363D] overflow-hidden">
            <PanelHeader title="swapnil@dev:~" />
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm h-48 sm:h-64 overflow-hidden text-left">
              {terminalCommands.slice(0, currentLine).map((line, i) => (
                <div key={i} className="mb-1">
                  <span className={line.startsWith("$") ? "text-emerald-400" : "text-gray-300"}>{line}</span>
                </div>
              ))}
              {currentLine < terminalCommands.length && (
                <div className="mb-1">
                  <span className={terminalCommands[currentLine]?.startsWith("$") ? "text-emerald-400" : "text-gray-300"}>
                    {typedText}
                  </span>
                  <span className="animate-pulse text-emerald-400">█</span>
                </div>
              )}
            </div>
          </div>

          {/* System Info */}
          <div className="bg-[#0D1117] rounded-lg shadow-xl border border-[#30363D] overflow-hidden text-left">
            <PanelHeader title="system-info.js" left />
            <div className="p-3 sm:p-4 font-mono text-xs">
              <div className="space-y-1">
                {code.map((line, i) => <CodeLine key={i} indent={line.indent || 0} tokens={line.tokens} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating OS icons */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-6">
          {osInfo.map((os, i) => (
            <div key={i}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl transition-all duration-500 ${
                currentOS === i 
                  ? "bg-white/20 backdrop-blur border-2 shadow-lg scale-110"
                  : "bg-white/5 backdrop-blur border border-white/10 hover:scale-105"
              }`}
              style={currentOS === i ? { borderColor: os.color, boxShadow: `0 0 20px ${os.color}40` } : {}}
            >
              {os.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-gray-400 mb-2 font-mono">./scroll-down</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
      </div>
    </section>

    
  );
};

