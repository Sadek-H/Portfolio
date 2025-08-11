import React from 'react';
import { useParams } from 'react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS.',
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    liveLink: 'https://your-portfolio.netlify.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'BookShelf',
    description: 'Online Bookshelf with cart and payment integration.',
    image: 'https://i.postimg.cc/kGG52Fyz/Screenshot-7.png',
    liveLink: 'https://fir-job-4414a.web.app',
    technologies: ['Tailwind Css','React', 'Firebase', 'Express.js','MongoDB'],
  },
  {
    id: 3,
    title: 'Local Market Price Tracker',
   description: [
    'Role-based dashboards for Admin, Vendor, and User',
    'Vendors can add, edit, and manage product prices',
    'Admins can approve or reject vendors, update roles, and edit vendor products',
    'Users can add products to a watchlist, order them, and compare price history',
    'Stripe payment integration for secure orders',
    'Firebase Authentication and JWT-based role protection',
    'Dynamic price comparison charts using Recharts',
  ],
    image: 'https://i.ibb.co.com/0pwYG5qK/image.png',
    liveLink: 'https://kachabazzarprice.netlify.app',
    technologies: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Firebase Auth','JWT', 'Stripe'],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-2xl">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#0D1117] min-h-screen text-white py-10 px-6">
      <div className="max-w-5xl mx-auto bg-[#1A2238] p-6 rounded-xl shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <ul className="text-gray-300 mb-6 list-disc pl-6 space-y-2">
  {Array.isArray(project.description)
    ? project.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))
    : <li>{project.description}</li>}
</ul>


        <div className="flex items-center flex-wrap gap-3 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-[#334155] px-3 py-1 rounded-full text-sm text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
        >
          Live Demo <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
