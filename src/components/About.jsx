function About() {
  return (
    <section id="about" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-6xl w-full">

        {/* Gradient Glow Background (Hero Colors) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        {/* Glass Card */}
        <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 grid md:grid-cols-2 gap-12 items-center hover:scale-[1.01] transition duration-500">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am a passionate Full Stack Developer with a strong interest in designing
              scalable systems and solving real-world problems. I enjoy building
              responsive user interfaces and developing robust backend architectures.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My focus is on writing clean, maintainable code and continuously learning
              modern technologies to create impactful digital solutions that improve
              user experiences and system performance.
            </p>
          </div>

          {/* RIGHT HIGHLIGHT CARDS */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="font-semibold text-blue-400 mb-2">💡 Problem Solver</h3>
              <p className="text-gray-400 text-sm">
                Passionate about turning complex challenges into elegant technical solutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500 transition">
              <h3 className="font-semibold text-purple-400 mb-2">⚙️ Full Stack Focus</h3>
              <p className="text-gray-400 text-sm">
                Experience building complete web systems from UI to scalable backend services.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition">
              <h3 className="font-semibold text-cyan-400 mb-2">🚀 Continuous Learner</h3>
              <p className="text-gray-400 text-sm">
                Always exploring new tools and technologies to stay ahead in development.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
