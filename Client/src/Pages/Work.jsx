import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { useInView } from '../Hooks/useInView';

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with MERN Stack.",
    image: "/Portfolio.png",
    link: "#"
  },
  {
    title: "Chat GPT Clone",
    description: "ChatGPT clone is a clone of ChatGPT developed using React.js, TypeScript, and an API key.",
    image: "/ChatGPTClone.png",
    link: "https://chat-gpt-clone-vert-phi.vercel.app/"
  },
  {
    title: "Kalakriti E-Commerce",
    description: "Multi-user e-commerce website built with the MERN stack that sells furniture with authentication and authorization.",
    image: "/Kalakriti.png",
    link: "https://kalakriti-mern.vercel.app/"
  },
  {
    title: "Wanderlust",
    description: "Wanderlust is a web app like Airbnb through which we can see hotels, rooms, and so on. Developed a website using MERN Stack Development",
    image: "/Wanderlust.png",
    link: "https://wanderlust-kbpq.onrender.com/listings"
  },
  {
    title: "Weather App",
    description: "A website that gives the real-time weather report of a searched city with images according to the weather. Developed using React.js.",
    image: "/WeatherApp.png",
    link: "https://react-project-blue-mu.vercel.app/"
  },
  {
    title: "Quiz App",
    description: "A web app that allows users to take quizzes on various topics.",
    image: "/Quiz.png",
    link: "https://quiz-app-tau-gray.vercel.app/"
  }
];

const Work = () => {

  const [headerRef, headerVisible] = useInView(0.3);
  const [cardRef, cardVisible] = useInView(0.3);


  return (
    <div className="w-screen h-auto lg:h-screen py-10  flex flex-col items-center justify-center px-5 lg:px-20 bg-[#286f6b] gap-5 lg:gap-0" id="work">
      <div ref={headerRef} className={`header h-auto flex items-center justify-center mb-5 lg:mb-20 fade-up ${headerVisible ? "visible" : ""}`}>
          <h1 className='text-center text-3xl lg:text-6xl text-[#e2eddf] font-bold'>Projects</h1>
      </div>
      <div className="relative w-full max-w-8xl h-[70%] overflow-hidden flex items-center justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
          loop={true}
          spaceBetween={32}
          slidesPerView={'auto'}
          breakpoints={{
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          ref={cardRef}
          className={`w-full h-auto lg:h-full swiper-container fade-up ${cardVisible ? "visible" : ""}`}
            onSwiper={(swiper) => {
          // Save swiper instance for controlling autoplay
          swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
          swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
  }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[340px] max-w-md bg-white rounded-xl shadow-lg p-6 flex-shrink-0 transform transition duration-300 hover:z-20 flex flex-col items-center"
                style={{ 
                  height: '430px' 
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="swiper-lazy w-full h-56 object-cover rounded-lg mb-4 shadow-[#286f6b] shadow-2xl/30"
                />
                <div className="swiper-lazy-preloader"></div>
                <h2 className="text-2xl font-semibold text-[#286f6b] mb-2">{project.title}</h2>
                <p className="text-gray-600 text-base">{project.description}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Work;