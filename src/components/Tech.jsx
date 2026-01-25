function Tech() {
  const skills = [
    "React", "JavaScript", "Tailwind CSS",
    "Node.js", "Express.js",
    "PostgreSQL", "Supabase",
    "Git", "GitHub", "Postman"
  ];

  return (
    <section className="py-24 px-6 text-center bg-black">
      <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-900 px-5 py-2 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Tech;
