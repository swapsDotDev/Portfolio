import { ArrowRight, ExternalLink, Github, Loader2, Terminal, Folder, Star, Calendar } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

// Constants
const GITHUB_USERNAME = "swapsDotDev";

const PROJECT_DETAILS = {
  "avkash": {
    title: "Avkash – Leave Portal & HRMS",
    description: "End-to-end HR management and leave tracking system with real-time notifications, dashboards, and role-based access.",
    techStack: ["ReactJS", "FastAPI", "MongoDB", "Radix UI"],
    image: "projects/avkash.png",
    featured: true,
    category: "fullstack",
    status: "production"
  },
  "green_vision": {
    title: "GreenVision – Afforestation App", 
    description: "AI-powered mobile & web platform that analyzes satellite images to estimate afforestation potential using OpenCV and Flask.",
    techStack: ["Python", "Flutter", "MongoDB", "OpenCV"],
    image: "projects/greenvision.png",
    featured: true,
    category: "ai-ml",
    status: "production"
  },
  "Portfolio": {
    title: "Personal Portfolio Website",
    description: "Responsive and modern portfolio website built with React and Vite, featuring dynamic GitHub integration and modern UI components.",
    techStack: ["React", "Vite", "TailwindCSS", "Lucide Icons"],
    image: "projects/portfolio.png", 
    featured: true,
    category: "frontend",
    status: "active"
  },
  "Acress99-Real-Estate-Web-App": {
    title: "Acres99 – Real Estate Platform",
    description: "Property listing platform with MySQL-backed PHP backend and user-friendly frontend for seamless property browsing and management.",
    techStack: ["React", "PHP", "MySQL", "Bootstrap"],
    image: "projects/acres99.png",
    featured: true,
    category: "fullstack",
    status: "production"
  },
  "real-time-task-board": {
    title: "Real-Time Task Board",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "projects/taskboard.png",
    featured: true,
    category: "fullstack",
    status: "development"
  },
  "mychoice_landingpage": {
    title: "MyChoice – Landing Page",
    description: "A modern, responsive homepage for MyChoice - a free online self-exclusion platform for New Zealand. It acts as a national register for individuals to willingly block online gambling sites.",
    techStack: ["React", "TailwindCSS", "Lucide Icons", "React Icons"],
    image: "projects/mychoice.png",
    featured: true,
    category: "frontend",
    status: "production"
  },
  "url-shortener": {
    title: "URL Shortener",
    description: "A Flask-based URL shortening service similar to TinyURL, built with MySQL (no ORM) and vanilla HTML/CSS.",
    techStack: ["Flask", "MySQL", "HTML", "CSS", "GitHub Actions", "Pytest"],
    image: "projects/urlshortner.png",
    featured: true,
    category: "backend",
    status: "production"
  },
  "civic-voice": {
    title: "Civic Voice – Community Engagement",
    description: "A community engagement platform that connects citizens with local government initiatives, featuring event management, feedback collection, and resource sharing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "projects/civicvoice.png",
    featured: true,
    category: "fullstack",
    status: "development"
  },
  "movie-database-app": {
    title: "Movie Database App",
    description: "A modern, responsive web app to browse and search for movies using the OMDb API. By default, it displays a curated list of top-rated movies (sorted by IMDb rating). Users can search for any movie, paginate through results, and reset to the top-rated list at any time.",
    techStack: ["React", "OMDb API", "TailwindCSS"],
    image: "projects/project1.png",
    featured: true,
    category: "frontend",
    status: "production"
  },
  "leave-management-microservice": {
    title: "Leave Management Microservice",
    description: "A simple but real-world Spring Boot microservice to manage employee leave requests. It demonstrates: REST APIs, PostgreSQL DB, Apache Kafka integration, Docker & Docker Compose, CI/CD basics with Maven.",
    techStack: ["Spring Boot", "PostgreSQL", "Apache Kafka", "Docker"],
    image: "projects/project2.png",
    featured: true,
    category: "backend",
    status: "production"
  }
};

const FEATURED_REPOS = Object.keys(PROJECT_DETAILS);

