/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'



// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={handleSlideChange}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 375px
                    375: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 425px
                    425: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide className='mb-24 semi-sm:mb-20 md:mb-12'>
                    <img src="https://i.ibb.co/SJvyXbJ/Screenshot-2024-04-03-at-20-24-33-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/w7gmtdc/Screenshot-2024-04-03-at-20-24-48-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3WNcMYc/Screenshot-2024-04-03-at-20-24-55-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/DkL0LfM/Screenshot-2024-04-03-at-20-25-02-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qR7RVnG/Screenshot-2024-04-03-at-20-25-24-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/w6wrZxK/Screenshot-2024-04-03-at-20-25-30-Job-Recruiter-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/6HdYbDK/Screenshot-2024-04-03-at-20-25-42-Job-Recruiter-Add-Job.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZgbBrcT/Screenshot-2024-04-03-at-20-25-49-Job-Recruiter-Add-Job.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9qpgR2q/Screenshot-2024-04-03-at-20-25-58-Job-Recruiter-My-Posted-Job.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/djhqgGz/Screenshot-2024-04-03-at-20-26-46-Job-Recruiter-Login.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/StdZSHt/Screenshot-2024-04-03-at-20-27-30-Job-Recruiter-Register.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jZB3R21/Screenshot-2024-04-03-at-20-26-07-Job-Recruiter-Bid-Request.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/725v6V7/Screenshot-2024-04-03-at-20-36-09-Job-Recruiter-My-Bid.png" alt="" />
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default Slider;