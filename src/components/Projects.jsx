import { motion } from "framer-motion";

const projects = [
  {
    title: "Toy Haven",
    image: "https://github.com/hasan8651/Toy-Haven-NextJS/raw/main/public/screenshot.png",
    description: "Toy Haven is a modern and responsive Toy Shop web application built using NextJS, React, Express, NextAuth, Tailwind CSS, and MongoDB where users can explore, add, and manage toys.",
    tech: ["NextJS (App Router)", "Tailwind CSS", "Express", "Firebase", "MongoDB", "NextAuth"],
    live: "https://toy-haven-nextjs.vercel.app/",
    github: "https://github.com/hasan8651/Toy-Haven-NextJS.git",
  },
  {
    title: "Study Pilot",
    image: "https://github.com/hasan8651/B12-A10-Future-Box-client/raw/main/public/screenshot.png",
    description:
      "Study Pilot is a full-stack online learning platform where users can explore, create, and enroll in courses. Built with the MERN stack and Firebase authentication.",
    tech: ["React", "Node.js", "Tailwind CSS", "Express.js", "MongoDB", "Firebase"],
    live: "https://b12-a10-future-box.netlify.app/",
    github: "https://github.com/hasan8651/B12-A10-Future-Box-client.git",
  },
  {
    title: "Hero.io",
    image: "https://github.com/hasan8651/assignment-eight-repo/raw/main/public/screenshot.png",
    description:
      "Hero.io is an interactive web platform that showcases trending productivity and utility applications with beautiful UI built using React Router, Tailwind CSS, and DaisyUI.",
    tech: ["React", "Tailwind CSS", "DaisyUI", "Recharts"],
    live: "https://assignment-eight-hasan8651.netlify.app/",
    github: "https://github.com/hasan8651/assignment-eight-repo.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-5 w-full flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:text-4xl font-bold mb-12 font-serif text-2xl bg-linear-to-br from-emerald-700 to-purple-700 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white dark:bg-gray-900 shadow-md shadow-gray-400 hover:shadow-lg transition duration-300 rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-medium transition"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