// Fallback projects in case GitHub API fails
const fallbackProjects = [
  {
    id: 1,
    name: "Avkash – Leave Portal & HRMS",
    title: "Avkash – Leave Portal & HRMS",
    enhancedDescription: "End-to-end HR management and leave tracking system with real-time notifications, dashboards, and role-based access.",
    html_url: "https://github.com/swapsDotDev/avkash",
    homepage: null,
    language: "JavaScript",
    techStack: ["ReactJS", "FastAPI", "MongoDB", "Radix UI"],
    topics: ["reactjs", "fastapi", "mongodb", "radix-ui"],
    stargazers_count: 0,
    updated_at: "2024-01-01T00:00:00Z",
    image: "projects/avkash.png",
    isFeatured: true,
    category: "fullstack",
    status: "production"
  },
  {
    id: 2,
    name: "GreenVision – Afforestation App",
    title: "GreenVision – Afforestation App",
    enhancedDescription: "AI-powered mobile & web platform that analyzes satellite images to estimate afforestation potential using OpenCV and Flask.",
    html_url: "https://github.com/swapsDotDev/green_vision",
    homepage: null,
    language: "Python",
    techStack: ["Python", "Flutter", "MongoDB", "OpenCV"],
    topics: ["python", "flutter", "mongodb", "opencv"],
    stargazers_count: 0,
    updated_at: "2024-01-01T00:00:00Z",
    image: "projects/greenvision.png",
    isFeatured: true,
    category: "ai-ml",
    status: "production"
  }
];

const TERMINAL_COMMANDS = [
  "$ ls projects/",
  "$ find . -name '*.json' | head -5",
  "$ git log --oneline | head -3",
  "$ docker ps | grep production",
];

// Utility Functions
const formatLanguageTag = (language) => language || "Misc";

const getStatusConfig = (status) => {
  const statusMap = {
    production: { color: "text-green-400", icon: "🟢" },
    active: { color: "text-blue-400", icon: "🔵" },
    development: { color: "text-yellow-400", icon: "🟡" },
  };
  return statusMap[status] || { color: "text-gray-400", icon: "⚪" };
};

const getCategoryIcon = (category) => {
  const categoryMap = {
    fullstack: "🌐",
    frontend: "🎨",
    backend: "⚙️",
    "ai-ml": "🤖",
    mobile: "📱",
  };
  return categoryMap[category] || "💻";
};

const getProjectImage = (project) => project.image || "projects/project1.png";

// Reusable Components
const TechTag = ({ tech }) => (
  <span className="px-2 py-0.5 text-xs font-mono bg-slate-700/50 text-gray-300 rounded border border-slate-600/30">
    {tech}
  </span>
);

const StatusBadge = ({ status }) => {
  const { color, icon } = getStatusConfig(status);
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs">{icon}</span>
      <span className={`text-xs font-mono ${color}`}>{status}</span>
    </div>
  );
};

