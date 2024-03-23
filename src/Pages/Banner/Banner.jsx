import CountUp from 'react-countup';
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className="flex items-center px-5 flex-col md:flex-row mt-10 mb-10 semi-sm:gap-5 md:gap-7 lg:gap-0">
                {/* Heading */}
                <div className="">
                    <h1 className="text-[#FFFFFF59] md:text-3xl lg:text-5xl font-bold mb-5 font-cinzel">Hello, i’m</h1>
                    <h1 className="text-[#c9f31d] font-bold md:text-3xl lg:text-5xl mb-4 font-cinzel" style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                    <h1 className="text-[#fff] md:text-xl lg:text-3xl font-bold mb-4 font-lora">Junior MERN-Stack-Developer</h1>
                    <p className="text-white md:text-base md:w-[400px] lg:w-[500px] mb-10 font-lora">✨ Young Trailblazer in Full Stack Development 💻 | Mastering the art of code from UI/UX magic to server-side wizardry. Fluent in HTML, CSS, JavaScript, React,Firebase, Node.js, MongoDB. Committed to turning ideas into reality and making a mark in the digital realm. Let's build brilliance together! 🌐🚀</p>
                    <div className="flex items-center gap-3">
                        <button className="px-7 py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg"><span className="text-base">Hire Me</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                        <button className="px-7 py-3  flex items-center text-white  font-lora font-medium gap-1 rounded-lg"><span className="text-base">Download Resume
                        </span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                    </div>
                </div>
                {/* Image */}
                <div className=" block md:hidden lg:block">
                    <img className=" semi-sm:w-full md:w-3/4 semi-sm:mx-auto md:mx-0" src="https://i.ibb.co/fCnqG28/Black-Simple-Bold-Professional-Twitter-Profile-Picture-1.png" alt="" />
                </div>
                {/* Stats */}
                <div className=" p-10 semi-sm:w-96 md:w-72 bg-[#070707] rounded-xl">
                    <div>
                        <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={13} duration={2} />+</h3>

                        <p className="text-[#b1b1b1] text-base font-lora font-normal ">Years Of Experience</p>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div>
                        <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={8} duration={4} />K+</h3>
                        <p className="text-[#b1b1b1] text-base font-lora font-normal">Project Complete</p>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div>
                        <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={99} duration={3} />%</h3>
                        <p className="text-[#b1b1b1] text-base font-lora font-normal">Client Satisfactions</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:hidden">
                <img className="w-3/4 mx-auto" src="https://i.ibb.co/fCnqG28/Black-Simple-Bold-Professional-Twitter-Profile-Picture-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;