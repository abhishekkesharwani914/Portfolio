import React from "react";

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[340px] max-w-md bg-white rounded-xl shadow-lg p-6 flex-shrink-0 transform transition duration-300 hover:z-20 flex flex-col items-center"
    style={{ height: '430px' }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="swiper-lazy w-full h-56 object-cover rounded-lg mb-4 shadow-[#286f6b] shadow-2xl/30"
      loading="lazy"
    />
    <div className="swiper-lazy-preloader"></div>
    <h2 className="text-2xl font-semibold text-[#286f6b] mb-2">{project.title}</h2>
    <p className="text-gray-600 text-base">{project.description}</p>
  </a>
);

export default ProjectCard;