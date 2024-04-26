import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';


const AboutMe = () => {

    const aboutRef = useRef(null);
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

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        // Cleanup
        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);



    return (
        <div ref={aboutRef} className="bg-[#070707] pt-28 pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="xs:mx-3 sm:mx-5 semi-sm:mx-5 md:mx-10 lg:mx-0">
                        <motion.h5
                            initial={{ y: -50, opacity: 0 }}
                            animate={isVisible ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 2 }}
                            className="text-base font-medium text-white/50  mb-5 font-poppins"
                        >
                            About Me
                        </motion.h5>
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={isVisible ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 2, delay: 0.2 }}
                            className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium   font-poppins" style={{ lineHeight: '1.2' }}
                        >
                            <span className="text-[#fff]">Professional</span> <span className="text-[#c9f31d]">Problem Solutions </span>
                            <span className="text-[#fff]">For Digital Products</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            animate={isVisible ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 2, delay: 0.4 }}
                            className="text-base text-[#b1b1b1] font-poppins mt-7"
                        >
                            At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum
                        </motion.p>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 semi-sm:gap-5 md:gap-28 lg:gap-40 mt-5 semi-sm:mt-5 md:mt-7">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 2, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                <span className="text-white text-xl font-lora font-semibold">Branding & Design</span>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 2, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                <span className="text-white text-xl font-lora font-semibold">Digital Marketing</span>
                            </motion.div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-3 semi-sm:gap-5 md:gap-[115px] lg:gap-[164px] mt-3 semi-sm:mt-5 md:mt-7">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 2, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                <span className="text-white text-xl font-lora font-semibold">Web Development</span>
                            </motion.div>
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 2, delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                <span className="text-white text-xl font-lora font-semibold">Product Design</span>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={isVisible ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 2, delay: 0.8 }}
                            className=" mt-10 py-5 px-5 md:px-8 md:max-w-[630px] rounded-[20px] bg-[#292828] border border-[#353535]"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-16">
                                <div className="flex items-center gap-4">
                                    <div className=" px-2 py-2 semi-sm:px-3 semi-sm:py-3 rounded-full bg-[#c9f31d] flex-1">
                                        <MdOutlineEmail className="text-2xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-white/50 text-base font-lora font-medium mb-1">Email Me</h5>
                                        <p className="text-white text-lg font-lora font-medium">shaifshajedt@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className=" px-2 py-2 semi-sm:px-3 semi-sm:py-3 rounded-full bg-[#c9f31d]">
                                        <FaPhone className="text-2xl" />
                                    </div>
                                    <div>
                                        <h5 className="text-white/50 text-base font-lora font-medium mb-1">Make A Call</h5>
                                        <p className="text-white text-lg font-lora font-medium">+8801993566305</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={isVisible ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 2 }}
                    >
                        <img className=" xs:max-w-[295px] sm:max-w-[340px] semi-sm:max-w-[380px]  md:max-w-[450px] mx-auto md:h-[450px]" src="https://i.ibb.co/kHpnxzL/Gray-and-Orange-Simple-Linked-In-Profile-Picture.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;