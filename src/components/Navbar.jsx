import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

// NAV ITEMS
const navItems = [
  { name: "Home", href: "#hero", cmd: "home" },
  { name: "About", href: "#about", cmd: "about" },
  { name: "Experience", href: "#experience", cmd: "experience" },
  { name: "Skills", href: "#skills", cmd: "skills" },
  { name: "Projects", href: "#projects", cmd: "projects" },
  { name: "Certifications", href: "#certifications", cmd: "certifications" },
  { name: "Contact", href: "#contact", cmd: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 300; // slight offset

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (!section) continue;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.href.substring(1));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // offset for sticky navbar
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono font-bold text-gray-100 hover:text-emerald-400 transition-all duration-300"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <Terminal className="h-5 w-5 text-emerald-400" />
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              swapnil
            </span>
            <span className="text-gray-400">DotDev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div
            className={cn(
              "flex items-center rounded-lg p-1 transition-all duration-300",
              isScrolled
                ? "bg-slate-800/50 backdrop-blur border border-slate-600"
                : "bg-slate-800/30 backdrop-blur border border-slate-600/50"
            )}
          >
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 relative group",
                  activeSection === item.href.substring(1)
                    ? "text-emerald-400 bg-slate-700/50"
                    : "text-gray-300 hover:text-emerald-400 hover:bg-slate-700/30"
                )}
              >
                ./{item.cmd}

                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-600 text-gray-100"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* ✅ MOBILE MENU PANEL */}
        <div
          className={cn(
            "fixed inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden transition-all duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="w-80 max-w-[90vw] bg-[#0D1117] border border-slate-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>

              <span className="ml-auto text-xs text-gray-400 font-mono">navigation.sh</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-3">
              <div className="text-emerald-400 mb-4">$ ./navigate --interactive</div>

              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all",
                    activeSection === item.href.substring(1)
                      ? "text-emerald-400 bg-slate-700/30"
                      : "text-gray-300 hover:bg-slate-700/20"
                  )}
                >
                  <span className="text-blue-400">→</span> ./{item.cmd}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-700 text-gray-500 text-xs">
                ✓ Ready to navigate
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};
