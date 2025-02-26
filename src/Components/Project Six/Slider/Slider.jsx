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
            src="https://i.ibb.co.com/pNNfMff/Screenshot-2025-02-26-at-19-29-56-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/5WX7HfMj/Screenshot-2025-02-26-at-19-30-17-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/sB4rFNv/Screenshot-2025-02-26-at-19-30-29-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="mb-24 semi-sm:mb-20 md:mb-12">
          <img
            src="https://i.ibb.co.com/S7VG9g43/Screenshot-2025-02-26-at-19-30-41-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/B5G4rBMM/Screenshot-2025-02-26-at-19-32-40-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/h1dDzjHF/Screenshot-2025-02-26-at-19-32-31-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jPTBP6J5/Screenshot-2025-02-26-at-19-32-18-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/nNjg11n6/Screenshot-2025-02-26-at-19-32-02-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Z6BHRMzd/Screenshot-2025-02-26-at-19-31-55-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/hJ0QzfHZ/Screenshot-2025-02-26-at-19-31-41-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/tMjq6KX3/Screenshot-2025-02-26-at-19-31-21-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/LhYwMGKz/Screenshot-2025-02-26-at-19-31-14-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/DDKpzx04/Screenshot-2025-02-26-at-19-31-06-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/RpPgJDTp/Screenshot-2025-02-26-at-19-30-50-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/twjtLWrj/Screenshot-2025-02-26-at-21-17-26-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/60X9kWV8/Screenshot-2025-02-26-at-21-17-15-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Xx6yxwb6/Screenshot-2025-02-26-at-21-16-58-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/KjxvQNqY/Screenshot-2025-02-26-at-21-12-03-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/0yMZ9cB7/Screenshot-2025-02-26-at-21-09-31-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/5QzZdY6/Screenshot-2025-02-26-at-20-52-37-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/t7J4Hrz/Screenshot-2025-02-26-at-20-52-31-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/gZbRBkgB/Screenshot-2025-02-26-at-20-52-20-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/QvWSzv24/Screenshot-2025-02-26-at-19-32-53-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/BVq1JqSB/Screenshot-2025-02-26-at-19-32-47-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/vxHWGSsf/Screenshot-2025-02-26-at-21-19-14-Sand-Box-Demo-aamar-Pay.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/0j5VMFmk/Screenshot-2025-02-26-at-21-19-02-Secure-Checkout-v3-0-0-aamar-Pay.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/LzwcxPxn/Screenshot-2025-02-26-at-21-18-37-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/NdQ7MQTC/Screenshot-2025-02-26-at-21-18-31-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/CpctS41s/Screenshot-2025-02-26-at-21-18-16-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/wvCq6TW/Screenshot-2025-02-26-at-21-18-03-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/SDR7MdLP/Screenshot-2025-02-26-at-21-17-57-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/6Rxw64pp/Screenshot-2025-02-26-at-21-17-51-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/5x1vPJ0C/Screenshot-2025-02-26-at-21-17-41-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/FbB4yvLw/Screenshot-2025-02-26-at-21-17-33-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/V0qGrPJw/Screenshot-2025-02-26-at-21-23-45-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/7dPdMn0M/Screenshot-2025-02-26-at-21-23-38-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/SDnS99z9/Screenshot-2025-02-26-at-21-23-30-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Q76RC8J2/Screenshot-2025-02-26-at-21-23-24-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qMbfQggP/Screenshot-2025-02-26-at-21-23-15-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/1YmCZcC4/Screenshot-2025-02-26-at-21-23-05-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/4nCnvDwq/Screenshot-2025-02-26-at-21-22-55-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/h17s6yj7/Screenshot-2025-02-26-at-21-22-32-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/hFdQ6FzG/Screenshot-2025-02-26-at-21-19-34-Aqua-Auto.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qFgRx4L7/Screenshot-2025-02-26-at-21-19-20-Payment-Successful.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
