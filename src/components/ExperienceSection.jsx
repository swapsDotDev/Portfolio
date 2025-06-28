import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  Zap,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Posit Source Technologies",
    location: "Pune, India",
    date: "Jan 2025 - June 2025",
    description:
      "Worked on full-stack web application development using ReactJS, Node.js, and Python. Lead initiatives to automate manual processes and reduce errors by 30%. Refactored existing codebases and optimized data handling, improving application performance by 15%. Collaborated with cross-functional teams to deliver scalable and maintainable solutions aligned with business goals.",
    skills: ["ReactJS", "Node.js", "Python", "ExpressJS", "FastAPI"],
    impact: "Improved app performance by 15% and reduced errors by 30%",
    type: "internship",
  },
  {
    title: "Freelance Web Developer",
    company: "Independent",
    location: "Remote",
    date: "Jan 2022 - Present",
    description:
      "Delivered tailored websites and web applications for clients across various industries, emphasizing clean UI, mobile responsiveness, and performance. Implemented scalable backend systems using Node.js and MongoDB, and crafted intuitive UIs with React and Tailwind CSS. Known for strong communication and a client-centric approach that resulted in 20+ successful project deliveries.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind", "JavaScript"],
    impact: "Delivered few custom web solutions with high client satisfaction",
    type: "freelance",
  },
];

const highlights = [
  {
    icon: Code,
    text: "3+ years hands-on experience of projects",
    color: "text-blue-500",
  },
  { icon: Zap, text: "Modern tech stacks mastery", color: "text-purple-500" },
  {
    icon: Trophy,
    text: "Deployed projects successfully",
    color: "text-orange-500",
  },
  { icon: Sparkles, text: "Client satisfaction 100%", color: "text-green-500" },
];

export const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredHighlight, setHoveredHighlight] = useState(null);

  return (
    <section
      id="experience"
      className="py-20 px-2 relative overflow-hidden bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full text-xs font-medium text-foreground mb-3">
            <Briefcase className="h-3 w-3" />
            Professional Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-center">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`relative transition-all duration-500 ${
                      activeCard === idx ? "scale-[1.03]" : "hover:scale-[1.01]"
                    }`}
                    onMouseEnter={() => setActiveCard(idx)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="absolute left-2 top-6 z-10">
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-background shadow-lg transition-all duration-300 ${
                          activeCard === idx
                            ? "bg-primary scale-110 shadow-primary/20"
                            : "bg-primary/80"
                        }`}
                      >
                        <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                          <Briefcase className="h-2.5 w-2.5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="ml-14 group">
                      <div
                        className={`relative p-5 rounded-md transition-all duration-500 border text-left ${
                          activeCard === idx
                            ? "bg-card border-primary/40 shadow-lg"
                            : "bg-card border-border hover:border-primary/20"
                        }`}
                      >
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-bold text-card-foreground mb-0.5 group-hover:text-primary transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-sm font-medium text-primary">
                                {exp.company}
                              </p>
                            </div>
                            <div
                              className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                                exp.type === "internship"
                                  ? "bg-secondary text-secondary-foreground"
                                  : "bg-accent text-accent-foreground"
                              }`}
                            >
                              {exp.type === "internship"
                                ? "Internship"
                                : "Freelance"}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3 mb-2 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.date}
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {exp.skills.map((skill, skillIdx) => (
                              <span
                                key={skillIdx}
                                className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full border border-border hover:bg-accent transition-colors cursor-pointer"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-xs font-medium text-primary">
                            <Trophy className="h-3 w-3" />
                            {exp.impact}
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="sticky top-8 text-left">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Key <span className="text-primary">Highlights</span>
              </h3>
              <div className="space-y-2">
                {highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className={`group relative p-4 rounded-md cursor-pointer transition-all duration-300 border ${
                      hoveredHighlight === idx
                        ? "scale-105 shadow-lg bg-card border-primary/40"
                        : "hover:scale-102 bg-card border-border"
                    }`}
                    onMouseEnter={() => setHoveredHighlight(idx)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full bg-secondary transition-transform group-hover:scale-110`}
                      >
                        <highlight.icon
                          className={`h-4 w-4 ${highlight.color}`}
                        />
                      </div>
                      <span className="font-medium text-card-foreground group-hover:text-primary transition-colors text-sm">
                        {highlight.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-secondary rounded-md border border-border">
                <div className="text-left">
                  <div className="text-2xl font-bold text-primary mb-1">1</div>
                  <div className="text-xs text-muted-foreground">
                    Year of Professional Experience
                  </div>
                  <div className="mt-3 w-full bg-background rounded-full h-1.5">
                    <div
                      className="bg-primary h-1.5 rounded-full animate-pulse"
                      style={{ width: "20%" }}
                    ></div>
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
