import React from 'react'
import { useInView } from '../Hooks/useInView'

const skills = [
  { name: "HTML", img: "/html-5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", img: "/css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", img: "/javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Bootstrap", img: "/bootstrap.svg", link: "https://getbootstrap.com/" },
  { name: "React", img: "/react.svg", link: "https://reactjs.org/" },
  { name: "Tailwind CSS", img: "/tailwind.svg", link: "https://tailwindcss.com/" },
  { name: "Node.js", img: "/node-js.svg", link: "https://nodejs.org/" },
  { name: "Express", img: "/Express.svg", link: "https://expressjs.com/" },
  { name: "MongoDB", img: "/MongoDB.svg", link: "https://www.mongodb.com/" },
  { name: "MySQL", img: "/sql.svg", link: "https://www.postgresql.org/" },
  { name: "Git", img: "/git.svg", link: "https://git-scm.com/" },
  { name: "GitHub", img: "/github.svg", link: "https://github.com/" },
  { name: "Postman", img: "/Postman.svg", link: "https://www.postman.com/" },
  { name: "Sass", img: "/Sass.svg", link: "https://sass-lang.com/" },
  { name: "Java", img: "/java.svg", link: "https://www.java.com/" },
  { name: "Python", img: "/python.svg", link: "https://www.python.org/" },
  { name: "Google Cloud", img: "/google-cloud.svg", link: "https://cloud.google.com/" }
];

const Skills = (props) => {
  const [iconRef, iconVisible] = useInView(0.3), [headerRef, headerVisible] = useInView(0.3);

    const icons = "h-30 w-30 opacity-100 transition-all duration-200 hover:opacity-100 md:opacity-50 sm:opacity-50 mb-4";
    const anchor = `h-auto w-30 text-center font-bold text-md text-[#286f6b] lg:text-gray-400  hover:text-[#286f6b] hover:scale-120 transition-all duration-200 hover:shadow-[#286f6b] hover:shadow-xl/40 fade-up ${iconVisible ? "visible" : ""}`;
  return (
    <div id={props.id} className="px-10 py-10 lg:px-20 lg:pb-20 h-auto">
      <div ref={headerRef} className={`flex items-center justify-center mb-4 fade-up${headerVisible ? " visible" : ""}`}>
        <h1 className='text-center text-3xl lg:text-6xl text-[#286f6b] font-bold'>SKILLS</h1>
      </div>
      <div ref={iconRef} className="flex flex-row flex-wrap gap-x-8 gap-y-20 items-center justify-center mt-6">
        {skills.map(({ name, img, link }) => (
          <a key={name} href={link} className={`${anchor}`} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={name} className={`${icons}`} loading="lazy" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Skills;
