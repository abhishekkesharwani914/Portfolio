import Navbar from './Components/Navbar'
import About from './Pages/About';
import Home from './Pages/Home'
import Experience from './Pages/Experience';
import Work from './Pages/Work';
import { ToastContainer } from "react-toastify";
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Work id="work" />
      <Services id="services" />
      <Contacts id="contacts" />
      <Footer />
    </>
  )
}

export default App
