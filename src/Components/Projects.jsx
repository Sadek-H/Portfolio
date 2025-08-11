import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React and Tailwind CSS.',
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
  },
  {
    id: 2,
    title: 'BookShelf',
    description: 'Full-featured online Bookshelf with cart and payment integration.',
    image: 'https://i.ibb.co.com/FbYZck5Q/Screenshot-3.png',
  },
  {
    id: 3,
    title: 'Local Market Price Tracker',
    description: 'A real-time web application to track daily product prices from local markets.',
    image: 'https://i.ibb.co.com/DZpk8XZ/image.png',
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl font-bold text-center mb-10">My Projects</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
       breakpoints={{
  0: {
    slidesPerView: 1, // Very small devices
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 2, // Small devices (phones)
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2, // Tablets
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3, // Desktops
    spaceBetween: 40,
  },
}}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="bg-[#1e293b] text-white rounded-xl overflow-hidden shadow-lg p-4 max-w-sm mx-auto h-full flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 text-center">{project.description}</p>
              <Link
                to={`project/${project.id}`}
                className="text-blue-400 hover:text-blue-500 font-medium underline"
              >
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
