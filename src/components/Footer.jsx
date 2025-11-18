import { ArrowUp, Linkedin, Twitter, Github, Globe, Terminal, Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 
                     bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800
                     dark:from-slate-900 dark:via-slate-800 dark:to-slate-800
                     light:from-slate-100 light:via-slate-50 light:to-slate-100
                     border-t border-slate-700 dark:border-slate-700 light:border-slate-300">
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] 
                       dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
                       light:bg-[linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.1)_1px,transparent_1px)]
                       bg-[size:30px_30px] [background-position:0_0,0_0]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Terminal-style footer content */}
        <div className="bg-[#0D1117] dark:bg-[#0D1117] light:bg-white 
                       rounded-lg shadow-xl border border-[#30363D] dark:border-[#30363D] light:border-slate-300 
                       overflow-hidden mb-8">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 
                         bg-[#161B22] dark:bg-[#161B22] light:bg-slate-50 
                         border-b border-[#30363D] dark:border-[#30363D] light:border-slate-200">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 font-mono">
              footer.sh
            </span>
          </div>
          
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Copyright */}
              <div className="space-y-2">
                <div className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                  $ cat copyright.txt
                </div>
                <div className="pl-2 space-y-1">
                  <div className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    © {new Date().getFullYear()} Swapnil Kale
                  </div>
                  <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
                    All rights reserved.
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <div className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                  $ ls -la ./social/
                </div>
                <div className="pl-2 space-y-2">
                  <a
                    href="https://www.linkedin.com/in/swapnilkale1411/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 
                             hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 
                             transition-colors group"
                  >
                    <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>linkedin</span>
                  </a>
                  <a
                    href="https://x.com/kale_swapn20206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 
                             hover:text-sky-400 dark:hover:text-sky-400 light:hover:text-sky-600 
                             transition-colors group"
                  >
                    <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>twitter</span>
                  </a>
                  <a
                    href="https://github.com/swapsDotDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 
                             hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 
                             transition-colors group"
                  >
                    <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>github</span>
                  </a>
                  <a
                    href="https://peerlist.io/swapdotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700 
                             hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 
                             transition-colors group"
                  >
                    <Globe className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>peerlist</span>
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <div className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                  $ echo $CONTACT_INFO
                </div>
                <div className="pl-2 space-y-1">
                  <a
                    href="mailto:swapnilkale1411@gmail.com"
                    className="block text-gray-300 dark:text-gray-300 light:text-gray-700 
                             hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 
                             transition-colors text-xs sm:text-sm break-all"
                  >
                    swapnilkale1411@gmail.com
                  </a>
                  <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
                    Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal prompt */}
            <div className="mt-6 pt-4 border-t border-[#30363D] dark:border-[#30363D] light:border-slate-200 
                           flex items-center justify-between">
              <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
                <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600">swapnil@portfolio</span>
                <span className="text-gray-500 dark:text-gray-500 light:text-gray-500">:</span>
                <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">~</span>
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">$ Thanks for visiting! 🚀</span>
              </div>
              
              <a
                href="#hero"
                className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                         dark:from-blue-500 dark:to-purple-500 light:from-blue-600 light:to-purple-600
                         text-white hover:shadow-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 light:hover:shadow-purple-600/25
                         transition-all duration-300 transform hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// import { ArrowUp, Linkedin, Twitter, Github, Globe } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
//       <div className="flex flex-col items-center md:items-start text-center md:text-left">
//         <p className="text-sm text-muted-foreground font-semibold mb-1">
//           &copy; {new Date().getFullYear()} Swapnil Kale. All rights reserved.
//         </p>
//       </div>
//       <div className="flex flex-col items-center gap-2">
//         <div className="flex space-x-4 justify-center mb-1">
//           <a
//             href="https://www.linkedin.com/in/swapnilkale1411/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//           >
//             <Linkedin />
//           </a>
//           <a
//             href="https://x.com/kale_swapn20206"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//           >
//             <Twitter />
//           </a>
//           <a
//             href="https://github.com/swapsDotDev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//           >
//             <Github />
//           </a>
//           <a
//             href="https://peerlist.io/swapdotdev"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//             aria-label="Peerlist"
//           >
//             <Globe />
//           </a>
//         </div>
//         <a
//           href="mailto:swapnilkale1411@gmail.com"
//           className="text-xs text-muted-foreground hover:text-primary transition-colors"
//         >
//           swapnilkale1411@gmail.com
//         </a>
//       </div>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//         aria-label="Back to top"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };
