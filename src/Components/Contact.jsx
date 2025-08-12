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
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section
      className="relative bg-[#0D1117] text-white px-6 py-12 min-h-[calc(100vh-80px)] flex flex-col items-center"
      aria-label="Contact Section"
    >
      {/* Header */}
      <header className="flex flex-col items-center mb-12 max-w-xs mx-auto">
        <div className="w-48 mb-4">
          <Lottie animationData={contactbtn} loop={true} />
        </div>
       
        <p className="text-gray-400 mt-2 text-center max-w-md">
          Whether you have a question or want to work together, feel free to send a message.
        </p>
      </header>

      <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-10 mx-auto md:mx-0 text-gray-900">
          <h3 className="text-3xl font-semibold mb-8 text-gray-900">Send a Message</h3>

          <form ref={form} onSubmit={sendEmail} noValidate className="flex flex-col gap-6">
            <div>
              <label htmlFor="user_name" className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your full name"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="you@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 resize-y max-h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <aside
          className="relative rounded-xl overflow-hidden mt-10 md:mt-0 w-full max-w-sm mx-auto md:mx-0 max-h-[480px] shadow-xl"
          aria-label="Contact Information"
        >
          {/* Background Lottie */}
          <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
            <Lottie animationData={contact} loop={true} />
          </div>

          {/* Overlay content */}
          <div className="relative bg-[#0E1626]/90 h-full p-8 flex flex-col justify-center gap-8 text-gray-300 rounded-xl backdrop-blur-sm">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 bg-[#1A2238]/80 p-4 rounded-lg border border-[#2A2E45] hover:shadow-lg transition cursor-default">
                <FaEnvelope
                  className="text-blue-400 text-2xl"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="select-text break-words text-sm font-medium">
                    sadek45st@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 bg-[#1A2238]/80 p-4 rounded-lg border border-[#2A2E45] hover:shadow-lg transition cursor-pointer">
                <FaWhatsapp
                  className="text-green-500 text-2xl"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                  <a
                    href="https://wa.me/8801327177169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline font-medium"
                  >
                    +8801327177169
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 bg-[#1A2238]/80 p-4 rounded-lg border border-[#2A2E45] hover:shadow-lg transition cursor-pointer">
                <FaLinkedin
                  className="text-blue-500 text-2xl"
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/sadekhk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline font-medium break-words"
                  >
                    linkedin.com/in/sadekhk
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
