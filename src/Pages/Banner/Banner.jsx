import CountUp from 'react-countup';
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div className="flex items-center px-5 justify-center mt-10 mb-10">
            <div className="">
                <h1 className="text-[#FFFFFF59] text-5xl font-bold mb-5">Hello, i’m</h1>
                <h1 className="text-[#c9f31d] font-bold text-5xl mb-4">Shaif Shajed Tonoy</h1>
                <h1 className="text-[#fff] text-3xl font-bold mb-4">Junior MERN-Stack-Developer</h1>
                <p className="text-white w-[500px] mb-10">✨ Young Trailblazer in Full Stack Development 💻 | Mastering the art of code from UI/UX magic to server-side wizardry. Fluent in HTML, CSS, JavaScript, React,Firebase, Node.js, MongoDB. Committed to turning ideas into reality and making a mark in the digital realm. Let's build brilliance together! 🌐🚀</p>
                <div className="flex items-center gap-3">
                    <button className="px-7 py-3 bg-[#c9f31d] flex items-center text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg"><span className="text-base">Hire Me</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                    <button className="px-7 py-3  flex items-center text-white font-medium gap-1 rounded-lg"><span className="text-base">Download Resume
                    </span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                </div>
            </div>
            <div className="">
                <img className="w-3/4" src="https://i.ibb.co/fCnqG28/Black-Simple-Bold-Professional-Twitter-Profile-Picture-1.png" alt="" />
            </div>
            <div className=" p-10 w-72 bg-[#070707] rounded-xl">
                <div>
                    <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={13} duration={2} />+</h3>

                    <p className="text-[#b1b1b1] text-base font-poppins font-normal">Years Of Experience</p>
                </div>
                <hr className="mt-5 mb-5" />
                <div>
                    <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={8} duration={4} />K+</h3>
                    <p className="text-[#b1b1b1] text-base font-poppins font-normal">Project Complete</p>
                </div>
                <hr className="mt-5 mb-5" />
                <div>
                    <h3 className="text-[40px] font-medium text-[#c9f31d] font-poppins mb-2"><CountUp start={0} end={99} duration={3} />%</h3>
                    <p className="text-[#b1b1b1] text-base font-poppins font-normal">Client Satisfactions</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;