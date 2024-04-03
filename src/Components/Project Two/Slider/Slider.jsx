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
                    <img src="https://i.ibb.co/7WsRsT9/Screenshot-2024-04-03-at-15-13-12-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/pRFzncd/Screenshot-2024-04-03-at-15-13-25-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/kQCRT0z/Screenshot-2024-04-03-at-15-13-36-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/TRhPJKk/Screenshot-2024-04-03-at-15-13-43-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jbJ6rMT/Screenshot-2024-04-03-at-15-13-50-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/znPBfyM/Screenshot-2024-04-03-at-15-13-59-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/r7qB6Hw/Screenshot-2024-04-03-at-15-24-36-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/RTZXzx6/Screenshot-2024-04-03-at-15-24-29-Evergreen-Estates-Home.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7pTsMPM/Screenshot-2024-04-03-at-15-17-19-Evergreen-Estates-All-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gJCWJVq/Screenshot-2024-04-03-at-15-19-53-Evergreen-Estates-All-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/hcMtQNF/Screenshot-2024-04-03-at-15-21-06-Evergreen-Estates.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JyWnSR0/Screenshot-2024-04-03-152209.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/zxzHgdL/Screenshot-2024-04-03-at-15-22-20-Evergreen-Estates.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qY8qZBD/Screenshot-2024-04-03-at-15-17-42-Evergreen-Estates-Admin-Profile.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/cyc1Lmm/Screenshot-2024-04-03-at-15-17-49-Evergreen-Estates-Manage-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/LPL3P7L/Screenshot-2024-04-03-at-15-17-56-Evergreen-Estates-Manage-Review-Card.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/0YFjv2S/Screenshot-2024-04-03-at-15-18-05-Evergreen-Estates-Manage-Review.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/YPLrM4q/Screenshot-2024-04-03-at-15-18-20-Evergreen-Estates-Dash-Board.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HNDTWp0/Screenshot-2024-04-03-at-15-18-40-Evergreen-Estates-Manage-Review-Card.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5GZpFz3/Screenshot-2024-04-03-at-15-40-36-Evergreen-Estates-Agent-Profile.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9b5tsdC/Screenshot-2024-04-03-at-15-40-46-Evergreen-Estates-Add-Property.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/k3sn3WL/Screenshot-2024-04-03-at-15-41-30-Evergreen-Estates-My-Added-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZggBc1Y/Screenshot-2024-04-03-at-15-41-40-Evergreen-Estates-My-Sold-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/ZfvRvLs/Screenshot-2024-04-03-at-15-46-49-Evergreen-Estates-Requested-Properties.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/cYR7xJb/Screenshot-2024-04-03-at-15-51-26-Evergreen-Estates-My-Profile.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qdD3JvB/Screenshot-2024-04-03-at-15-51-36-Evergreen-Estates-Wishlist.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/sWKcck2/Screenshot-2024-04-03-at-15-51-45-Evergreen-Estates-Wishlist-Form.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/fdCkRjH/Screenshot-2024-04-02-at-15-13-44-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/hm0dTRw/Screenshot-2024-04-03-at-16-11-19-Evergreen-Estates-My-Reviews.png" alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;