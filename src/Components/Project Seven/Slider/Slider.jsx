/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useState } from "react";

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
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/RnPztsJ/Screenshot-2025-03-17-at-14-20-28-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/dhnCTkP/Screenshot-2025-03-17-at-14-20-19-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/x87nb1Qp/Screenshot-2025-03-17-at-13-51-51-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/ZRtNpMNt/Screenshot-2025-03-17-at-13-52-30-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/zWw3jP8M/Screenshot-2025-03-17-at-13-52-49-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/tpvxdDg1/Screenshot-2025-03-17-at-13-53-00-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Gf6M5Rw4/Screenshot-2025-03-17-at-13-53-09-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/cKnb7Wm3/Screenshot-2025-03-17-at-13-53-20-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/r25KTQcK/Screenshot-2025-03-17-at-13-53-29-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/xqMQ0HPp/Screenshot-2025-03-17-at-13-53-39-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/pvLfMJTK/Screenshot-2025-03-17-at-14-06-42-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/TxR0V4xq/Screenshot-2025-03-17-at-14-07-08-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/CpZ3V8r6/Screenshot-2025-03-17-at-14-07-20-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/v6nJ00kr/Screenshot-2025-03-17-at-14-08-25-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/6xTZbtj/Screenshot-2025-03-17-at-14-08-32-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/GQ182STN/Screenshot-2025-03-17-at-14-08-37-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/350kRH2V/Screenshot-2025-03-17-at-14-08-55-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/spx3cQfQ/Screenshot-2025-03-17-at-14-09-03-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/xkjcyXv/Screenshot-2025-03-17-at-14-18-11-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/rXLgz9P/Screenshot-2025-03-17-at-14-19-06-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qMz3Pbx1/Screenshot-2025-03-17-at-14-19-20-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/TxM46fdH/Screenshot-2025-03-17-at-14-19-28-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/JR62v25N/Screenshot-2025-03-17-at-14-19-35-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/ZpdZGSty/Screenshot-2025-03-17-at-14-19-44-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qYncwyfh/Screenshot-2025-03-17-at-14-19-51-On-The-Go.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