const ProjectLinks = ({ project }) => (
  <div className="flex items-center gap-3">
    {project.homepage && (
      <a
        href={project.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1"
        title="Live Demo"
      >
        <ExternalLink className="h-4 w-4" />
        <span className="text-xs font-mono">demo</span>
      </a>
    )}
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
      title="View Source Code"
    >
      <Github className="h-4 w-4" />
      <span className="text-xs font-mono">code</span>
    </a>
  </div>
);

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);

  // Typing Animation
  useEffect(() => {
    if (currentCommand >= TERMINAL_COMMANDS.length) return;
    const command = TERMINAL_COMMANDS[currentCommand];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= command.length) {
        setTypingText(command.slice(0, charIndex++));
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setCurrentCommand((prev) => (prev + 1) % TERMINAL_COMMANDS.length), 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentCommand]);

  // Fetch GitHub Projects
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`
        );
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const allRepos = await response.json();

        const featuredProjects = allRepos
          .filter((repo) => FEATURED_REPOS.includes(repo.name))
          .map((repo) => ({
            ...repo,
            ...PROJECT_DETAILS[repo.name],
            title: PROJECT_DETAILS[repo.name]?.title || repo.name,
            enhancedDescription: PROJECT_DETAILS[repo.name]?.description || repo.description,
            techStack: PROJECT_DETAILS[repo.name]?.techStack || [repo.language].filter(Boolean),
            image: PROJECT_DETAILS[repo.name]?.image || "projects/project1.png",
            isFeatured: PROJECT_DETAILS[repo.name]?.featured || false,
            category: PROJECT_DETAILS[repo.name]?.category || "misc",
            status: PROJECT_DETAILS[repo.name]?.status || "development",
          }));

        const foundRepoNames = new Set(featuredProjects.map((p) => p.name));
        const missingProjects = FEATURED_REPOS.filter((name) => !foundRepoNames.has(name)).map(
          (name) => ({
            id: `fallback-${name}`,
            name,
            ...PROJECT_DETAILS[name],
            html_url: `https://github.com/${GITHUB_USERNAME}/${name}`,
            homepage: null,
            language: PROJECT_DETAILS[name]?.techStack?.[0] || "JavaScript",
            topics: [],
            stargazers_count: 0,
            updated_at: new Date().toISOString(),
          })
        );

        const projectsToShow = featuredProjects.length > 0
          ? [...featuredProjects, ...missingProjects]
          : allRepos
              .filter((repo) => !repo.fork && !repo.private)
              .slice(0, 12)
              .map((repo) => ({
                ...repo,
                title: repo.name,
                enhancedDescription: repo.description,
                techStack: [repo.language].filter(Boolean),
                image: "projects/project1.png",
                isFeatured: false,
                category: "misc",
                status: "development",
              }));

        setProjects(projectsToShow);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub projects:", err);
        setError(err.message);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Memoized Stats
  const stats = useMemo(
    () => ({
      total: projects.length,
      production: projects.filter((p) => p.status === "production").length,
      technologies: [...new Set(projects.flatMap((p) => p.techStack || [p.language]).filter(Boolean))].length,
      stars: projects.reduce((sum, p) => sum + (p.stargazers_count || 0), 0),
    }),
    [projects]
  );

  if (loading) {
    return (
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 mb-4">
            <Terminal className="h-5 w-5" />
            <span className="font-mono text-sm">/home/swapnil/projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gray-100">Featured</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
              Projects
            </span>
          </h2>
          <div className="flex justify-center items-center py-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
              <span className="font-mono text-sm text-gray-300">git clone projects from GitHub...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 relative">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-emerald-500 mb-4">
            <Terminal className="h-5 w-5" />
            <span className="font-mono text-sm">/home/swapnil/projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gray-100">Featured</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            A showcase of projects where I've applied technology to build practical, scalable, and user-focused applications that solve real-world problems.
          </p>
          <div className="max-w-lg mx-auto">
            <div className="bg-[#0D1117] rounded-lg border border-[#30363D]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#161B22] border-b border-[#30363D] rounded-t-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-xs text-gray-400 font-mono">projects.sh</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-emerald-400">{typingText}</span>
                <span className="animate-pulse text-emerald-400 ml-1">█</span>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-yellow-400 font-mono text-sm">
                <Terminal className="h-4 w-4" />
                <span>Warning: GitHub API connection failed - using cached data</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-700/20">
                <img
                  src={getProjectImage(project)}
                  alt={project.title || project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) =>
                    (e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvamVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+")
                  }
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-blue-400" />
                    <span className="text-xs font-mono text-gray-400">{project.category}</span>
                    <span className="text-xs">{getCategoryIcon(project.category)}</span>
                  </div>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack?.length > 0 ? (
                    project.techStack.slice(0, 4).map((tech, idx) => <TechTag key={idx} tech={tech} />)
                  ) : (
                    <>
                      {project.language && <TechTag tech={formatLanguageTag(project.language)} />}
                      {project.topics?.slice(0, 3).map((topic, idx) => <TechTag key={idx} tech={topic} />)}
                    </>
                  )}
                  {project.stargazers_count > 0 && (
                    <span className="px-2 py-0.5 text-xs font-mono bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {project.stargazers_count}
                    </span>
                  )}
                  {project.isFeatured && (
                    <span className="px-2 py-0.5 text-xs font-mono bg-emerald-500/20 text-emerald-400 rounded border border-emerald-500/30">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300 leading-tight">
                  {project.title || project.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {project.enhancedDescription || project.description || "No description available"}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
                  <ProjectLinks project={project} />
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs font-mono">
                      {new Date(project.updated_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 
                       bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 
                       text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold 
                       hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>./view-all-projects.sh</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>


        <div className="mt-16 pt-16 border-t border-slate-700/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: stats.total, label: "Projects", color: "text-emerald-400" },
              { value: stats.production, label: "Production", color: "text-blue-400" },
              { value: stats.technologies, label: "Technologies", color: "text-purple-400" },
              { value: stats.stars, label: "GitHub Stars", color: "text-yellow-400" },
            ].map(({ value, label, color }) => (
              <div key={label} className="bg-slate-800/20 backdrop-blur border border-slate-700/30 rounded-lg p-4">
                <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
                <div className="text-xs font-mono text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
}
