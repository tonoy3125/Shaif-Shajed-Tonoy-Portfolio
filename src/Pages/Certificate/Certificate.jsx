/* eslint-disable react/no-unescaped-entities */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Modal.css'
// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react';

const Certificate = () => {

    useEffect(() => {
        const handleCloseModalOutside = (event) => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.close(); // Close the modal
                }
            });
        };

        window.addEventListener('click', handleCloseModalOutside);

        return () => {
            window.removeEventListener('click', handleCloseModalOutside);
        };
    }, []);


    return (
        <div className="container mx-auto py-32">
            <div className=" flex flex-col lg:flex-row max-w-7xl lg:ml-28 gap-10 ">
                <div className='pl-6'>
                    <h1 style={{ letterSpacing: '0.2em' }} className='text-white text-2xl xs:text-2xl semi-sm:text-3xl md:text-4xl font-poppins font-bold mb-3'>Check Out</h1>
                    <h1 className='text-white xs:text-2xl semi-sm:text-3xl md:text-4xl font-poppins font-bold mb-7'>My Certificate</h1>
                    <p className='text-white font-lora text-base md:w-96'>I have done various programmimg courses to increase my programming skills and i'm sharing few of them</p>

                    <div className='flex items-center mt-10'>
                        <button className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Know More</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                    </div>
                </div>
                <div className="lg:w-3/5 w-full px-5 md:px-5 lg:px-0">

                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView="3"
                        className=" w-full"
                        speed={2000}
                        breakpoints={{
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 425px
                            425: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 375px
                            375: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {/* 1st Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_1').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/FVFX1Df/57abb816-2610-4786-ab97-5e2de77d50d8-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Full Stack Development</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>Programming Hero</h5>
                            <dialog id="my_modal_1" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div>
                                        <img className='rounded-md' src="https://i.ibb.co/FVFX1Df/57abb816-2610-4786-ab97-5e2de77d50d8-1-1.png" alt="" />
                                        <hr className="mt-1 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Course Name :</span> Complete Web Development Course</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Issuing organization :</span> Programming Hero</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Credential ID :</span> Credential ID WEB8-0790</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Skills :</span> Full Stack Development</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 2nd Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_2').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/jvBgdRb/Certificate-Of-Completion-Become-a-Full-Stack-Web-Developer-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Full Stack Development</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_2" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/jvBgdRb/Certificate-Of-Completion-Become-a-Full-Stack-Web-Developer-1-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Become a Full-Stack Web Developer</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2'><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2'><span className='font-poppins font-bold'>Credential ID :</span> 7dbd3f7c038a6301bc40f6d8a7<br className='sm:hidden' />95f268<br className='xs:hidden sm:block semi-sm:hidden' />32<br className='xs:hidden semi-sm:block md:hidden' />bb950179153f901b2fa<br className='sm:hidden' />90d74727b44</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2'><span className='font-poppins font-bold'>Skills :</span> Web Developement, Full Stack Development</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 3rd Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/59vkZ5m/Certificate-Of-Completion-Python-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Python Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_3" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/59vkZ5m/Certificate-Of-Completion-Python-Essential-Training-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Python Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2'><span className='font-poppins font-bold'>Credential ID :</span> 2403836fa778a13cfdb650cf13deb5902fa55c20d5d64969328a4484c548d1a6</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span>  Python (Programming Language)</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 4th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_4').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/j6pXNbV/Certificate-Of-Completion-Flutter-Essential-Training-Build-for-Multiple-Platforms-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Flutter Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_4" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/j6pXNbV/Certificate-Of-Completion-Flutter-Essential-Training-Build-for-Multiple-Platforms-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Flutter Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 68bd800f7d2076c50a6eadd2a641bf22900136df035c420f0d45ca873815ec52</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Flutter</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 5th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_5').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/xfW322M/Certificate-Of-Completion-Dev-Ops-Foundations-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>DevOps Foundations</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_5" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/xfW322M/Certificate-Of-Completion-Dev-Ops-Foundations-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> DevOps Foundations</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 037e1d7dac9bfddbe6d795604ad6aba6ec80bb4dd0328d0934a250ffbc421c56</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> DevOps</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 6th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_6').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/Lvq2NY8/Certificate-Of-Completion-Learning-REST-APIs-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Learning REST APIs</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_6" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/Lvq2NY8/Certificate-Of-Completion-Learning-REST-APIs-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Learning REST APIs</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> c58da85b02ce0b717ca3ccfd8eaaea73bf6e975af40bccd4ea371b7ce1b4a399</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span>  REST APIs</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 7th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_7').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/LxFVWH7/Certificate-Of-Completion-No-SQL-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>NoSQL Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_7" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/LxFVWH7/Certificate-Of-Completion-No-SQL-Essential-Training-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> NoSQL Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 5d9218996c83a53735c0207bca04368ebe4b5f7e3a9143e5746c9cbacc48d3cc</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> NoSQL</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 8th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_8').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/jRR5tqR/Certificate-Of-Completion-SQL-Essential-Training-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>SQL Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_8" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/jRR5tqR/Certificate-Of-Completion-SQL-Essential-Training-1-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> SQL Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> ddc08864fe88b5900986bdf304f3b386b1d8b4117da9f923ca23f85210a2535d</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> SQL</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 9th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_9').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/MR6xw2s/Certificate-Of-Completion-Programming-Foundations-Software-Testing-QA-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Software Testing</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_9" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/MR6xw2s/Certificate-Of-Completion-Programming-Foundations-Software-Testing-QA-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Programming Foundations Software Testing</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 5449a09dcb1a4ae3facf80ad9040480f11e4d54f89edeb299ee334aca8f651be</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Software Testing , Software Quality Assurance</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 10th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_10').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/4fDZF5T/Certificate-Of-Completion-Learning-ECMAScript-6-ES6-2-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>ECMAScript 6+ (ES6+)</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_10" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/4fDZF5T/Certificate-Of-Completion-Learning-ECMAScript-6-ES6-2-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> ECMAScript 6+ (ES6+)</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 238073717fb29c191c980a1809d5f28d631106b920bcf73a7967a50072f78440</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> JavaScript, ECMAScript</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 11th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_11').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/vQt2wcp/Certificate-Of-Completion-Node-js-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Node.js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_11" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/vQt2wcp/Certificate-Of-Completion-Node-js-Essential-Training-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Node.js Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> d6fb578e2cf6932eb617ef1263d1d41ed6aa83f88b21b2b9b60a01a4706505a1</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Node.js</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 12th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_12').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/hddwHTp/Certificate-Of-Completion-React-js-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>React.js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_12" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/hddwHTp/Certificate-Of-Completion-React-js-Essential-Training-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> React.js Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 226b58f034d3ba390927d4216b824c8a86f9592fceec6c897dd386dcbbe6631c</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> React.js</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 13th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_13').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/jDDzB1H/Certificate-Of-Completion-Java-Script-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_13" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/jDDzB1H/Certificate-Of-Completion-Java-Script-Essential-Training-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> JavaScript Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 7a4ca620fad5cbe4a4e748179ad4ca09ccacd46b933790d22ccc26e47f25e631</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span>  JavaScript</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 14th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_14').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/t4R1WLX/Certificate-Of-Completion-Git-Essential-Training-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Git Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_14" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/t4R1WLX/Certificate-Of-Completion-Git-Essential-Training-1-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Git Essential Training</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> ac8495d2b15a9ad5d0434e5cd16e346688d6f2a96b28b60a1784c0b1aa07ccbe</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Git</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 15th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_15').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/YbJ7RwV/Certificate-Of-Completion-Search-Techniques-for-Web-Developers-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Search Techniques</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_15" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/YbJ7RwV/Certificate-Of-Completion-Search-Techniques-for-Web-Developers-1-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Search Techniques for Web Developers</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 8fdad13b7df88f61ae4888c48e167c5a49eaa15b23500e093a57086815be9866</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Web Application Development,Search</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 16th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_16').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/KrxMJ31/Certificate-Of-Completion-Hands-On-Projects-for-Open-AIPowered-Apps-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>OpenAI-Powered Apps</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_16" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/KrxMJ31/Certificate-Of-Completion-Hands-On-Projects-for-Open-AIPowered-Apps-1-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Hands On Projects for Open AI-Powered Apps</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 6fe1eb7d445666972c6ba664279d1f414d0bb211e233c96db0e67931968cedef</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills : </span> ChatGPT , Artificial Intelligence (AI) , Generative AI</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 17th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_17').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/nkFXcRb/Certificate-Of-Completion-GPT4-Foundations-Building-AIPowered-Apps-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>GPT-4 Foundations</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_17" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/nkFXcRb/Certificate-Of-Completion-GPT4-Foundations-Building-AIPowered-Apps-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> GPT-4 Foundations Building AI-Powered Apps</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 96087f3bcd8b920d7e2597f548836bf9d483e2a955a6bceecb84986d94f9281a</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> GPT-4 , Artificial Intelligence (AI) , Generative AI</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 18th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_18').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/Cv1kxpy/Certificate-Of-Completion-Hands-On-AI-Build-a-Generative-Language-Model-from-Scratch-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Hands-On AI</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_18" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/Cv1kxpy/Certificate-Of-Completion-Hands-On-AI-Build-a-Generative-Language-Model-from-Scratch-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Hands On AI-Build a Generative Language</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 749d50604b81a3f4742fce178b01448b3b28a92d81acb5900cea08f417588216</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Natural Language Generation , Language Modeling , Artificial Intelligence (AI)</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 19th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_19').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/sjk8qV9/Certificate-Of-Completion-Building-Apps-with-AI-Tools-Chat-GPT-Semantic-Kernel-and-Langchain-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Building Apps with AI Tools</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_19" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/sjk8qV9/Certificate-Of-Completion-Building-Apps-with-AI-Tools-Chat-GPT-Semantic-Kernel-and-Langchain-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Building Apps with AI Tools</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 2e0901f277b8dd9b46adb5d098aa8e3af90cfdf4a7b658d7ddf5cb691b25d5c9</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> OpenAI Products , LangChain , Semantic Kernel</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 20th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_20').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/z85jD62/Certificate-Of-Completion-Building-a-Video-Transcriber-with-Node-js-and-Google-AI-Speech-To-Text-API.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Build a Video Transcriber</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_20" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/z85jD62/Certificate-Of-Completion-Building-a-Video-Transcriber-with-Node-js-and-Google-AI-Speech-To-Text-API.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Build a Video Transcriber</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> efb508e0c878ae5319b2a03779813aed49777a61b4605152a712ac5dfb13f30b</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Node.js , Artificial Intelligence (AI) , Machine Transcription</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 21th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_21').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/YWsB8M8/Certificate-Of-Completion-Hands-On-Generative-AI-Applying-Your-Tabular-Data-With-Chat-GPT-GPT4-and-L.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Hands-On Generative AI</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_21" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/YWsB8M8/Certificate-Of-Completion-Hands-On-Generative-AI-Applying-Your-Tabular-Data-With-Chat-GPT-GPT4-and-L.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Hands-On Generative AI</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> a9ed3ca6637ff473ca6d2d513683a3dff6c96c1bbe088ef163968787cabd2e58</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> Business Analytics , LangChain , ChatGPT</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 22th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_22').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/PTKnSJG/Certificate-Of-Completion-Hands-On-Open-AI-API-Building-a-Real-World-Solution-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>Hands-On OpenAI API</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_22" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/PTKnSJG/Certificate-Of-Completion-Hands-On-Open-AI-API-Building-a-Real-World-Solution-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> Hands-On OpenAI API</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 07f06a9e890e38d5480001812aacb703a94d107db520c7d1d40e7b500ea8ac04</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> OpenAI Products , Technical Solution Development</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        {/* 23th Certificate */}
                        <SwiperSlide onClick={() => document.getElementById('my_modal_23').showModal()}>
                            <img className='border rounded-md overflow-hidden cursor-pointer' src="https://i.ibb.co/wKZsPPw/Certificate-Of-Completion-Getting-Handson-with-GPT4-Tips-and-Tricks-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>AI Tips and Tricks</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>LinkedIn</h5>
                            <dialog id="my_modal_23" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-3 mb-4" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/wKZsPPw/Certificate-Of-Completion-Getting-Handson-with-GPT4-Tips-and-Tricks-1.png" alt="" />
                                        <hr className="mt-4 mb-5" />
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Course Name :</span> AI Tips and Tricks</h1>
                                        <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Issuing organization :</span> Linkedin</h1>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Credential ID :</span> 9c990a4512011f24eebef42f25ce5468d8f26d6707f718ea5f6ae56754b464cd</h4>
                                        <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 '><span className='font-poppins font-bold'>Skills :</span> GPT-4 , Generative AI </h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        <SwiperNavButton />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Certificate;