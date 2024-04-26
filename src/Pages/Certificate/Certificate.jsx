
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Certificate = () => {


    return (
        <div className="container mx-auto py-20">
            <div className=" flex flex-col lg:flex-row items-center max-w-7xl lg:ml-28 gap-10 ">
                <div>
                    <h1 style={{ letterSpacing: '0.2em' }} className='text-white text-2xl sm:text-3xl semi-sm:text-4xl md:text-4xl font-poppins font-bold mb-3'>Check Out</h1>
                    <h1 className='text-white md:text-4xl font-poppins font-bold mb-7'>My Certificate</h1>
                    <p className='text-white font-lora text-base w-96'>I have done various programmimg courses to increase my programming skills and i'm sharing few of them</p>

                    <div className='flex items-center mt-10'>
                        <button className="xs:px-3 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#c9f31d] flex items-center font-lora text-[#070707] hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Know More</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                    </div>
                </div>
                {/* <img className="w-[550px] hidden lg:block animate-up-and-down overflow-hidden" src="https://i.ibb.co/8xTD1R5/feedback-six.png" alt="" /> */}
                {/* slider */}
                <div className="lg:w-3/5 w-full px-3 md:px-5 lg:px-0">

                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView="3"
                        className=" w-full"
                        speed={2000}
                    >
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/FVFX1Df/57abb816-2610-4786-ab97-5e2de77d50d8-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Full Stack Development</h3>
                            <h5 className='text-white font-lora font-semibold text-base mt-4 text-center'>Programming Hero</h5>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='border rounded-md overflow-hidden' src="https://i.ibb.co/jvBgdRb/Certificate-Of-Completion-Become-a-Full-Stack-Web-Developer-1-1.png" alt="" />
                            <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center'>Full Stack Development</h3>
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