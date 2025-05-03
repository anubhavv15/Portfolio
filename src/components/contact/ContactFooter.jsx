import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import './ContactFooter.css'; // Make sure this file contains .animate-on-load

const ContactFooter = () => {
  const form = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const currentForm = form.current;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        requestAnimationFrame(() => {
          currentForm.reset();
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact">
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 px-4 md:px-16">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-1000 ${animate ? 'animate-on-load' : ''}`}>
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4 text-gray-300">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-yellow-400" />
            <span>chaudharyanubhav53@gmail.com</span>
          </div>
          <div className="flex items-center mb-6">
            <FaPhone className="mr-2 text-yellow-400" />
            <span>+91 8126915928</span>
          </div>
          <div className="flex space-x-5 text-2xl">
            <a href="https://github.com/anubhavv15" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anubhavchaudhary15" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/anubhavv15" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-4"
        >
          <h3 className="text-2xl font-semibold mb-2 text-gray-300">Send a Message</h3>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-300 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-300 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-80 text-black placeholder-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 font-semibold transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Anubhav Chaudhary. All rights reserved.
      </div>
    </footer>
    </section>
  );
};

export default ContactFooter;
