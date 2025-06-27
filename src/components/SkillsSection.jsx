import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", logo: "/projects/logo/html.png", category: "frontend" },
  { name: "JavaScript", logo: "/projects/logo/js.png", category: "frontend" },
  { name: "ReactJS", logo: "/projects/logo/react.png", category: "frontend" },
  { name: "NextJS", logo: "/projects/logo/nextjs.jpg", category: "frontend" },

  // Backend
  { name: "NodeJS", logo: "/projects/logo/nodejs.png", category: "backend" },
  {
    name: "ExpressJS",
    logo: "/projects/logo/expressjs.jpg",
    category: "backend",
  },
  { name: "MongoDB", logo: "/projects/logo/mongodb.png", category: "backend" },
  {
    name: "PostgreSQL",
    logo: "/projects/logo/elephant.png",
    category: "backend",
  },
  { name: "Python", logo: "/projects/logo/python.png", category: "backend" },
  { name: "FastAPI", logo: "/projects/logo/api.png", category: "backend" },
  { name: "Flutter", logo: "/projects/logo/flutter.jpg", category: "backend" },

  // Tools
  { name: "Git/GitHub", logo: "/projects/logo/github.png", category: "tools" },
  { name: "Docker", logo: "/projects/logo/docker.png", category: "tools" },
  { name: "Postman", logo: "/projects/logo/Postman.jpg", category: "tools" },
  {
    name: "Agentic AI",
    logo: "/projects/logo/ai-brain.png",
    category: "tools",
  },
  { name: "OpenCV", logo: "/projects/logo/ai.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.logo && (
                  <img
                    src={skill.logo}
                    alt={skill.name + " logo"}
                    className="w-7 h-7 object-contain"
                  />
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
