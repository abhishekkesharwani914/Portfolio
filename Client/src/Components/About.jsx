import React from 'react'
import { useInView } from '../Hooks/useInView'

const icons = "h-12 w-12 hover:scale-120 transition-all duration-150 opacity-100 hover:opacity-100 md:opacity-50 sm:opacity-50";
const techs = [
  { alt: "html", src: "/html-5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { alt: "css", src: "/css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { alt: "javascript", src: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { alt: "bootstrap", src: "/bootstrap.svg", link: "https://getbootstrap.com/" },
  { alt: "react", src: "/react.svg", link: "https://reactjs.org/" },
  { alt: "tailwind", src: "/tailwind.svg", link: "https://tailwindcss.com/" },
  { alt: "node", src: "/node-js.svg", link: "https://nodejs.org/" },
  { alt: "express", src: "/Express.svg", link: "https://expressjs.com/" },
  { alt: "mongodb", src: "/MongoDB.svg", link: "https://www.mongodb.com/" },
  { alt: "sql", src: "/sql.svg", link: "https://www.postgresql.org/" },
  { alt: "git", src: "/git.svg", link: "https://git-scm.com/" },
  { alt: "github", src: "/github.svg", link: "https://github.com/" },
  { alt: "postman", src: "/Postman.svg", link: "https://www.postman.com/" },
  { alt: "sass", src: "/Sass.svg", link: "https://sass-lang.com/" },
  { alt: "java", src: "/java.svg", link: "https://www.java.com/" },
  { alt: "python", src: "/python.svg", link: "https://www.python.org/" },
  { alt: "google-cloud", src: "/google-cloud.svg", link: "https://cloud.google.com/" }
];

function About(props) {
  const [headerRef, headerVisible] = useInView(0.3), [leftRef, leftVisible] = useInView(0.3), [rightRef, rightVisible] = useInView(0.3);
  return (
    <div id={props.id} className="px-10 py-10 lg:px-20 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 lg:h-[70%] h-auto bg-[#286f6b]">
      <div ref={headerRef} className={`col-span-1 lg:col-span-2 flex items-center justify-center mb-4 lg:mb-0 fade-up${headerVisible ? " visible" : ""}`}>
        <h1 className='text-center text-3xl lg:text-6xl text-[#e2eddf] font-bold'>Who Am I?</h1>
      </div>
      <div ref={leftRef} className={`flex flex-col gap-5 lg:gap-8 items-center justify-center mt-4 lg:mt-0 fade-up${leftVisible ? " visible" : ""}`}>
        <p className='text-base md:text-lg lg:text-xl text-center text-[#e2eddf] font-semibold'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.</p>
        <div className="flex flex-row flex-wrap gap-5 items-center justify-center mt-6">
          {techs.map(t => <a key={t.alt} href={t.link} target="_blank" rel="noopener noreferrer"><img src={t.src} className={icons} alt={t.alt} loading="lazy" /></a>)}
        </div>
        <p className='text-base md:text-lg lg:text-xl text-center text-[#e2eddf]'>I'm a passionate Software Engineer with expertise in Full Stack Development. With a solid background in both frontend (React, Next.js) and backend (Node.js, Express, MongoDB, PostgreSQL), I bring technical depth and design-driven thinking to every project. My journey began with a Computer Science degree and has evolved into a portfolio of real-world applications, freelance work, and certifications from top platforms.</p>
      </div>
      <div ref={rightRef} className={`flex items-center justify-end mt-10 lg:mt-0 fade-up${rightVisible ? " visible" : ""}`}>
        <img src="/profile.jpg" className='rounded-full w-70 h-70 lg:w-110 lg:h-110 md:w-90 md:h-90 object-cover shadow-[#e2eddf] shadow-2xl' alt="My Image" loading="lazy"/>
      </div>
    </div>
  )
}

export default About
