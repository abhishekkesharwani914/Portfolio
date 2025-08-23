import React, {useState} from 'react';
import { useInView } from '../Hooks/useInView';
import { toast } from 'react-toastify';
import { submitQuery } from '../API/Api';

const socialLinks = [
  { icon: "fa-brands fa-github", url: "https://github.com/abhishekkesharwani914", class: "hover:scale-130 lg:text-[#286f6b]/80 text-black hover:text-black" },
  { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/abhishek-kesharwani-5019b4215/", class: "hover:scale-130 lg:text-[#286f6b]/80 text-blue-700 hover:text-blue-700" },
  { icon: "fa-brands fa-x-twitter", url: "https://x.com/Abhishe64111743", class: "hover:scale-130 lg:text-[#286f6b]/80 text-black hover:text-black" },
  { icon: "fa-brands fa-instagram", url: "https://instagram.com/_a.b.h.i.s.h.e.k_001_official", class: "hover:scale-130 lg:text-[#286f6b]/80 text-pink-700 hover:text-pink-700" },
  { icon: "fa-brands fa-facebook", url: "https://facebook.com/abhishek.kesharwani.1213986", class: "hover:scale-130 lg:text-[#286f6b]/80 text-blue-700 hover:text-blue-700" }
];

const Contacts = (props) => {

    const [leftRef, leftVisible] = useInView(0.2);
    const [rightRef, rightVisible] = useInView(0.1);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      contact: '',
      message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      try{
      const res = await submitQuery(formData);
      if (res.data.success) {
        setFormData({
          name: '',
          email: '',
          contact: '',
          message: ''
        });
        toast.success(res.data.message);
      } else {
        toast.error("Failed to submit query.");
      }
    } catch (error) {
      toast.error("Failed to submit query.");
    }
  };

  return (
    <div
      id={props.id}
      className="w-full h-auto lg:h-screen flex flex-col lg:flex-row items-center justify-center bg-[#e2eddf] px-4 py-10"
    >
      {/* Left Side: Contact Info */}
      <div ref={leftRef} className={`w-full lg:w-1/2 flex flex-col items-center justify-center mb-10 lg:mb-0 fade-up ${leftVisible ? 'visible' : ''}`}>
        <h2 className="text-2xl lg:text-4xl font-bold text-[#286f6b] mb-6">Contact Information</h2>
        <div className="mb-4 text-sm lg:text-lg text-[#286f6b] flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-2xl"></i>
          <span>628 - Bhadrapara Balco, Korba (Chhattisgarh), India</span>
        </div>
        <div className="mb-4 text-sm lg:text-lg text-[#286f6b] flex items-center gap-3">
          <i className="fa-solid fa-envelope text-2xl"></i>
          <span>abhishekkesharwani914@gmail.com</span>
        </div>
        <div className="mb-4 text-sm lg:text-lg text-[#286f6b] flex items-center gap-3">
          <i className="fa-solid fa-phone text-2xl"></i>
          <span>+91-6264637966</span>
        </div>
        <div className="flex gap-6 mt-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.class} text-3xl transition`}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
      {/* Right Side: Contact Form */}
      <div ref={rightRef} className={`w-full lg:w-1/2 flex flex-col items-center justify-center fade-up ${rightVisible ? 'visible' : ''}`}>
        <h2 className="text-2xl lg:text-4xl font-bold text-[#286f6b] mb-6">Any Query</h2>
        <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5">
          <div>
            <label className="block text-[#286f6b] font-semibold mb-2">Name</label>
            <input type="text" value={formData.name} onChange={handleChange} placeholder='Your Name'  name="name" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[#286f6b] font-semibold mb-2">Email</label>
            <input type="email" value={formData.email} onChange={handleChange} placeholder='Your Email'  name="email" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[#286f6b] font-semibold mb-2">Contact</label>
            <input type="text" value={formData.contact} onChange={handleChange} placeholder='Your Contact Number'  name="contact" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[#286f6b] font-semibold mb-2">Message</label>
            <textarea id='message' value={formData.message} onChange={handleChange} name="message" rows="4" className="w-full px-4 py-2 rounded border border-[#286f6b] focus:outline-none"></textarea>
          </div>
          <button type="submit" onClick={onSubmit} className="bg-[#286f6b] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#fff] hover:outline-[1px] hover:outline-[#286f6b] hover:shadow-[#286f6b] hover:shadow-xl/40 hover:text-[#286f6b] transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;