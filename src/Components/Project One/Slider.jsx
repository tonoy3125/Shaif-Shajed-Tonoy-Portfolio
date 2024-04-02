// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
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
                <SwiperSlide className='mb-12'>
                    <img src="https://i.ibb.co/ggQwWKK/Screenshot-2024-04-02-at-14-40-29-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nMs5ZYk/Screenshot-2024-04-02-at-14-32-26-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/0QKTs9D/Screenshot-2024-04-02-at-14-28-45-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/L15j18q/Screenshot-2024-04-02-at-14-28-21-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/DpkWXhc/Screenshot-2024-04-02-at-14-35-52-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/KzZQVLr/Screenshot-2024-04-02-at-14-35-18-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/pLC6Nfm/Screenshot-2024-04-02-at-14-36-05-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/mGVhYhf/Screenshot-2024-04-02-at-14-36-17-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vPL2gnM/Screenshot-2024-04-02-at-14-36-59-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/XDwWJyc/Screenshot-2024-04-02-at-14-37-39-easy-Checkout.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/J5pT52h/Screenshot-2024-04-02-at-14-47-35-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jVCr0jg/Screenshot-2024-04-02-at-14-48-00-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/3M8zjg8/Screenshot-2024-04-02-at-14-48-17-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/s5xdSNp/Screenshot-2024-04-02-at-14-48-50-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/J598gSF/Screenshot-2024-04-02-at-14-49-23-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/rQsRdKj/Screenshot-2024-04-02-at-14-50-03-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/4Ny8NFp/Screenshot-2024-04-02-at-14-49-49-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/c3S21pj/Screenshot-2024-04-02-at-14-59-50-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/jbmgrWv/Screenshot-2024-04-02-at-15-03-32-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gtTVRG9/Screenshot-2024-04-02-at-15-04-00-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5M2hTFH/Screenshot-2024-04-02-at-15-05-44-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/VqxDVwM/Screenshot-2024-04-02-at-15-07-00-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/WN9cX2V/Screenshot-2024-04-02-at-15-15-27-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nwFsH0Z/Screenshot-2024-04-02-at-15-12-55-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/h7tyxH5/Screenshot-2024-04-02-at-15-13-14-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/m5Mx1SY/Screenshot-2024-04-02-at-15-13-23-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Jzp9Cm4/Screenshot-2024-04-02-at-15-13-37-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/fdCkRjH/Screenshot-2024-04-02-at-15-13-44-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vVxvKrV/Screenshot-2024-04-02-at-15-13-52-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/2M727HQ/Screenshot-2024-04-02-at-15-14-05-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/zr1kCCP/Screenshot-2024-04-02-at-15-14-16-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/zHhqq6v/Screenshot-2024-04-02-at-15-14-29-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/yP2114g/Screenshot-2024-04-02-at-15-14-35-BD-Quick-School.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gRWf04F/Screenshot-2024-04-02-at-15-14-44-BD-Quick-School.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;