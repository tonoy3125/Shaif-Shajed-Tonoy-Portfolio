import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";


const AboutMe = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-[#070707]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-20">
                        <div>
                            <h5 className="text-base font-medium text-white/50  mb-5 font-poppins">About Me</h5>
                            <h1 className="text-2xl sm:text-3xl semi-sm:text-4xl md:text-5xl font-medium   font-poppins"><span className="text-[#fff]">Professional</span> <span className="text-[#c9f31d]">Problem Solutions</span>
                                <span className="text-[#fff]">For Digital Products</span></h1>
                            <p className="text-base text-[#b1b1b1] font-poppins mt-7">At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum</p>
                            <div className="flex items-center gap-40 mt-7">
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                    <span className="text-white text-xl font-lora font-semibold">Branding & Design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                    <span className="text-white text-xl font-lora font-semibold">Digital Marketing</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-[164px] mt-7">
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                    <span className="text-white text-xl font-lora font-semibold">Web Development</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmark className="text-2xl text-[#c9f31d]" />
                                    <span className="text-white text-xl font-lora font-semibold">Product Design</span>
                                </div>
                            </div>
                            <div className=" mt-10 py-5 px-8 max-w-[630px] rounded-[20px] bg-[#292828] border border-[#353535]">
                                <div className="flex items-center gap-16">
                                    <div className="flex items-center gap-4">
                                        <div className=" px-3 py-3 rounded-full bg-[#c9f31d] flex-1">
                                            <MdOutlineEmail className="text-2xl" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-white/50 text-base font-lora font-medium mb-1">Email Me</h5>
                                            <p className="text-white text-lg font-lora font-medium">shaifshajedt@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className=" px-3 py-3 rounded-full bg-[#c9f31d]">
                                            <FaPhone className="text-2xl" />
                                        </div>
                                        <div>
                                            <h5 className="text-white/50 text-base font-lora font-medium mb-1">Make A Call</h5>
                                            <p className="text-white text-lg font-lora font-medium">+8801993566305</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="max-w-[450px] h-[450px]" src="https://i.ibb.co/kHpnxzL/Gray-and-Orange-Simple-Linked-In-Profile-Picture.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;