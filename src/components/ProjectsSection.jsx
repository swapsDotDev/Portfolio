import { ArrowRight, ExternalLink, Github, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

// GitHub username - you can change this to your GitHub username
const GITHUB_USERNAME = "swapsDotDev";

// Featured repositories with enhanced project details
const PROJECT_DETAILS = {
  "avkash": {
    title: "Avkash – Leave Portal & HRMS",
    description: "End-to-end HR management and leave tracking system with real-time notifications, dashboards, and role-based access.",
    techStack: ["ReactJS", "FastAPI", "MongoDB", "Radix UI"],
    image: "projects/avkash.png",
    featured: true
  },
  "green_vision": {
    title: "GreenVision – Afforestation App", 
    description: "AI-powered mobile & web platform that analyzes satellite images to estimate afforestation potential using OpenCV and Flask.",
    techStack: ["Python", "Flutter", "MongoDB", "OpenCV"],
    image: "projects/greenvision.png",
    featured: true
  },
  "Portfolio": {
    title: "Personal Portfolio Website",
    description: "Responsive and modern portfolio website built with React and Vite, featuring dynamic GitHub integration and modern UI components.",
    techStack: ["React", "Vite", "TailwindCSS", "Lucide Icons"],
    image: "projects/portfolio.png", 
    featured: true
  },
  "Acress99-Real-Estate-Web-App": {
    title: "Acres99 – Real Estate Platform",
    description: "Property listing platform with MySQL-backed PHP backend and user-friendly frontend for seamless property browsing and management.",
    techStack: ["React", "PHP", "MySQL", "Bootstrap"],
    image: "projects/acres99.png",
    featured: true
  },
  "real-time-task-board": {
    title: "Real-Time Task Board",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "projects/taskboard.png",
    featured: true
  },
  "mychoice_landingpage": {
    title: "MyChoice – Landing Page",
    description: "A modern, responsive homepage for MyChoice - a free online self-exclusion platform for New Zealand. It acts as a national register for individuals to willingly block online gambling sites.",
    techStack: ["React", "TailwindCSS", "Lucide Icons", "React Icons"],
    image: "projects/mychoice.png",
    featured: true
  },
  "url-shortener": {
    title: "URL Shortener",
    description: "A Flask-based URL shortening service similar to TinyURL, built with MySQL (no ORM) and vanilla HTML/CSS.",
    techStack: ["Flask", "MySQL", "HTML", "CSS", "GitHub Actions - CI/CD", "Pytest"],
    image: "projects/url-shortener.png",
    featured: true
  },
  "civic-voice": {
    title: "Civic Voice – Community Engagement",
    description: "A community engagement platform that connects citizens with local government initiatives, featuring event management, feedback collection, and resource sharing.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "projects/civicvoice.png",
    featured: true
  },
  "movie-database-app": {
    title: "Movie Database App",
    description: "A modern, responsive web app to browse and search for movies using the OMDb API. By default, it displays a curated list of top-rated movies (sorted by IMDb rating). Users can search for any movie, paginate through results, and reset to the top-rated list at any time.",
    techStack: ["React", "OMDb API", "TailwindCSS"],
    image: "projects/movie-database-app.png",
    featured: true
  },
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
    isFeatured: true
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
    isFeatured: true
  }
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        
        // Fetch user's repositories
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const allRepos = await response.json();
        
        // Filter and enhance featured repositories
        const featuredProjects = allRepos
          .filter(repo => FEATURED_REPOS.includes(repo.name))
          .map(repo => {
            const projectDetails = PROJECT_DETAILS[repo.name];
            return {
              ...repo,
              // Override with enhanced details if available
              title: projectDetails?.title || repo.name,
              enhancedDescription: projectDetails?.description || repo.description,
              techStack: projectDetails?.techStack || [repo.language].filter(Boolean),
              image: projectDetails?.image || "projects/project1.png",
              isFeatured: projectDetails?.featured || false
            };
          });
        
        // If no featured projects found, take the most recent public repos and enhance them
        const projectsToShow = featuredProjects.length > 0 
          ? featuredProjects 
          : allRepos
              .filter(repo => !repo.fork && !repo.private)
              .slice(0, 6)
              .map(repo => ({
                ...repo,
                title: repo.name,
                enhancedDescription: repo.description,
                techStack: [repo.language].filter(Boolean),
                image: "projects/project1.png",
                isFeatured: false
              }));
        
        setProjects(projectsToShow);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub projects:", err);
        setError(err.message);
        setProjects(fallbackProjects); // Use fallback projects
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const formatLanguageTag = (language) => {
    if (!language) return "Misc";
    return language;
  };

  const getProjectImage = (project) => {
    return project.image || "projects/project1.png";
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading projects from GitHub...</span>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of projects where I&apos;ve applied technology to build
          practical, scalable, and user-focused applications that solve
          real-world problems.
        </p>

        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200">
              Note: Using cached project data. GitHub API: {error}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={getProjectImage(project)}
                  alt={project.title || project.name}
                  className="w-full h-full object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Show custom tech stack if available, otherwise show GitHub language and topics */}
                  {project.techStack && project.techStack.length > 0 ? (
                    project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <>
                      {/* Show primary language */}
                      {project.language && (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                          {formatLanguageTag(project.language)}
                        </span>
                      )}
                      
                      {/* Show topics/tags */}
                      {project.topics && project.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </>
                  )}
                  
                  {/* Show star count if > 0 */}
                  {project.stargazers_count > 0 && (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                      ⭐ {project.stargazers_count}
                    </span>
                  )}
                  
                  {/* Show featured badge */}
                  {project.isFeatured && (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title || project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.enhancedDescription || project.description || "No description available"}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View Source"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Updated: {new Date(project.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${GITHUB_USERNAME}`}
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
