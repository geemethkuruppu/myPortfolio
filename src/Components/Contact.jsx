import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const whatsappMessage = `Hello, my name is ${form.name}. %0A
      Subject: ${form.subject} %0A
      Message: ${form.message} %0A
      Email: ${form.email} %0A
      Mobile: ${form.mobile}`;
    
    const whatsappNumber = "+94712976877";
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div  id="contact" className="min-h-screen flex flex-col items-center justify-center text-white overflow-visible pt-24">
      <h1 className="text-4xl font-bold mb-16 text-center">Contact <span className="text-cyan-400">Me</span></h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl p-6 bg-gray-800 rounded-xl shadow-lg">
        {/* Left Side - Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white text-center md:text-left">Geemeth Kuruppu</h2> 
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl md:text-2xl text-cyan-400" />
            <p className="text-sm md:text-base">32, Nagahamulla Lane, Kolonnawa</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl md:text-2xl text-cyan-400" />
            <p className="text-sm md:text-base">+94 712 976 877</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl md:text-2xl text-cyan-400" />
            <p className="text-sm md:text-base break-all">geemethkuruppu32@gmail.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-2 text-center md:text-left">Message Me</h2>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="relative z-10 w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="relative z-10 w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="relative z-10 w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="relative z-10 w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 break-all"
          />
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Your Mobile No."
            className="relative z-10 w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
          />

          <button
            onClick={sendToWhatsApp}
            className="relative z-10 w-full px-6 py-2 text-lg font-semibold bg-[#0ef] hover:bg-[#0cc] rounded-lg shadow-lg transition-all text-black"
          >
            Send Message
          </button>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-400 bg-color-black p-4 rounded-lg shadow-lg">
        <p>&copy; 2023 Geemeth Kuruppu. All rights reserved.</p>
        <p>Designed and Developed by Geemeth Kuruppu</p>
      </div>

    </div>
    
  );
};

export default ContactMe;
