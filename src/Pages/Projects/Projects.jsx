import { useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import './Projects.css'

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="pt-10 pb-10">
            <div className="max-w-6xl mx-auto">
                <h5 className="text-base font-medium text-white/50 text-center mb-5 font-poppins">Latest Works</h5>
                <h1 className="text-5xl font-medium text-center font-poppins"><span className="text-[#fff] mb-10">Explore My Popular</span> <span className="text-[#c9f31d]">Projects</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-20">
                    <div className="relative px-10 pt-16 bg-[#070707] border border-[#353535] rounded-xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <img className="rounded" src="https://i.ibb.co/HNJxcRs/Screenshot-2024-03-30-at-02-56-46-BD-Quick-School1.png" alt="" />
                        <div className={`project-info ${isHovered ? 'show' : ''}`}>
                            <div>
                                <h1 className='text-2xl font-semibold font-poppins mb-3'>BD Quick School</h1>
                                <p className='text-base font-lora mb-2'>Project was about precision and information.</p>
                            </div>
                            <MdOutlineArrowOutward className={`text-4xl rotate-icon ${isHovered ? 'rotate-full' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;