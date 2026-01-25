import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server not reachable ❌");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 flex justify-center animate-fadeInUp">
      <div className="relative max-w-4xl w-full">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

        <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-14 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 mb-10">
            Interested in working together? Send me a message and I’ll get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
            />

            <button
              type="submit"
              className="mt-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 font-semibold hover:scale-105 transition transform"
            >
              Send Message
            </button>

            {status && <p className="text-gray-400 mt-3">{status}</p>}
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 text-2xl text-gray-400 mt-10">
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
      </div>
    </section>
  );
}

export default Contact;
