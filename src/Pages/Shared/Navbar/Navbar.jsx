import { AiOutlineMenu } from 'react-icons/ai';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)
    const [showSidebarMobileDevice, setShowSideBarMobileDevice] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleSidebarMobileDevice = () => {
        setShowSideBarMobileDevice(!showSidebarMobileDevice);
    };

    return (
        <div className="">
            <div className="navbar">
                <div className="navbar-start">
                    {/* Responsive left Side logo & heading */}
                    <div className='flex items-center xs:gap-7 sm:gap-10 md:gap-96'>
                        <div className="flex lg:gap-2 items-center font-cinzel">
                            <Player className="xs:w-16 semi-sm:w-24"
                                autoplay
                                loop
                                src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                            >
                            </Player>
                            <h1 className="sm:text-lg semi-sm:text-xl font-bold  text-white " style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                        </div>
                        <div className='lg:hidden border xs:px-2 xs:py-2 sm:px-3 sm:py-2 rounded-md' onClick={toggleSidebarMobileDevice}>
                            <AiOutlineMenu className=" text-2xl semi-sm:text-3xl font-bold text-white"></AiOutlineMenu>
                        </div>
                    </div>
                    {/* Left side sidebar content */}
                    <div className={`sidebarleft ${showSidebarMobileDevice ? 'active' : ''} lg:hidden`}>
                        <div className="sidebar-content-two ">
                            {/* Close button */}
                            <button className="close-btn-left " onClick={toggleSidebarMobileDevice}>
                                <MdOutlineCancel className='text-white text-2xl' />
                            </button>
                            {/* Sidebar links */}
                            <div className='mt-8 sm:mt-8 semi-sm:mt-5 '>
                                <div className="flex  items-center font-cinzel">
                                    <Player className=" sm:w-14 semi-sm:w-24"
                                        autoplay
                                        loop
                                        src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                                    >
                                    </Player>
                                    <h1 className="text-lg font-bold  text-white " style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                                </div>
                                <ul className="xs:px-3 sm:px-5 semi-sm::px-6 mt-5">
                                    <hr />
                                    <li className="text-white text-lg hover:text-[#46d993] font-bold py-3"><NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] " : ""
                                    } to="/">Home</NavLink></li>
                                    <hr />
                                    <li className="text-white text-lg hover:text-[#46d993] font-bold py-3"><NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] " : ""
                                    } to="/offer">Projects</NavLink></li>
                                    <hr />
                                    <li className="text-white text-lg hover:text-[#46d993] font-bold py-3"><NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] " : ""
                                    } to="/blog">Blog</NavLink></li>
                                    <hr />
                                    <li className="text-white text-lg hover:text-[#46d993] font-bold py-3"><NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] " : ""
                                    } to="/contact">Contact</NavLink></li>
                                    <hr />
                                    <li className="text-white text-lg hover:text-[#46d993] font-bold py-3"><NavLink className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] " : ""
                                    } to="/about">About</NavLink></li>
                                    <hr />
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Navbar li for large device */}
                <div className="navbar-center hidden lg:flex font-poppins">
                    <ul className=" flex gap-10">
                        <li className="text-[#fff] text-base hover:text-[#c9f31d] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#c9f31d] underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-[#fff] text-base hover:text-[#c9f31d] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-[#c9f31d] font-bold underline" : ""
                        } to="/projects">Projects</NavLink></li>
                        <li className="text-[#fff] text-base hover:text-[#c9f31d] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/blog">Blog</NavLink></li>
                        <li className="text-[#fff] text-base hover:text-[#c9f31d] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/contact">Contact</NavLink></li>
                        <li className="text-[#fff] text-base hover:text-[#c9f31d] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/about">About</NavLink></li>

                    </ul>
                </div>

                {/* Navbar end for large device and right side content  */}
                <div className="navbar-end flex items-center gap-5 font-poppins">
                    <h1 className='text-[#fff] text-base font-medium hidden lg:block'>LET'S TALK</h1>
                    <div
                        className={`border px-4 py-4 rounded-full bg-[#c9f31d] icon-transition hidden lg:block`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={toggleSidebar}
                    >
                        {isHovered ? (
                            <IoMdMenu className='text-2xl transition-all duration-3000' />
                        ) : (
                            <RiMenu2Fill className='text-2xl transition-all duration-3000' />
                        )}
                    </div>
                </div>
            </div>
            {/* Sidebar Content */}
            <div className={`sidebar ${showSidebar ? 'active' : ''} hidden md:block`}>
                <div className="sidebar-content">
                    {/* Close button */}
                    <button className="close-btn left-btn" onClick={toggleSidebar}>
                        <MdOutlineCancel className='text-white text-2xl' />
                    </button>
                    {/* Sidebar links */}
                    <div className='mt-10'>
                        <div className="flex  items-center font-cinzel">
                            <Player className="w-24"
                                autoplay
                                loop
                                src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                            >
                            </Player>
                            <h1 className="text-2xl font-bold  text-white " style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                        </div>
                        <h1 className='text-white text-2xl font-poppins ml-7 mt-5'>Unique Digital Ideas for Successful Business</h1>
                        <p className='text-white/50 font-medium text-lg ml-7 mt-6 font-lora'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque.</p>
                        <hr className='mt-6 mx-6' />
                        <h1 className='text-xl font-medium text-white ml-7 mt-6 font-poppins'>Contact Information</h1>
                        <div className='flex  ml-6 mt-5 gap-4 font-lora' >
                            <CiLocationOn className='text-[#c9f31d] text-3xl' />
                            <h1 className="text-white text-lg">West Khulshi R/A,Road No-2,Chattrogram,Bangladesh</h1>
                        </div>
                        <div className='flex items-center ml-6 mt-5 gap-4 font-lora' >
                            <MdOutlineMailOutline className='text-[#c9f31d] text-xl' />
                            <h1 className="text-white text-lg">shaifshajedt@gmail.com</h1>
                        </div>
                        <div className='flex items-center ml-6 mt-5 gap-4 font-lora' >
                            <FaPhoneFlip className='text-[#c9f31d] text-lg' />
                            <h1 className="text-white text-lg">01993566305</h1>
                        </div>
                        <hr className='mt-7 mx-6' />
                        <h1 className='text-xl font-medium text-white ml-7 mt-7 font-poppins'>Follow Me</h1>
                        <div className='flex items-center gap-3 ml-6 mt-7'>
                            <a href='https://www.facebook.com/mdshaifshajed.tonoy?mibextid=ZbWKwL' className='px-3 py-3 rounded-full border bg-[#fff]'>
                                <FaFacebookF className='text-lg text-black' />
                            </a>
                            <a href='https://twitter.com/ShaifTonoy84292' className='px-3 py-3 rounded-full border bg-[#fff]'>
                                <FaTwitter className='text-lg text-black' />
                            </a>
                            <a href='https://www.linkedin.com/in/shaif-shajed-tonoy-17356121a/' className='px-3 py-3 rounded-full border bg-[#fff]'>
                                <FaLinkedinIn className='text-lg text-black' />
                            </a>
                            <a href='https://www.instagram.com/shaifshajed?igsh=MWxnYjN4ZHB2bWZ1ag==' className='px-3 py-3 rounded-full border bg-[#fff]'>
                                <FaInstagram className='text-lg text-black' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`backdrop ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}></div>
        </div>
    );
};

export default Navbar;