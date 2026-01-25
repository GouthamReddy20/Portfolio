import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28">
      {/* ⬇️ Reduced max width so content comes closer */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Goutham Reddy
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            Full Stack Developer passionate about building scalable web
            applications and solving real-world problems using modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 font-semibold hover:scale-105 transition transform"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-gray-400 animate-fadeIn delay-300">
            <a href="https://github.com/GouthamReddy20" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/c-s-goutham-reddy-ab8800343/" target="_blank" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/c.s.gouthamreddy_18?igsh=MTFrZ3ZkNXk0aWFoYw==" target="_blank" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

{/* RIGHT IMAGE */}
<div className="flex justify-center md:justify-end items-start animate-fadeInRight -mt-24 md:ml-10">
  <img
    src="/profile.jpg"
    alt="Goutham Reddy"
    className="w-72 h-72 object-cover rounded-2xl border border-white/10 shadow-xl hover:scale-105 transition duration-500"
  />
</div>



      </div>
    </section>
  );
}

export default Hero;
