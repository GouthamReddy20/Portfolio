function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      color: "from-blue-500 to-cyan-400",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-400",
      skills: ["React", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend",
      color: "from-cyan-500 to-blue-400",
      skills: ["Node.js", "Express.js", "Spring Boot"],
    },
    {
      title: "Databases",
      color: "from-indigo-500 to-purple-400",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Core CS",
      color: "from-blue-400 to-purple-400",
      skills: ["DSA", "OOP"],
    },
    {
      title: "Tools",
      color: "from-pink-500 to-cyan-400",
      skills: ["VS Code", "Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-6xl w-full">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:border-white/20 transition duration-300"
              >
                <h3
                  className={`font-semibold mb-4 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/10 border border-white/10 rounded-full text-gray-300 hover:border-blue-400 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
