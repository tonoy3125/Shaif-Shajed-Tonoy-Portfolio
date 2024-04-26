/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import './Skill.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';

const Skill = () => {

    const skillRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                // threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        // Cleanup
        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, []);



    return (
        <div ref={skillRef} className="pb-10 pt-10 bg-[#070707] overflow-hidden">
            <div>
                <motion.h5
                    initial={{ y: -50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    className="text-base font-medium text-white/50 text-center mb-5 font-poppins"
                >My Skills</motion.h5>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 2, delay: 0.2 }}
                    className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium text-center px-2 font-poppins"
                >
                    <span className="text-[#fff]">Let’s Explore</span> <span className="text-[#c9f31d]">Popular Skills</span>
                </motion.h1>
                <div className="grid grid-cols-1 semi-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 px-16 semi-sm:px-4 md:px-5 lg:px-0 gap-5 semi-sm:gap-3 md:gap-7  max-w-7xl mx-auto mt-14 sm:mt-20">
                    {/* Html */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/R3QRS0M/icons8-html-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5 font-lora">HTML</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button font-lora">95%</button>
                        </div>
                    </motion.div>
                    {/* CSS */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/YLFkjzS/icons8-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">90%</button>
                        </div>
                    </motion.div>
                    {/* Tailwind CSS */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/9bm0dT6/icons8-tailwind-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Tailwind CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">100%</button>
                        </div>
                    </motion.div>
                    {/* Javascript */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ypjhk9N/icons8-javascript-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Javascript</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">70%</button>
                        </div>
                    </motion.div>
                    {/* Daisy Ui */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ygG9LXX/favicon-192.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Daisy Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">99%</button>
                        </div>
                    </motion.div>
                    {/* Bootstrap */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/nwL20f0/icons8-bootstrap-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Bootstrap</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">99%</button>
                        </div>
                    </motion.div>
                    {/* React */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/JrMq5q3/icons8-react-js-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">React</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">90%</button>
                        </div>
                    </motion.div>
                    {/* Next Js */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/8j5NP5w/free-icon-1.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Next js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">50%</button>
                        </div>
                    </motion.div>
                    {/* Firebase */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/WDhH0Nk/icons8-google-firebase-console-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Firebase</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Chakra Ui */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/XsWfb9P/icons8-chakra-ui-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Chakra Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Material Ui */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/RN10TcT/pngwing-com-1.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Material Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">60%</button>
                        </div>
                    </motion.div>
                    {/* Sass */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/wccv61w/icons8-sass-512.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Sass</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Stripe */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/n6GTGdw/1685814539stripe-icon-png.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Stripe</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* SSLCommerz */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/XZF9TBm/19384040.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">SSLCOMMERZ</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Redux */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/5Y7KNb2/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Redux</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Node Js */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/pJ7MkKC/7824520991553750363-128.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Node Js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Express Js */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/DzQx8zy/icons8-express-js-512.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Express Js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* MongoDB */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/yXcSFnH/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">MongoDB</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Mongoose */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/Bqk8PqN/mongoose-1-logo-png-transparent.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Mongoose</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Figma */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/tY9SQWv/icons8-figma-240.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Figma</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                    {/* Github */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8 }}
                        className=" skill-card font-lora"
                    >
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/x8C7WY2/3842828341530103314-128.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Github</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </motion.div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <button className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Learn More</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Skill;