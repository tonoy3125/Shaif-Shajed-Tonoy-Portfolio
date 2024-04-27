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

const Certificate = () => {

    

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
                        <SwiperSlide className='cursor-pointer' onClick={() => document.getElementById('my_modal_1').showModal()}>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/FVFX1Df/57abb816-2610-4786-ab97-5e2de77d50d8-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Full Stack Development</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>Programming Hero</h5>
                            <dialog id="my_modal_1" className="modal">

                                <div className="modal-box w-11/12 max-w-5xl modal-container">

                                    <div className="">
                                        <h3 className="font-bold text-lg">Certifate Details</h3>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-6 top-5">✕</button>
                                        </form>
                                    </div>
                                    <hr className="mt-1 mb-2" />
                                    <div>
                                        <img className=' rounded-md' src="https://i.ibb.co/FVFX1Df/57abb816-2610-4786-ab97-5e2de77d50d8-1-1.png" alt="" />
                                        <hr className="mt-1 mb-5" />
                                        <h1 className='text-2xl font-lora font-medium mt-2 lg:ml-4'><span className='font-poppins font-bold'>Course Name :</span> Complete Web Development Course</h1>
                                        <h1 className='text-2xl font-lora font-medium mt-2 lg:ml-4'><span className='font-poppins font-bold'>Issuing organization :</span> Programming Hero</h1>
                                        <h4 className='text-xl font-lora font-medium mt-2 lg:ml-4'><span className='font-poppins font-bold'>Credential ID :</span> Credential ID WEB8-0790</h4>
                                        <h4 className='text-xl font-lora font-medium mt-2 lg:ml-4'><span className='font-poppins font-bold'>Skills :</span> Full Stack Development</h4>
                                    </div>
                                    <hr className="mt-5 mb-2" />
                                </div>
                            </dialog>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/jvBgdRb/Certificate-Of-Completion-Become-a-Full-Stack-Web-Developer-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Full Stack Development</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/59vkZ5m/Certificate-Of-Completion-Python-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Python Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/j6pXNbV/Certificate-Of-Completion-Flutter-Essential-Training-Build-for-Multiple-Platforms-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Flutter Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/xfW322M/Certificate-Of-Completion-Dev-Ops-Foundations-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>DevOps Foundations</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/Lvq2NY8/Certificate-Of-Completion-Learning-REST-APIs-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Learning REST APIs</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/LxFVWH7/Certificate-Of-Completion-No-SQL-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>NoSQL Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/jRR5tqR/Certificate-Of-Completion-SQL-Essential-Training-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>SQL Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/MR6xw2s/Certificate-Of-Completion-Programming-Foundations-Software-Testing-QA-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Software Testing</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/4fDZF5T/Certificate-Of-Completion-Learning-ECMAScript-6-ES6-2-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>ECMAScript 6+ (ES6+)</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/vQt2wcp/Certificate-Of-Completion-Node-js-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Node.js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/hddwHTp/Certificate-Of-Completion-React-js-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>React.js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/jDDzB1H/Certificate-Of-Completion-Java-Script-Essential-Training-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Js Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/t4R1WLX/Certificate-Of-Completion-Git-Essential-Training-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Git Essential Training</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/YbJ7RwV/Certificate-Of-Completion-Search-Techniques-for-Web-Developers-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Search Techniques</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/KrxMJ31/Certificate-Of-Completion-Hands-On-Projects-for-Open-AIPowered-Apps-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>OpenAI-Powered Apps</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/nkFXcRb/Certificate-Of-Completion-GPT4-Foundations-Building-AIPowered-Apps-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>GPT-4 Foundations</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/Cv1kxpy/Certificate-Of-Completion-Hands-On-AI-Build-a-Generative-Language-Model-from-Scratch-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Hands-On AI</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/sjk8qV9/Certificate-Of-Completion-Building-Apps-with-AI-Tools-Chat-GPT-Semantic-Kernel-and-Langchain-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Building Apps with AI Tools</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/z85jD62/Certificate-Of-Completion-Building-a-Video-Transcriber-with-Node-js-and-Google-AI-Speech-To-Text-API.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Build a Video Transcriber</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/YWsB8M8/Certificate-Of-Completion-Hands-On-Generative-AI-Applying-Your-Tabular-Data-With-Chat-GPT-GPT4-and-L.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Hands-On Generative AI</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/PTKnSJG/Certificate-Of-Completion-Hands-On-Open-AI-API-Building-a-Real-World-Solution-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Hands-On OpenAI API</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/wKZsPPw/Certificate-Of-Completion-Getting-Handson-with-GPT4-Tips-and-Tricks-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>AI Tips and Tricks</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>LinkedIn</h5>
                        </SwiperSlide>
                        <SwiperNavButton />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Certificate;