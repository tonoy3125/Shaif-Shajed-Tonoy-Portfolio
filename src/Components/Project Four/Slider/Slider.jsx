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
                    <img src="https://i.ibb.co/3rWPCF5/Screenshot-2024-04-04-at-14-28-00-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HdxcSR6/Screenshot-2024-04-04-at-14-28-11-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/52yP1gD/Screenshot-2024-04-04-at-14-28-19-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/8xFqRGw/Screenshot-2024-04-04-at-14-28-25-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HtR3Y1r/Screenshot-2024-04-04-at-14-28-51-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Y2p8mBj/Screenshot-2024-04-04-at-14-29-04-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/FY6sCW7/Screenshot-2024-04-04-at-14-29-49-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/X3s51SX/Screenshot-2024-04-04-at-14-29-58-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/bXfv4vK/Screenshot-2024-04-04-at-14-30-07-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9NHYrct/Screenshot-2024-04-04-at-14-30-23-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/t8m8Ltc/Screenshot-2024-04-04-at-14-30-31-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Mh86czd/Screenshot-2024-04-04-at-14-30-44-Rimberio-Automotive.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;