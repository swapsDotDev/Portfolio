import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hey there, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Swapnil
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kale
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            A full-stack developer passionate about building impactful digital
            experiences. I specialize in React, Python, Flutter, and FastAPI—bringing ideas to life through clean code, great design, and powerful problem-solving.
          </p>

          <p className="text-md text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            From crafting HR systems to AI-driven afforestation apps, I create
            tech that matters. Let's innovate and solve real-world problems—together.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Explore My Projects
            </a>
          </div>
        </div>

        {/* Developer.js window */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-[#101624] rounded-2xl shadow-xl border border-[#2a3142] w-[640px] max-w-full h-[550px] relative overflow-hidden">
            {/* Window header */}
            <div className="flex items-center px-4 py-2 bg-[#182032] rounded-t-2xl border-b border-[#232a3a]">
              <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-300 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-green-400 mr-4"></span>
              <span className="text-xs text-gray-400">developer.js</span>
            </div>
            {/* Code content with syntax highlighting */}
            <div className="text-left text-[14px] leading-relaxed font-mono px-6 py-6 whitespace-pre-wrap">
              <span className="text-[#C792EA]">const</span>{" "}
              <span className="text-[#82AAFF]">profile</span>{" "}
              <span className="text-[#89DDFF]">=</span>{" "}
              <span className="text-[#89DDFF]">{"{"}</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">name</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#C3E88D]">'Swapnil Kale'</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">title</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#C3E88D]">'Full-Stack Developer | MERN & Python Enthusiast'</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">skills</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#89DDFF]">[</span>
              <br />
              {"    "}
              <span className="text-[#C3E88D]">'React'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'Node.js'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'Express'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'MongoDB'</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"    "}
              <span className="text-[#C3E88D]">'Python'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'FastAPI'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'PostgreSQL'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'Docker'</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"    "}
              <span className="text-[#C3E88D]">'GitHub Actions'</span>
              <span className="text-[#89DDFF]">,</span>{" "}
              <span className="text-[#C3E88D]">'AWS'</span>
              <br />
              {"  "}
              <span className="text-[#89DDFF]">],</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">hardWorker</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#FF9CAC]">true</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">quickLearner</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#FF9CAC]">true</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">problemSolver</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#FF9CAC]">true</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">yearsOfExperience</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#C3E88D]">'6 months internship'</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              {"  "}
              <span className="text-[#F07178]">hireable</span>
              <span className="text-[#89DDFF]">:</span>{" "}
              <span className="text-[#C792EA]">function</span>
              <span className="text-[#89DDFF]">()</span>{" "}
              <span className="text-[#89DDFF]">{"{"}</span>
              <br />
              {"    "}
              <span className="text-[#C792EA]">return</span>{" "}
              <span className="text-[#89DDFF]">(</span>
              <br />
              {"      "}
              <span className="text-[#C792EA]">this</span>
              <span className="text-[#89DDFF]">.</span>
              <span className="text-[#82AAFF]">hardWorker</span>{" "}
              <span className="text-[#89DDFF]">&&</span>
              <br />
              {"      "}
              <span className="text-[#C792EA]">this</span>
              <span className="text-[#89DDFF]">.</span>
              <span className="text-[#82AAFF]">quickLearner</span>{" "}
              <span className="text-[#89DDFF]">&&</span>
              <br />
              {"      "}
              <span className="text-[#C792EA]">this</span>
              <span className="text-[#89DDFF]">.</span>
              <span className="text-[#82AAFF]">problemSolver</span>{" "}
              <span className="text-[#89DDFF]">&&</span>
              <br />
              {"      "}
              <span className="text-[#C792EA]">this</span>
              <span className="text-[#89DDFF]">.</span>
              <span className="text-[#82AAFF]">yearsOfExperience</span>{" "}
              <span className="text-[#89DDFF]">{"<"}</span>{" "}
              <span className="text-[#F78C6C]">1</span>
              <br />
              {"    "}
              <span className="text-[#89DDFF]">);</span>
              <br />
              {"  "}
              <span className="text-[#89DDFF]">{"}"}</span>
              <br />
              <span className="text-[#89DDFF]">{"}"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
