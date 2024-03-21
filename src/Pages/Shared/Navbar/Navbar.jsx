import { AiOutlineMenu } from 'react-icons/ai';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/offer">Projects</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/blog">Blog</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/contact">Contact</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/about">About</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex lg:gap-2 items-center font-cinzel">
                        <Player className="w-24"
                            autoplay
                            loop
                            src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                        >
                        </Player>
                        <h1 className="text-xl font-bold  text-white " style={{ whiteSpace: "nowrap" }}>Shaif Shajed Tonoy</h1>
                    </div>

                </div>
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

                {/* User login and logout toggle */}

                <div className="navbar-end flex items-center gap-5 font-poppins">
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;