import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json"; 

// Social icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ynnwm51",
        "template_8nwr86m",
        {
          from_name: form.name,
          to_name: "Sahil",
          from_email: form.email,
          to_email: "sahilsiddhant1999@gmail.com",
          message: form.message,
        },
        "UTDmBSyXsTtq5xI4z"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Left - Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-[0_0_20px_#915eff] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Right - Animation + Social Links */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-purple-700/40 to-blue-700/30 rounded-2xl p-6 flex-1 relative"
      >
        {/* Glowing Background */}
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Headline */}
        <h3 className="text-white text-2xl font-bold text-center z-10">
          Let’s Build Something Amazing
        </h3>
        <p className="text-secondary text-center max-w-sm z-10">
          Have a project idea or just want to say hi? I’m always open to
          discussing new opportunities.
        </p>

        {/* Lottie Animation */}
        <div className="w-90 h-80 z-10">
          <Lottie animationData={contactAnimation} loop />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 z-10">
          {[
            { icon: <FaGithub />, url: "https://github.com/Drexter-07", label: "GitHub" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sahil-siddhant", label: "LinkedIn" },
            { icon: <FaTwitter />, url: "https://x.com/Sahilsidd77", label: "Twitter" },
            { icon: <FaEnvelope />, url: "mailto:sahilsiddhantofficial@gmail.com", label: "Email" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-lg rounded-full text-white text-2xl hover:scale-110 hover:bg-white/20 transition-all duration-300 relative group"
            >
              {social.icon}
              <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-all">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
