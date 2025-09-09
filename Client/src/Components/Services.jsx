import React from 'react';
import { useInView } from '../Hooks/useInView';

// Example icons (use your own SVGs or images)
const serviceIcons = [
  "fa-solid fa-globe",        // Web Development
  "fa-solid fa-paintbrush",       // UI/UX Design
  "fa-regular fa-file-alt",     // Resume Writing
  "fa-regular fa-file-powerpoint", // Presentation Design
  "fa-solid fa-video",      // Video Editing
  "fa-solid fa-share-alt"      // Social Media Handler
];

// Example background images (use your own images in public/)
const serviceBackgrounds = [
  "/webdevelopment.jpeg",
  "/uiux.jpeg",
  "/resume.jpeg",
  "/presentation.jpeg",
  "/video.jpeg",
  "/socialmedia.jpeg"
];

const services = [
  { title: "Web Development", description: "Building modern and responsive websites." },
  { title: "UI/UX Design", description: "Designing user-friendly interfaces and experiences." },
  { title: "Resume Writing", description: "Crafting professional resumes to showcase your skills." },
  { title: "Presentation Design", description: "Creating impactful presentations for any occasion." },
  { title: "Video Editing", description: "Editing videos for social media, business, or personal use." },
  { title: "Social Media Handler", description: "Managing and growing your social media presence." }
];

const Services = (props) => {

  const [headerRef, headerVisible] = useInView(0.3);

  return (
    <div id={props.id} className="w-full min-h-screen bg-[#f8f7f2] flex flex-col items-center py-10 px-4">
      <div ref={headerRef} className={`header h-auto flex items-center justify-center mb-5 lg:mb-20 fade-up ${headerVisible ? "visible" : ""}`}>
          <h1 className='text-center text-3xl lg:text-6xl text-[#286f6b] font-bold'>Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, idx) => {
          const [cardRefs, cardVisible] = useInView(0.3);
          return (
            <div
              key={idx}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl/50 hover:shadow-[#286f6b] shadow-2xl/50 shadow-[#286f6b] sm:shadow-none  p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 h-72 overflow-hidden fade-up ${cardVisible ? "visible" : ""}`}
              style={{
                backgroundImage: `url(${serviceBackgrounds[idx]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            ref={cardRefs}
          >
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            <i
              className={`${serviceIcons[idx]} w-10 h-10 mb-4 z-10 relative text-4xl text-[#e2eddf]`}
              aria-label={service.title + " icon"}
            ></i>
            <h2 className="text-xl font-semibold text-[#e2eddf] mb-4 text-center z-10" style={{ position: 'relative' }}>
              {service.title}
            </h2>
            <p className="text-white/90 text-center z-10" style={{ position: 'relative' }}>
              {service.description}
            </p>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;