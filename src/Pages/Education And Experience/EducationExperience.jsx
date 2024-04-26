/* eslint-disable react-hooks/exhaustive-deps */
import { FaUserGraduate } from "react-icons/fa6";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { SlBadge } from "react-icons/sl";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';


const EducationExperience = () => {

    const bothRef = useRef(null);
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

        if (bothRef.current) {
            observer.observe(bothRef.current);
        }

        // Cleanup
        return () => {
            if (bothRef.current) {
                observer.unobserve(bothRef.current);
            }
        };
    }, []);


    return (
        <div ref={bothRef} className=" max-w-6xl mx-auto pt-10 md:pb-10">

            <div className="flex lg:flex-row flex-col justify-between gap-6">
                <div>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2 }}
                        className="flex items-center gap-5 mb-10 text-[#fff] font-poppins justify-center lg:justify-start"
                    >
                        <FaUserGraduate className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">My Education</h1>
                    </motion.div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                    >
                        <Education></Education>
                    </motion.div>
                </div>
                <div className=" hidden lg:flex mt-20">
                    <ul className="steps steps-vertical h-[700px]">
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step"></li>
                        <li className="step"></li>
                    </ul>
                </div>
                <div>
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2 }}
                        className="flex items-center gap-5 mb-10 text-[#fff] font-poppins justify-center lg:justify-start"
                    >
                        <SlBadge className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">My Experience</h1>
                    </motion.div>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 2, delay: 0.4 }}
                    >
                        <Experience></Experience>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default EducationExperience;