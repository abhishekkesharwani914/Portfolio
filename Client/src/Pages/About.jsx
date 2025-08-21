import React from 'react'
import { useInView } from '../Hooks/useInView';

function About(props) {

    const icons = "h-12 w-12 hover:scale-120 transition-all duration-150 opacity-100 hover:opacity-100 md:opacity-50 sm:opacity-50";

    const [headerRef, headerVisible] = useInView(0.3);
    const [leftRef, leftVisible] = useInView(0.3);
    const [rightRef, rightVisible] = useInView(0.3);

  return (
    <>
        <div id={props.id} className=" px-10 py-10 lg:px-20 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8  lg:h-[70%] h-auto bg-[#286f6b]">
            {/* Header */}
            <div ref={headerRef} className={`header col-span-1 lg:col-span-2 h-auto flex items-center justify-center mb-4 lg:mb-0 fade-up ${headerVisible ? " visible" : ""}`}>
                <h1 className='text-center text-3xl lg:text-6xl text-[#e2eddf] font-bold'>Who Am I?</h1>
            </div>
            {/* Left Content */}
            <div ref={leftRef} className={`leftContent h-auto lg:h-auto flex flex-col gap-5 lg:gap-8  items-center justify-center mt-4 lg:mt-0 sm:fade-up lg:slide-left2 ${leftVisible ? " visible" : ""}`}>
                <p className='text-base md:text-lg lg:text-xl text-center text-[#e2eddf] font-semibold'>
                    CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK.
                </p>
                <div className="icons flex flex-row flex-wrap gap-5 items center justify-center mt-6 ">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="/html-5.svg" className={`${icons}`} alt="html" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="/css.svg" className={`${icons}`} alt="css" /></a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="/javascript.svg" className={`${icons}`} alt="javascript" /></a>
                    <a href="https://getbootstrap.com/"><img src="/bootstrap.svg" className={`${icons}`} alt="bootstrap" /></a>
                    <a href="https://reactjs.org/"><img src="/react.svg" className={`${icons}`} alt="react" /></a>
                    <a href="https://tailwindcss.com/"><img src="/tailwind.svg" className={`${icons}`} alt="tailwind" /></a>
                    <a href="https://nodejs.org/"><img src="/node-js.svg" className={`${icons}`} alt="node" /></a>
                    <a href="https://expressjs.com/"><img src="/Express.svg" className={`${icons}`} alt="express" /></a>
                    <a href="https://www.mongodb.com/"><img src="/MongoDB.svg" className={`${icons}`} alt="mongodb" /></a>
                    <a href="https://www.postgresql.org/"><img src="/sql.svg" className={`${icons}`} alt="sql" /></a>
                    <a href="https://git-scm.com/"><img src="/git.svg" className={`${icons}`} alt="git" /></a>
                    <a href="https://github.com/"><img src="/github.svg" className={`${icons}`} alt="github" /></a>
                    <a href="https://www.postman.com/"><img src="/Postman.svg" className={`${icons}`} alt="postman" /></a>
                    <a href="https://sass-lang.com/"><img src="/Sass.svg" className={`${icons}`} alt="sass" /></a>
                    <a href="https://www.java.com/"><img src="/java.svg" className={`${icons}`} alt="java" /></a>
                    <a href="https://www.python.org/"><img src="/python.svg" className={`${icons}`} alt="python" /></a>
                    <a href="https://cloud.google.com/"><img src="/google-cloud.svg" className={`${icons}`} alt="google-cloud" /></a>
                </div>

                <p className='text-base md:text-lg lg:text-xl text-center text-[#000]/[0.6] text-[#e2eddf]'>
                    I'm a passionate Software Engineer with expertise in Full Stack Development. With a solid background in both frontend (React, Next.js) and backend (Node.js, Express, MongoDB, PostgreSQL), I bring technical depth and design-driven thinking to every project. My journey began with a Computer Science degree and has evolved into a portfolio of real-world applications, freelance work, and certifications from top platforms.
                </p>
            </div>
            {/* Right Content */}
            <div ref={rightRef} className={`rightContent flex items-center justify-end mt-10 lg:mt-0 slide-right2 ${rightVisible ? " visible" : ""}`}>
                <img src="/profile.jpg" className='rounded-full w-70 h-70 lg:w-110 lg:h-110 md:w-90 md:h-90 object-cover shadow-[#e2eddf] shadow-2xl' alt="My Image" />
            </div>
            
        </div>
    </>
  )
}

export default About;
