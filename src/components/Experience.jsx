function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Smarted Innovations",
      description:
        "Worked on full-stack web development using React, Node.js, and MySQL. Built RESTful APIs and improved UI responsiveness and performance.",
      certificate: "/smarted-certificate.pdf",
      color: "from-blue-500 to-cyan-400",
    },
    {
      role: "Java Full Stack Intern",
      company: "Infosys Springboard",
      description:
        "Contributed to full-stack development in team environment, participating in code reviews and project discussions and delivered 7 major project milestones",
      certificate: "https://drive.google.com/file/d/1plLyhPpjXPNBDEKs_dCsbPh2LFQGDB6y/view?usp=drivesdk",
      color: "from-purple-500 to-pink-400",
    },
        {
      role: "AWS Cloud Practitioner",
      company: "Amazon Web Services",
      description:
        "I earned the AWS Certified Cloud Practitioner certification, strengthening my knowledge of cloud computing, AWS services, and deployment strategies.",
      certificate: "https://www.credly.com/badges/97a4dede-4daf-45e1-b253-5af3c1e25c4b/public_url",
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-6xl w-full">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 hover:border-white/20 transition duration-300"
              >
                <div>
                  <h3 className={`text-xl font-semibold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.role}
                  </h3>

                  <p className="text-gray-300 font-medium mb-3">{exp.company}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start px-5 py-2 text-sm rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
