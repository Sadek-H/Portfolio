import React from "react";
import { useParams } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Find Roommates",
    description: [
      "Users can add, update, delete, and view details of roommate listings.",
      "Firebase Authentication ensures only logged-in users can manage listings.",
    ],
    image: "https://i.postimg.cc/4d09N0Cw/Screenshot-14.png",
    liveLink: "https://fir-job-4414a.web.app",
    sourceLink: "https://github.com/Sadek-H/Roommate-Find-Client",
    technologies: ["React", "Tailwind CSS","React js", "Firebase","Express.js","MongoDB"],
  },
  {
    id: 2,
    title: "BookShelf",
    description: `An interactive online bookshelf application where users can browse, search, and filter books easily. Each book features a detailed page with user reviews, upvotes, and reading status updates. Users can manage their own book collection and visualize it through interactive charts.`,
    keyFeatures: [
      "Search & Filter: Quickly find books by title, author, or category with advanced filtering options.",
      "Book Details: View detailed information including reviews and upvotes.",
      "Reviews & Upvotes: Users can submit reviews and upvote books they like.",
      'Reading Status: Update your reading progress (e.g., "Reading", "Completed", "Want to Read").',
      "User Book Management: Add new books to the shelf; view, update, or delete your added books.",
      "User Profile with Visual Analytics: Profile page displays your added books; interactive charts powered by Recharts visualize your reading stats and book categories.",
    ],
    image: "https://i.postimg.cc/kGG52Fyz/Screenshot-7.png",
    liveLink: "https://fir-job-4414a.web.app",
    sourceLink: "https://github.com/Sadek-H/Virtual-Bookshelf-Client",
    technologies: ["Tailwind CSS", "React", "Firebase", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Local Market Price Tracker",
    description: [
      "Role-based dashboards for Admin, Vendor, and User",
      "Vendors can add, edit, and manage product prices",
      "Admins can approve or reject vendors, update roles, and edit vendor products",
      "Users can add products to a watchlist, order them, and compare price history",
      "Stripe payment integration for secure orders",
      "Firebase Authentication and JWT-based role protection",
      "Dynamic price comparison charts using Recharts",
    ],
    image: "https://i.ibb.co.com/0pwYG5qK/image.png",
    liveLink: "https://kachabazzarprice.netlify.app",
    sourceLink: "https://github.com/Sadek-H/Price-Tracker-of-Market-Client",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
    ],
  },
];

const techColors = {
  React: "bg-[#61dafb] text-[#20232a]",
  "Tailwind CSS": "bg-[#38b2ac] text-white",
  Firebase: "bg-[#f7c948] text-[#222222]",
  "Express.js": "bg-[#404d59] text-white",
  MongoDB: "bg-[#47a248] text-white",
  JavaScript: "bg-[#f0db4f] text-[#323330]",
  HTML: "bg-[#e34f26] text-white",
  CSS: "bg-[#264de4] text-white",
  GitHub: "bg-[#333] text-white",
  Figma: "bg-[#f24e1e] text-white",
  JWT: "bg-[#6e41e2] text-white",
  "Firebase Auth": "bg-[#ffca28] text-[#222222]",
  Stripe: "bg-[#6772e5] text-white",
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className=" bg-[#0D1117] min-h-screen text-white py-16 px-6">
      <div className="container mx-auto bg-[#1A2238] rounded-2xl p-8 shadow-xl border border-[#30363D]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-xl mb-8 border border-gray-700 shadow-lg"
        />
        <h1 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h1>

        {/* Description or Key Features */}
        {project.keyFeatures ? (
          <ul className="text-gray-300 mb-10 list-disc pl-8 space-y-3 text-lg leading-relaxed">
            {project.keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        ) : Array.isArray(project.description) ? (
          <ul className="text-gray-300 mb-10 list-disc pl-8 space-y-3 text-lg leading-relaxed">
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            {project.description}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.technologies.map((tech, i) => {
            const colorClass = techColors[tech] || "bg-gray-700 text-white";
            return (
              <span
                key={i}
                className={`${colorClass} px-5 py-2 rounded-full font-semibold text-base shadow-md transition-transform transform hover:scale-110 cursor-default select-none`}
                title={tech}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            aria-label="Live Demo"
          >
            Live Demo <FaExternalLinkAlt className="text-lg" />
          </a>

          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              aria-label="Source Code"
            >
              Source Code <FaGithub className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
