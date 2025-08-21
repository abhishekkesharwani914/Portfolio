import React from 'react'
import { useInView } from '../Hooks/useInView';

const Skills = (props) => {

  const [iconRef, iconVisible] = useInView(0.3)
  const [headerRef, headerVisible] = useInView(0.3);

  const icons = "h-30 w-30 opacity-100 transition-all duration-200 hover:opacity-100 md:opacity-50 sm:opacity-50 mb-4";
  const anchor = `h-auto w-30 text-center font-bold text-md text-gray-400 hover:text-[#286f6b] hover:scale-120 transition-all duration-200 hover:shadow-[#286f6b] hover:shadow-xl/40 fade-up ${iconVisible ? "visible" : ""}`

  

  return (
    <>
    <div id={props.id} className="id px-10 py-10 lg:px-20 lg:pb-20  h-auto">
      <div ref={headerRef} className={`header h-auto flex items-center justify-center mb-4 lg:mb-0 fade-up ${headerVisible ? " visible" : ""}`}>
                <h1 className='text-center text-3xl lg:text-6xl text-[#286f6b] font-bold'>SKILLS</h1>
      </div>
      <div ref={iconRef} className="icons flex flex-row flex-wrap gap-x-8 gap-y-20 items-center justify-center mt-6 ">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className={`${anchor}`}>
            <img src="/html-5.svg" className={`${icons}`} alt="html" />
              <span>HTML</span>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className={`${anchor}`}>
          <span>HTML</span>
            <img src="/css.svg" className={`${icons}`} alt="css" />
            <span>CSS</span>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className={`${anchor}`}>
            <img src="/javascript.svg" className={`${icons}`} alt="javascript" />
            <span>JavaScript</span>
          </a>
          <a href="https://getbootstrap.com/" className={`${anchor}`}>
            <img src="/bootstrap.svg" className={`${icons}`} alt="bootstrap" />
            <span>Bootstrap</span>
          </a>
          <a href="https://reactjs.org/" className={`${anchor}`}>
            <img src="/react.svg" className={`${icons}`} alt="react" />
            <span>React</span>
          </a>
          <a href="https://tailwindcss.com/" className={`${anchor}`}>
            <img src="/tailwind.svg" className={`${icons}`} alt="tailwind" />
            <span>Tailwind CSS</span>
          </a>
          <a href="https://nodejs.org/" className={`${anchor}`}>
            <img src="/node-js.svg" className={`${icons}`} alt="node" />
            <span>Node.js</span>
          </a>
          <a href="https://expressjs.com/" className={`${anchor}`}>
            <img src="/Express.svg" className={`${icons}`} alt="express" />
            <span>Express</span>
          </a>
          <a href="https://www.mongodb.com/" className={`${anchor}`}>
            <img src="/MongoDB.svg" className={`${icons}`} alt="mongodb" />
            <span>MongoDB</span>
          </a>
          <a href="https://www.postgresql.org/" className={`${anchor}`}>
            <img src="/sql.svg" className={`${icons}`} alt="sql" />
            <span>MySQL</span>
          </a>
          <a href="https://git-scm.com/" className={`${anchor}`}>
            <img src="/git.svg" className={`${icons}`} alt="git" />
            <span>Git</span>
          </a>
          <a href="https://github.com/" className={`${anchor}`}>
            <img src="/github.svg" className={`${icons}`} alt="github" />
            <span>GitHub</span>
          </a>
          <a href="https://www.postman.com/" className={`${anchor}`}>
            <img src="/Postman.svg" className={`${icons}`} alt="postman" />
            <span>Postman</span>
          </a>
          <a href="https://sass-lang.com/" className={`${anchor}`}>
            <img src="/Sass.svg" className={`${icons}`} alt="sass" />
            <span>Sass</span>
          </a>
          <a href="https://www.java.com/" className={`${anchor}`}>
            <img src="/java.svg" className={`${icons}`} alt="java" />
            <span>Java</span>
          </a>
          <a href="https://www.python.org/" className={`${anchor}`}>
            <img src="/python.svg" className={`${icons}`} alt="python" />
            <span>Python</span>
          </a>
          <a href="https://cloud.google.com/" className={`${anchor}`}>
            <img src="/google-cloud.svg" className={`${icons}`} alt="google-cloud" />
            <span>Google Cloud</span>
          </a>
      </div>
    </div>
    </>
  )
}

export default Skills
