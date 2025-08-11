import React, { useRef } from "react";
import Lottie from "lottie-react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import contact from "../assets/LootieFile/contact-email.json"; // background Lottie
import contactbtn from "../assets/LootieFile/ContactButton.json"; // header Lottie
import emailjs from '@emailjs/browser';
const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_7qzn6hl', 'template_7z4a3fa', form.current, '05fKMNPg5SDYui-Xv')
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};

  return (
    <section
      className="relative bg-[#0D1117] text-white px-4 min-h-[calc(100vh-80px)]"
      aria-label="Contact Section"
    >
      {/* Header: Get in Touch Lottie + Title */}
      <header className="flex flex-col items-center py-6">
        <div className="w-44">
          <Lottie animationData={contactbtn} loop={true} />
        </div>
      </header>

      <div className="mx-auto grid md:grid-cols-2 gap-6 p-2">
        {/* Contact Form */}
       <div className="bg-white rounded-xl shadow-lg w-full p-8 mx-auto text-gray-900 flex flex-col">
  <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Send a Message</h3>

  <form
    ref={form}
    onSubmit={sendEmail}
    className="flex flex-col"
    noValidate
  >
    <label className="mb-2 font-semibold text-gray-700" htmlFor="user_name">
      Name
    </label>
    <input
      type="text"
      name="name"
     
      required
      placeholder="Your full name"
      className="mb-5 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />

    <label className="mb-2 font-semibold text-gray-700" htmlFor="user_email">
      Email
    </label>
    <input
      type="email"
      name="email"
    
      required
      placeholder="you@example.com"
      className="mb-5 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />

    <label className="mb-2 font-semibold text-gray-700" htmlFor="message">
      Message
    </label>
    <textarea
      name="message"
    
      required
      rows={6}
      placeholder="Write your message here..."
      className="mb-6 px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />

    <input
      type="submit"
      value="Send"
      className="bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition cursor-pointer"
    />
  </form>
</div>


        {/* Contact Info with Background Lottie */}
        <aside
          className="relative rounded-xl overflow-hidden min-h-[280px]"
          aria-label="Contact Information"
        >
          {/* Background Lottie */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Lottie animationData={contact} loop={true} />
          </div>

          {/* Overlay content */}
          <div className="relative bg-[#0E1626]/80 h-full p-4 md:p-6 flex flex-col justify-center gap-4 text-gray-300 rounded-xl">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start gap-3 bg-[#1A2238]/70 p-3 rounded-md border border-[#2A2E45] hover:shadow-lg transition">
                <FaEnvelope
                  className="text-blue-400 text-lg mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-md font-semibold text-white">Email</h4>
                  <p className="select-text break-words text-sm">
                    youremail@gmail.com
                  </p>
                </div>
              </div>

             <div className="flex items-start gap-3 bg-[#1A2238]/70 p-3 rounded-md border border-[#2A2E45] hover:shadow-lg transition">
  <FaWhatsapp
    className="text-green-500 text-lg mt-1"
    aria-hidden="true"
  />
  <div>
    <h4 className="text-md font-semibold text-white">WhatsApp</h4>
    <p className="select-text text-sm">+8801XXXXXXXXX</p>
  </div>
</div>


              <div className="flex items-start gap-3 bg-[#1A2238]/70 p-3 rounded-md border border-[#2A2E45] hover:shadow-lg transition">
                <FaLinkedin
                  className="text-blue-500 text-lg mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-md font-semibold text-white">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline break-words text-sm"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
