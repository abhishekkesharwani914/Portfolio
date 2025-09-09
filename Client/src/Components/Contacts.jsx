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

const countryCodes = [
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+7", label: "🇷🇺 +7" },
  { code: "+20", label: "🇪🇬 +20" },
  { code: "+27", label: "🇿🇦 +27" },
  { code: "+30", label: "🇬🇷 +30" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+36", label: "🇭🇺 +36" },
  { code: "+39", label: "🇮🇹 +39" },
  { code: "+40", label: "🇷🇴 +40" },
  { code: "+41", label: "🇨🇭 +41" },
  { code: "+43", label: "🇦🇹 +43" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+45", label: "🇩🇰 +45" },
  { code: "+46", label: "🇸🇪 +46" },
  { code: "+47", label: "🇳🇴 +47" },
  { code: "+48", label: "🇵🇱 +48" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+51", label: "🇵🇪 +51" },
  { code: "+52", label: "🇲🇽 +52" },
  { code: "+53", label: "🇨🇺 +53" },
  { code: "+54", label: "🇦🇷 +54" },
  { code: "+55", label: "🇧🇷 +55" },
  { code: "+56", label: "🇨🇱 +56" },
  { code: "+57", label: "🇨🇴 +57" },
  { code: "+58", label: "🇻🇪 +58" },
  { code: "+60", label: "🇲🇾 +60" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+62", label: "🇮🇩 +62" },
  { code: "+63", label: "🇵🇭 +63" },
  { code: "+64", label: "🇳🇿 +64" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+66", label: "🇹🇭 +66" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+82", label: "🇰🇷 +82" },
  { code: "+84", label: "🇻🇳 +84" },
  { code: "+86", label: "🇨🇳 +86" },
  { code: "+90", label: "🇹🇷 +90" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+92", label: "🇵🇰 +92" },
  { code: "+93", label: "🇦🇫 +93" },
  { code: "+94", label: "🇱🇰 +94" },
  { code: "+95", label: "🇲🇲 +95" },
  { code: "+98", label: "🇮🇷 +98" },
  { code: "+211", label: "🇸🇸 +211" },
  { code: "+212", label: "🇲🇦 +212" },
  { code: "+213", label: "🇩🇿 +213" },
  { code: "+216", label: "🇹🇳 +216" },
  { code: "+218", label: "🇱🇾 +218" },
  { code: "+220", label: "🇬🇲 +220" },
  { code: "+221", label: "🇸🇳 +221" },
  { code: "+222", label: "🇲🇷 +222" },
  { code: "+223", label: "🇲🇱 +223" },
  { code: "+224", label: "🇬🇳 +224" },
  { code: "+225", label: "🇨🇮 +225" },
  { code: "+226", label: "🇧🇫 +226" },
  { code: "+227", label: "🇳🇪 +227" },
  { code: "+228", label: "🇹🇬 +228" },
  { code: "+229", label: "🇧🇯 +229" },
  { code: "+230", label: "🇲🇺 +230" },
  { code: "+231", label: "🇱🇷 +231" },
  { code: "+232", label: "🇸🇱 +232" },
  { code: "+233", label: "🇬🇭 +233" },
  { code: "+234", label: "🇳🇬 +234" },
  { code: "+235", label: "🇹🇩 +235" },
  { code: "+236", label: "🇨🇫 +236" },
  { code: "+237", label: "🇨🇲 +237" },
  { code: "+238", label: "🇨🇻 +238" },
  { code: "+239", label: "🇸🇹 +239" },
  { code: "+240", label: "🇬🇶 +240" },
  { code: "+241", label: "🇬🇦 +241" },
  { code: "+242", label: "🇨🇬 +242" },
  { code: "+243", label: "🇨🇩 +243" },
  { code: "+244", label: "🇦🇴 +244" },
  { code: "+245", label: "🇬🇼 +245" },
  { code: "+246", label: "🇧🇳 +246" },
  { code: "+247", label: "🇦🇸 +247" },
  { code: "+248", label: "🇸🇨 +248" },
  { code: "+249", label: "🇸🇩 +249" },
  { code: "+250", label: "🇷🇼 +250" },
  { code: "+251", label: "🇪🇹 +251" },
  { code: "+252", label: "🇸🇴 +252" },
  { code: "+253", label: "🇩🇯 +253" },
  { code: "+254", label: "🇰🇪 +254" },
  { code: "+255", label: "🇹🇿 +255" },
  { code: "+256", label: "🇺🇬 +256" },
  { code: "+257", label: "🇧🇮 +257" },
  { code: "+258", label: "🇲🇿 +258" },
  { code: "+260", label: "🇿🇲 +260" },
  { code: "+261", label: "🇲🇬 +261" },
  { code: "+262", label: "🇷🇪 +262" },
  { code: "+263", label: "🇿🇼 +263" },
  { code: "+264", label: "🇳🇦 +264" },
  { code: "+265", label: "🇲🇼 +265" },
  { code: "+266", label: "🇱🇸 +266" },
  { code: "+267", label: "🇧🇼 +267" },
  { code: "+268", label: "🇸🇿 +268" },
  { code: "+269", label: "🇰🇲 +269" },
  { code: "+290", label: "🇸🇭 +290" },
  { code: "+291", label: "🇪🇷 +291" },
  { code: "+297", label: "🇦🇼 +297" },
  { code: "+298", label: "🇫🇴 +298" },
  { code: "+299", label: "🇬🇱 +299" },
  { code: "+350", label: "🇬🇮 +350" },
  { code: "+351", label: "🇵🇹 +351" },
  { code: "+352", label: "🇱🇺 +352" },
  { code: "+353", label: "🇮🇪 +353" },
  { code: "+354", label: "🇮🇸 +354" },
  { code: "+355", label: "🇦🇱 +355" },
  { code: "+356", label: "🇲🇹 +356" },
  { code: "+357", label: "🇨🇾 +357" },
  { code: "+358", label: "🇫🇮 +358" },
  { code: "+359", label: "🇧🇬 +359" },
  { code: "+370", label: "🇱🇹 +370" },
  { code: "+371", label: "🇱🇻 +371" },
  { code: "+372", label: "🇪🇪 +372" },
  { code: "+373", label: "🇲🇩 +373" },
  { code: "+374", label: "🇦🇲 +374" },
  { code: "+375", label: "🇧🇾 +375" },
  { code: "+376", label: "🇦🇩 +376" },
  { code: "+377", label: "🇲🇨 +377" },
  { code: "+378", label: "🇸🇲 +378" },
  { code: "+379", label: "🇻🇦 +379" },
  { code: "+380", label: "🇺🇦 +380" },
  { code: "+381", label: "🇷🇸 +381" },
  { code: "+382", label: "🇲🇪 +382" },
  { code: "+383", label: "🇽🇰 +383" },
  { code: "+385", label: "🇭🇷 +385" },
  { code: "+386", label: "🇸🇮 +386" },
  { code: "+387", label: "🇧🇦 +387" },
  { code: "+389", label: "🇲🇰 +389" },
  { code: "+420", label: "🇨🇿 +420" },
  { code: "+421", label: "🇸🇰 +421" },
  { code: "+423", label: "🇱🇮 +423" },
  { code: "+500", label: "🇫🇰 +500" },
  { code: "+501", label: "🇧🇿 +501" },
  { code: "+502", label: "🇬🇹 +502" },
  { code: "+503", label: "🇸🇻 +503" },
  { code: "+504", label: "🇭🇳 +504" },
  { code: "+505", label: "🇳🇮 +505" },
  { code: "+506", label: "🇨🇷 +506" },
  { code: "+507", label: "🇵🇦 +507" },
  { code: "+508", label: "🇵🇲 +508" },
  { code: "+509", label: "🇭🇹 +509" },
  { code: "+590", label: "🇬🇵 +590" },
  { code: "+591", label: "🇧🇴 +591" },
  { code: "+592", label: "🇬🇾 +592" },
  { code: "+593", label: "🇪🇨 +593" },
  { code: "+594", label: "🇬🇫 +594" },
  { code: "+595", label: "🇵🇾 +595" },
  { code: "+596", label: "🇲🇶 +596" },
  { code: "+597", label: "🇸🇷 +597" },
  { code: "+598", label: "🇺🇾 +598" },
  { code: "+599", label: "🇧🇶 +599" },
  { code: "+670", label: "🇹🇱 +670" },
  { code: "+672", label: "🇦🇶 +672" },
  { code: "+673", label: "🇧🇳 +673" },
  { code: "+674", label: "🇳🇷 +674" },
  { code: "+675", label: "🇵🇬 +675" },
  { code: "+676", label: "🇹🇴 +676" },
  { code: "+677", label: "🇸🇧 +677" },
  { code: "+678", label: "🇻🇺 +678" },
  { code: "+679", label: "🇫🇯 +679" },
  { code: "+680", label: "🇵🇼 +680" },
  { code: "+681", label: "🇼🇫 +681" },
  { code: "+682", label: "🇨🇰 +682" },
  { code: "+683", label: "🇳🇫 +683" },
  { code: "+685", label: "🇼🇸 +685" },
  { code: "+686", label: "🇰🇮 +686" },
  { code: "+687", label: "🇳🇨 +687" },
  { code: "+688", label: "🇹🇫 +688" },
  { code: "+689", label: "🇵🇫 +689" },
  { code: "+690", label: "🇹🇰 +690" },
  { code: "+691", label: "🇲🇭 +691" },
  { code: "+692", label: "🇲🇰 +692" },
  { code: "+850", label: "🇰🇵 +850" },
  { code: "+852", label: "🇭🇰 +852" },
  { code: "+853", label: "🇲🇴 +853" },
  { code: "+855", label: "🇰🇭 +855" },
  { code: "+856", label: "🇱🇦 +856" },
  { code: "+880", label: "🇧🇩 +880" },
  { code: "+886", label: "🇹🇼 +886" },
  { code: "+960", label: "🇲🇻 +960" },
  { code: "+961", label: "🇱🇧 +961" },
  { code: "+962", label: "🇯🇴 +962" },
  { code: "+963", label: "🇸🇾 +963" },
  { code: "+964", label: "🇮🇶 +964" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+967", label: "🇾🇪 +967" },
  { code: "+968", label: "🇴🇲 +968" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+972", label: "🇮🇱 +972" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+975", label: "🇧🇹 +975" },
  { code: "+976", label: "🇲🇳 +976" },
  { code: "+977", label: "🇳🇵 +977" },
  { code: "+992", label: "🇹🇯 +992" },
  { code: "+993", label: "🇹🇲 +993" },
  { code: "+994", label: "🇦🇿 +994" },
  { code: "+995", label: "🇬🇪 +995" },
  { code: "+996", label: "🇰🇬 +996" },
  { code: "+998", label: "🇺🇿 +998" },
];


const Contacts = (props) => {

    const [leftRef, leftVisible] = useInView(0.2);
    const [rightRef, rightVisible] = useInView(0.1);

    const [formError, setFormError] = useState('');

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      countryCode: '+91',
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
          countryCode: '+91',
          contact: '',
          message: ''
        });
        toast.success(res.data.message);
      } else {
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          contact: '',
          message: ''
        });
        toast.error("Failed to submit query.");
        setFormError(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        setFormError(error.response.data.message);
      } else {
        setFormError("An unexpected error occurred. Please try again later.");
      }
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
            <label htmlFor="name" className="block text-[#286f6b] font-semibold mb-2">Name<span className='text-red-700'>*</span></label>
            <input id='name' type="text" value={formData.name} onChange={handleChange} placeholder='Your Name'  name="name" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" />
          </div>
          <div>
            <label htmlFor='email' className="block text-[#286f6b] font-semibold mb-2">Email<span className='text-red-700'>*</span></label>
            <input id='email' type="email" value={formData.email} onChange={handleChange} placeholder='Your Email'  name="email" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" />
          </div>
          <div>
            <label htmlFor='Contact' className="block text-[#286f6b] font-semibold mb-2">Contact<span className='text-red-700'>*</span></label>
            {/* <input id='Contact' type="tel" value={formData.contact} onChange={handleChange} placeholder='Your Contact Number'  name="contact" className="w-full px-4 py-2 rounded-full border border-[#286f6b] focus:outline-none" /> */}
            <div className="flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="rounded-l-full border border-[#286f6b] px-2 py-2 bg-white focus:outline-none"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>{c.label}</option>
                ))}
              </select>
              <input
                id='contact'
                type="number"
                min={10}
                max={10}
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder='Your Contact Number'
                className="w-full px-4 py-2 rounded-r-full border border-l-0 border-[#286f6b] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor='message' className="block text-[#286f6b] font-semibold mb-2">Message<span className='text-red-700'>*</span></label>
            <textarea id='message' value={formData.message} onChange={handleChange} name="message" rows="4" className="w-full px-4 py-2 rounded border border-[#286f6b] focus:outline-none"></textarea>
          </div>
          <button type="submit" onClick={onSubmit} className="bg-[#286f6b] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#fff] hover:outline-[1px] hover:outline-[#286f6b] hover:shadow-[#286f6b] hover:shadow-xl/40 hover:text-[#286f6b] transition">
            Send
          </button>
          <p className={`text-center text-red-700 fade-up ${formError ? 'visible' : 'invisible'}`}>{formError}</p>
        </form>
      </div>
    </div>
  );
};

export default Contacts;