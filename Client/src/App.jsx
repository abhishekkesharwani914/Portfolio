import React, { Suspense } from 'react';
import Navbar from './Components/Navbar'
import About from './Components/About';
import Home from './Components/Home'
import Experience from './Components/Experience';
// import Work from './Components/Work';
import { ToastContainer } from "react-toastify";
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
const Work = React.lazy(() => import('./Components/Work'));

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center"><h1 className='text-3xl'>Loading...</h1></div>}>
        <Work id="work" />
      </Suspense>
      <Services id="services" />
      <Contacts id="contacts" />
      <Footer />
    </>
  )
}

export default App
