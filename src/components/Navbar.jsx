import { cn } from "@/lib/utils";
import { Menu, X, Terminal, Code } from "lucide-react";
import { useEffect, useState } from "react";
// import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", cmd: "home" },
  { name: "About", href: "#about", cmd: "about" },
  { name: "Skills", href: "#skills", cmd: "skills" },
  { name: "Projects", href: "#projects", cmd: "projects" },
  { name: "Contact", href: "#contact", cmd: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-700 dark:border-slate-700 light:border-slate-200"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          className="flex items-center gap-2 text-lg sm:text-xl font-bold font-mono 
                   text-gray-100 dark:text-gray-100 light:text-gray-900 
                   hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 
                   transition-colors duration-300 group"
          href="#hero"
        >
          <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 
                             group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 
                           dark:from-blue-400 dark:to-emerald-400 light:from-blue-600 light:to-emerald-600">
              swapnil
            </span>
            <span className="text-gray-400 dark:text-gray-400 light:text-red-900">DotDev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className={cn(
            "flex items-center rounded-lg p-1 transition-all duration-300",
            isScrolled 
              ? "bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100/70 backdrop-blur border border-slate-600 dark:border-slate-600 light:border-slate-300" 
              : "bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/20 backdrop-blur border border-slate-600/50 dark:border-slate-600/50 light:border-slate-400/50"
          )}>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-mono transition-all duration-300 relative group",
                  activeSection === item.href.substring(1)
                    ? "text-emerald-400 dark:text-emerald-400 light:text-emerald-600 bg-slate-700/50 dark:bg-slate-700/50 light:bg-slate-200/70"
                    : "text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-200/50"
                )}
              >
                <span className="relative z-10">
                  ./{item.cmd}
                </span>
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 
                                 bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600 rounded-full"></div>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-all duration-300 relative z-50",
              "bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/70 backdrop-blur",
              "border border-slate-600 dark:border-slate-600 light:border-slate-300",
              "text-gray-100 dark:text-gray-100 light:text-gray-900",
              "hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/70"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden",
            "bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-md",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Mobile terminal window */}
          <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
                         rounded-lg shadow-2xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 
                         overflow-hidden w-80 max-w-[90vw]">
            <div className="flex items-center justify-between px-4 py-2 
                           bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
                           border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
                navigation.sh
              </span>
            </div>
            
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 mb-4">
                $ ./navigate --interactive
              </div>
              
              <div className="space-y-3">
                {navItems.map((item, key) => (
                  <a
                    key={key}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group",
                      "hover:bg-slate-700/30 dark:hover:bg-slate-700/30 light:hover:bg-slate-100/50",
                      activeSection === item.href.substring(1)
                        ? "text-emerald-400 dark:text-emerald-400 light:text-emerald-600 bg-slate-700/20 dark:bg-slate-700/20 light:bg-slate-100/30"
                        : "text-gray-300 dark:text-gray-300 light:text-gray-700"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">→</span>
                    <span>./{item.cmd}</span>
                  </a>
                ))}
              </div>
              
              <div className="pt-4 border-t border-[#30363D] dark:border-[#30363D] light:border-slate-200">
                <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">✓</span> Ready to navigate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </nav>
  );
};
