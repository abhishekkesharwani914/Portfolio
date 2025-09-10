import React, {useState} from "react"
import { ReactTyped } from "react-typed";
import "../index.css";
import { toast } from "react-toastify";


function Home(props) {
  const [resumeDownload, setResumeDownload] = useState(false);

  const handleResumeDownload = () => {
    setResumeDownload(true);
    toast.success("Resume downloaded successfully!");
  };

  const icons = "text-3xl text-center lg:text-[#286f6b]/80 transition-all duration-200 hover:scale-130 rounded-full h-10 w-10 slide-up opacity-0"
  const btns = "font-semibold hover:font-semibold text-center px-5 py-2 bg-[#286f6b] hover:bg-[#f8f7f2] hover:text-[#286f6b] transition-all duration-200 hover:outline-1 hover:outline-[#286f6b] hover:shadow-[#286f6b] hover:shadow-xl/40 rounded-full text-white slide-up opacity-0"

  return (
    <>
      <div id={props.id} className="Container px-10 py-10 md:py-20 md:px-20 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0 h-full bg-[gradient] mt-4 md:mt-10">
        {/* Left Content */}
        <div className="left-content item-center text-center md:text-left flex flex-col justify-center items-center md:items-start ">
          <h1 className="text-1xl md:text-2xl lg:text-3xl slide-down">Hi, there 👋</h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold whitespace-nowrap slide-down mt-2">
            I am <span className="italic text-[#286f6b] text-shadow-[0_0_8px_rgba(40,111,107,0.5)]">Abhishek Kesharwani</span>
          </h1>
          <h1 className="text-1xl md:text-2xl lg:text3xl mt-6 zoom-in">
            A passionate{" "}
            <ReactTyped
              strings={[
                "Software Developer",
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={100}
              loop
              backSpeed={50}
              cursorChar="|"
              showCursor={true}
              className="text-[#286f6b] text-shadow-[0_0_8px_rgba(40,111,107,0.5)] font-semibold text-1xl md:text-2xl lg:text-3xl md:mt-10"
            />
          </h1>
          <p className="mt-15 md:mt-20 text-xl slide-left">
            I build scalable, secure & seamless web applications that deliver impact.
          </p>
          <p className="text-xl slide-left">
            Let’s create something amazing together.
          </p>
          <div className="mt-10 flex flex-row gap-4 md:gap-6 sm:gap-6 ">
            <a href="https://github.com/abhishekkesharwani914" target="_blank" rel="noopener noreferrer" className={`${icons} text-black hover:text-black stagger-1`}><i className="fa-brands fa-github "></i></a>
            <a href="https://www.linkedin.com/in/abhishek-kesharwani-5019b4215/" target="_blank" rel="noopener noreferrer" className={`${icons} text-blue-700 hover:text-blue-700 stagger-2`}><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://x.com/Abhishe64111743" target="_blank" rel="noopener noreferrer" className={`${icons} text-black hover:text-black stagger-3`}><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/" target="_blank" rel="noopener noreferrer" className={`${icons} text-pink-700 hover:text-pink-700 stagger-4`}><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/abhishek.kesharwani.1213986" target="_blank" rel="noopener noreferrer" className={`${icons} text-blue-700 hover:text-blue-700 stagger-5`}><i className="fa-brands fa-facebook"></i></a>        
          </div>
          <div className="mt-10 flex flex-col md:flex-row sm:flex-row gap-6 md:gap-10 ">
            <a href="#work" className={`${btns} stagger-6`}>View my work</a>
            <a href="/Abhishek_Kesharwani_SWE_Resume.pdf" onClick={handleResumeDownload} download  className={`${btns} stagger-7`}>Download my Resume</a>
          </div>
        </div>

        {/* Right Content */}
        <div className="right-content flex flex-row items-center justify-center slide-right mt-5 lg:mt-0">
          <div className="image-container flex flex-col items-center justify-center h-auto w-auto">
            <img className="" src="/img2.webp" alt="right image" loading="lazy"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home