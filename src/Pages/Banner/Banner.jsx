/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation when the banner section is in view
          setVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        // threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    // Cleanup
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div ref={bannerRef} className="lg:px-20 overflow-hidden">
      <div className="flex items-center px-5 flex-col md:flex-row mt-10 mb-10 xs:gap-5 md:gap-7 lg:gap-0">
        {/* Heading */}
        <motion.div
          className=""
          initial={false}
          animate={visible ? { x: 0 } : { x: -200 }} // Animate from left
          transition={{ duration: 2 }}
        >
          <h1 className="text-[#FFFFFF59] sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-5 font-cinzel">
            Hello, i’m
          </h1>
          <h1
            className="text-[#c9f31d] font-bold sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-5xl mb-4 font-cinzel"
            style={{ whiteSpace: "nowrap" }}
          >
            Shaif Shajed Tonoy
          </h1>
          <h1 className="text-[#fff] md:text-xl lg:text-3xl font-bold mb-4 font-lora">
            Junior MERN-Stack-Developer
          </h1>
          <p className="text-white xs:text-sm sm::text-base md:w-[400px] lg:w-[500px] mb-10 font-lora">
            ✨ Young Trailblazer in Full Stack Development 💻 | Mastering the
            art of code from UI/UX magic to server-side wizardry. Fluent in
            HTML, CSS, JavaScript, React,Firebase, Node.js, MongoDB. Committed
            to turning ideas into reality and making a mark in the digital
            realm. Let's build brilliance together! 🌐🚀
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="text-base">Hire Me</span>{" "}
              <span>
                <MdKeyboardArrowRight className="text-base" />
              </span>
            </a>
            <a
              target="_blank"
              className=" sm:px-5 sm:py-2 lg:px-7 lg:py-3  flex items-center text-white  font-lora font-medium gap-1 rounded-lg"
              style={{ whiteSpace: "nowrap" }}
              download=""
              href="https://drive.google.com/uc?export=download&id=1FLNsNKpXkTNZOKJdAB7oWiX9ou2qb8O9"
            >
              <span className="text-base">Download Resume</span>{" "}
              <span>
                <MdKeyboardArrowRight className="text-base" />
              </span>
            </a>
          </div>
        </motion.div>
        {/* Image */}
        <motion.div
          className="block md:hidden lg:block"
          initial={false}
          animate={visible ? { y: 0 } : { y: -100 }} // Animate from top
          transition={{ duration: 2 }}
        >
          <img
            className="sm:w-full md:w-3/4 semi-sm:mx-auto md:mx-0"
            src="https://i.ibb.co/fCnqG28/Black-Simple-Bold-Professional-Twitter-Profile-Picture-1.png"
            alt=""
          />
        </motion.div>
        {/* Stats */}
        <motion.div
          className="p-10 xs:w-72 sm:w-80 semi-sm:w-96 md:w-72 bg-[#070707] rounded-xl"
          initial={false}
          animate={visible ? { x: 0 } : { x: 200 }} // Animate from right
          transition={{ duration: 2 }}
        >
          <div>
            <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2">
              <CountUp start={0} end={2} duration={2} />+
            </h3>
            <p className="text-[#b1b1b1] text-base font-lora font-normal ">
              Years Of Experience
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div>
            <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2">
              <CountUp start={0} end={15} duration={4} />+
            </h3>
            <p className="text-[#b1b1b1] text-base font-lora font-normal">
              Project Complete
            </p>
          </div>
          <hr className="mt-5 mb-5" />
          <div>
            <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2">
              <CountUp start={0} end={99} duration={3} />%
            </h3>
            <p className="text-[#b1b1b1] text-base font-lora font-normal">
              Client Satisfactions
            </p>
          </div>
        </motion.div>
      </div>
      <div className="hidden md:block lg:hidden">
        <motion.img
          className="w-3/4 mx-auto"
          initial={false}
          animate={visible ? { y: 0 } : { y: -100 }} // Animate from top
          transition={{ duration: 2 }}
          src="https://i.ibb.co/fCnqG28/Black-Simple-Bold-Professional-Twitter-Profile-Picture-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
