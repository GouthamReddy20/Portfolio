import toast from "react-hot-toast";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Smarted Innovations",
      description:
        "Worked on full-stack web development using React, Node.js, and MySQL. Built RESTful APIs and improved UI responsiveness and performance.",
      cert: "Smarted Innovations Internship Certificate",
      color: "from-blue-500 to-cyan-400",
    },
    {
      role: "Java Developer Intern",
      company: "CodeAlpha",
      description:
        "Completed a 30-day internship focused on Java and OOP concepts. Developed modular applications including a Student Grade Tracker and Hotel Reservation System.",
      cert: "CodeAlpha Internship Certificate",
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-6xl w-full">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {/* COLUMN LAYOUT */}
          <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 hover:border-white/20 transition duration-300"
              >
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                  >
                    {exp.role}
                  </h3>

                  <p className="text-gray-300 font-medium mb-3">{exp.company}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <button
                  onClick={() => toast.success(`${exp.cert} sent successfully!`)}
                  className="self-start px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 font-semibold hover:scale-105 transition transform"
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
