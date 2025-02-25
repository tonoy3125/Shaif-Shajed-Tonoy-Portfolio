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
        <SwiperSlide className="mb-24 semi-sm:mb-20 md:mb-12">
          <img
            src="https://i.ibb.co.com/g5dG513/Screenshot-2025-02-25-at-13-21-20-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/wZ6KTkCG/Screenshot-2025-02-25-at-13-21-47-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Ld7NXq8j/Screenshot-2025-02-25-at-13-22-02-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/WpgMKPT9/Screenshot-2025-02-25-at-13-26-34-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/8Dr49KKh/Screenshot-2025-02-25-at-13-26-49-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/svxZGFf5/Screenshot-2025-02-25-at-13-26-59-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/G3HSjBjr/Screenshot-2025-02-25-at-13-27-24-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/mVYHz2Wh/Screenshot-2025-02-25-at-13-27-35-Power-Pulse-Fitness-Home.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/zdJg0MG/Screenshot-2025-02-25-at-13-28-01-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/TBn2qT7t/Screenshot-2025-02-25-at-13-28-16-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/zW2GQVTH/Screenshot-2025-02-25-at-13-28-32-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/PvgPGs1Z/Screenshot-2025-02-25-at-13-28-40-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/dJx8GB47/Screenshot-2025-02-25-at-13-28-52-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/WvK6f0St/Screenshot-2025-02-25-at-13-29-18-Power-Pulse-Fitness-Products.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/zVRDhhrZ/Screenshot-2025-02-25-at-13-29-28-Power-Pulse-Fitness-About-us.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/8DyfjkgP/Screenshot-2025-02-25-at-13-31-51-Power-Pulse-Fitness-Checkout.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/HTDTsZsD/Screenshot-2025-02-25-at-13-31-39-Power-Pulse-Fitness-My-Cart.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/0jpckmhC/Screenshot-2025-02-25-at-13-31-19-Power-Pulse-Fitness-Account.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/JR9r502s/Screenshot-2025-02-25-at-13-30-51-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/4Zt2BD6b/Screenshot-2025-02-25-at-13-30-25-Power-Pulse-Fitness-Account.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/8DMbCdwm/Screenshot-2025-02-25-at-13-30-15-Power-Pulse-Fitness-Account.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/chvSHxbr/Screenshot-2025-02-25-at-13-30-05-Power-Pulse-Fitness-About-us.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/qLtDm4wY/Screenshot-2025-02-25-at-13-29-58-Power-Pulse-Fitness-About-us.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/YF51vWLf/Screenshot-2025-02-25-at-13-29-47-Power-Pulse-Fitness-About-us.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/1JvqNkkx/Screenshot-2025-02-25-at-13-29-37-Power-Pulse-Fitness-About-us.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Zpdtv8JC/Screenshot-2025-02-25-at-13-35-38-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Y7csHrhH/Screenshot-2025-02-25-at-13-35-27-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/WNJmznsY/Screenshot-2025-02-25-at-13-35-21-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/j95FQYGw/Screenshot-2025-02-25-at-13-35-14-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/spqjS5Z3/Screenshot-2025-02-25-at-13-35-03-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/m56WCkvj/Screenshot-2025-02-25-at-13-34-53-Power-Pulse-Fitness-My-Wishlist.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/ZRBbdDX7/Screenshot-2025-02-25-at-13-34-33-Power-Pulse-Fitness-Payment.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/R42x9N0w/Screenshot-2025-02-25-at-13-33-36-Power-Pulse-Fitness-Order-Summery.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/7dNybmCH/Screenshot-2025-02-25-at-13-33-29-Power-Pulse-Fitness-Order-Summery.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/yBpBv09r/Screenshot-2025-02-25-at-13-32-03-Power-Pulse-Fitness-Checkout.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
