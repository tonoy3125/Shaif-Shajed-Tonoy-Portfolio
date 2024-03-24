import { Player } from "@lottiefiles/react-lottie-player";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
    return (
        <div>
            <div className=" bg-[#070707]">
                <div className="max-w-[1350px] mx-auto pt-20 pb-20 ">
                    <div className="flex flex-col lg:flex-row items-start lg:gap-28">
                        <div className="flex  items-center font-cinzel">
                            <Player className=" sm:w-14 semi-sm:w-24"
                                autoplay
                                loop
                                src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                            >
                            </Player>
                            <h1 className="text-lg md:text-xl font-bold  text-white " style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start md:gap-14 lg:gap-24 mt-8 md:mx-6 lg:mx-0">
                            <div>
                                <h3 className="text-white text-lg font-bold font-poppins mb-10">Quick Link</h3>
                                <div className="flex items-center gap-14 mb-12">
                                    <p className="text-sm font-poppins font-medium text-[#b1b1b1]">Service</p>
                                    <p className="text-sm font-poppins font-medium text-[#b1b1b1]">Projects</p>
                                    <p className="text-sm font-poppins font-medium text-[#b1b1b1]">Pricing</p>
                                    <p className="text-sm font-poppins font-medium text-[#b1b1b1]">Faqs</p>
                                    <p className="text-sm font-poppins font-medium text-[#b1b1b1]">Contact</p>
                                </div>
                                <div className="flex items-center gap-5 ">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-96 text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 " placeholder=" Email Address" required />
                                    </div>
                                    <button className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Sign Up</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold font-poppins">Address</h3>
                                <div className='flex mt-6 gap-4 font-lora cursor-pointer' >
                                    <CiLocationOn className='text-[#c9f31d] text-3xl' />
                                    <h1 className="text-white text-lg hover:text-[#c9f31d]">West Khulshi R/A,Road No-2,Chattrogram,Bangladesh</h1>
                                </div>
                                <div className='flex items-center mt-5 gap-4 font-lora cursor-pointer' >
                                    <MdOutlineMailOutline className='text-[#c9f31d] text-xl' />
                                    <h1 className="text-white text-lg hover:text-[#c9f31d]">shaifshajedt@gmail.com</h1>
                                </div>
                                <div className='flex items-center mt-5 gap-4 font-lora cursor-pointer' >
                                    <FaPhoneFlip className='text-[#c9f31d] text-lg' />
                                    <h1 className="text-white text-lg hover:text-[#c9f31d]">01993566305</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;