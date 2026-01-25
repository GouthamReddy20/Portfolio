function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between text-sm">

        {/* Logo Left */}
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-white">G</span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">R</span>
        </h1>

        {/* Links Center */}
        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        </div>

        {/* Contact Right */}
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition"
        >
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
