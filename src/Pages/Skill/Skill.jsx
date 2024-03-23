import './Skill.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Skill = () => {
    return (
        <div className="pb-10 pt-10">
            <div>
                <h5 className="text-base font-medium text-white/50 text-center mb-5 font-poppins">My Skills</h5>
                <h1 className="text-5xl font-medium text-center font-poppins"><span className="text-[#fff]">Let’s Explore</span> <span className="text-[#c9f31d]">Popular Skills</span></h1>
                <div className="grid grid-cols-1 semi-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 px-16 semi-sm:px-4 md:px-5 lg:px-0 gap-5 semi-sm:gap-3 md:gap-7  max-w-7xl mx-auto mt-20">
                    <div className=" skill-card">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/R3QRS0M/icons8-html-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5 font-lora">HTML</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button font-lora">95%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/YLFkjzS/icons8-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">90%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/9bm0dT6/icons8-tailwind-css-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Tailwind CSS</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">100%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ypjhk9N/icons8-javascript-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Javascript</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">70%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/ygG9LXX/favicon-192.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Daisy Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">99%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/nwL20f0/icons8-bootstrap-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Bootstrap</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">99%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/JrMq5q3/icons8-react-js-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">React</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">90%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/8j5NP5w/free-icon-1.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Next js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">50%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/WDhH0Nk/icons8-google-firebase-console-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Firebase</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/XsWfb9P/icons8-chakra-ui-480.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Chakra Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/RN10TcT/pngwing-com-1.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Material Ui</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">60%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/wccv61w/icons8-sass-512.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Sass</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/n6GTGdw/1685814539stripe-icon-png.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Stripe</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/XZF9TBm/19384040.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">SSLCOMMERZ</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/5Y7KNb2/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Redux</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/pJ7MkKC/7824520991553750363-128.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Node Js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/DzQx8zy/icons8-express-js-512.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Express Js</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/yXcSFnH/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">MongoDB</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/Bqk8PqN/mongoose-1-logo-png-transparent.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Mongoose</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/tY9SQWv/icons8-figma-240.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Figma</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                    <div className=" skill-card font-lora">
                        <img className="w-14 h-14 mx-auto mt-5" src="https://i.ibb.co/x8C7WY2/3842828341530103314-128.png" alt="" />
                        <h5 className="text-lg text-white text-center font-medium mt-3 mb-5">Github</h5>
                        <div className="text-center mb-5">
                            <button className="skill-button">80%</button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <button className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Learn More</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Skill;