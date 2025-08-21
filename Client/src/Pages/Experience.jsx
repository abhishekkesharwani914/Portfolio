import React, { useState } from 'react';
import { useInView } from '../Hooks/useInView';

const experienceData = [
  {
    title: "Software Developer Engineer intern at Bluestock Fintech",
    description: "As a team co-leader I worked on scalable frontend & backend systems, authentication, authorization & leading a team of developers.",
    year: "May,2025 - June,2025",
    certificate: "/Certificate of Internship Bluestock BFSD17203s.pdf"
  },
  {
    title: "Full Stack Developer (MERN) intern at Zidio Development",
    description: "Built scalable E-commerce applications using React, Node.js, and MongoDB. M aintained CI/CD pipelines and collaborated with cross-functional teams.",
    year: "Mar,2025 - June,2025",
    certificate: "/Certificate of Internship Zidio.pdf"
  },
  {
    title: "Full Stack Developer (MERN) intern at Navodita Infotech",
    description: "Built responsive web applications using the MERN stack and collaborated with cross-functional teams.",
    year: "Mar,2025 - Apr,2025",
    certificate: "Certificate of Internship Navodita Infotech.pdf"
  }
];

const educationData = [
  {
    title: "Master of Computer Applications",
    description: "Atal Bihari Vajpayee Vishwavidyalaya, Bilaspur",
    year: "2023 - 2025"
  },
  {
    title: "BSC Computer Science",
    description: "Government EVPG College, Korba",
    year: "2020 - 2023"
  },
  {
    title: "Higher Secondary- XII",
    description: "M.G.M Hr Sec School, Balco",
    year: "2019 - 2020"
  }
];

function Experience(props) {
  const [activeTab, setActiveTab] = useState('experience');
  const data = activeTab === 'experience' ? experienceData : educationData;
  const [tabRef, tabVisible] = useInView(0.3);
  const [barRef, barVisible] = useInView(0.2);

  return (
    <div id={props.id} className="h-auto lg:min-h-screen flex flex-col items-center justify-center bg-[#f8f7f2] py-10 px-5 lg:px-0 lg:py-16">
      {/* Tabs */}
      <div className={`flex gap-4 mb-8 fade-up ${tabVisible ? "visible" : ""}`} ref={tabRef}>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${activeTab === 'experience' ? 'bg-[#286f6b] text-white' : 'bg-white text-[#286f6b] border border-[#286f6b]'}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${activeTab === 'education' ? 'bg-[#286f6b] text-white' : 'bg-white text-[#286f6b] border border-[#286f6b]'}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-7xl h-auto lg:h-[70vh] flex flex-col lg:block space-y-10 lg:space-y-0">
        {/* Vertical Bar */}
        <div
          ref={barRef}
          className={`absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 left-4 top-0 h-full w-2 bg-[#286f6b] rounded-full fade-up ${barVisible ? "visible" : ""} 
            transition-all duration-200`}
        ></div>
        {/* Timeline Items */}
        {data.map((item, idx) => {
          const [cardRef, cardVisible] = useInView(0.3);
          const topPercent = ((idx + 1) / (data.length + 1)) * 100;
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={cardRef}
              className={`${isLeft ? 'lg:absolute' : 'lg:absolute'} w-full flex  items-center fade-up ${cardVisible ? "visible" : ""}`}
              style={{
                top: `calc(${topPercent}% - 56px)`, // 56px is half of card height for centering
                left: 0,
              }}
            >
              {/* Bullet */}
              <div className="absolute left-5 lg:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="block w-6 h-6 bg-[#286f6b] rounded-full border-4 border-white"></span>
              </div>
              {/* Timeline Card */}
              <div
                className={`
                  flex-1
                  ${!isLeft ? 'lg:flex lg:justify-end lg:pr-8' : 'lg:flex lg:justify-start lg:pl-8'}
                  flex justify-start ml-10 lg:ml-0
                `}
              >
                <div
                  className="
                    bg-[#286f6b] shadow-lg rounded-lg p-6
                    w-full max-w-none
                    lg:w-[580px]
                    transition-all duration-200
                    shadow-xl/50 shadow-[#e2eddf]
                    hover:shadow-[#286f6b]
                    hover:scale-105
                  "
                  // onClick={() => item.link && window.open(item.link, "_blank")}
                >
                  <h3 className="font-bold text-md text-[#e2eddf]">{item.title}</h3>
                  <p className="text-xs text-[#e2eddf]">{item.description}</p>
                  <span className="text-xs text-[#e2eddf]">{item.year}</span>
                  {item.certificate && (
                    <a href={item.certificate} className="text-xs text-[#e2eddf] underline ml-5" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;