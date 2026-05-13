function Projects() {
  const projects = [
    {
      title: "Zero Waste Food Rescue Platform",
      description:
        "A full-stack platform connecting food donors with NGOs and volunteers to reduce food waste.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      live: "https://zerowaste-frontend-one.vercel.app",
      github: "https://github.com/GouthamReddy20/zerowaste-platform",
    },
    {
      title: "Movie Review Platform",
      description:
        "A movie discovery and review app with authentication and TMDB API integration.",
      tech: ["React", "Node.js", "PostgreSQL"],
      live: "https://movie-review-frontend-swart.vercel.app/",
      github: "https://github.com/GouthamReddy20/movie-review-platform-supabase",
    },
        {
      title: "neurofleet.ai",
      description:
        "A full-stack web application that connects users to smart bus booking system in real-time and getting updates regarding the traffics.",
      tech: ["TypeScript", "Firebase", "Maps Integration", "next.js"],
      github: "https://github.com/GouthamReddy20/neurofleet.ai",
    },
    {
      title: "Team Task Manager",
      description:
        "A full-stack web application that connects both the Admin and Members which is used to assign and manage the projects and tasks.",
      tech: ["React", "Node", "Express", "Pg SQL"],
      live: "https://team-task-manager-swart-eight.vercel.app/",
      github: "https://github.com/GouthamReddy20/team-task-manager",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A machine learning project that suggests movies using data filtering techniques.",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/GouthamReddy20/Movie-Recommendation-System",
    },
    {
      title: "Airbnb Clone (MERN Stack)",
      description:
        "A full-stack property rental platform built with the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/GouthamReddy20/airbnb",
    },

  ];

  return (
<section id="projects" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-7xl w-full">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* 3 PROJECTS PER ROW */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 hover:border-white/20 transition duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-white/10 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 font-semibold hover:scale-105 transition transform"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 text-xs rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
