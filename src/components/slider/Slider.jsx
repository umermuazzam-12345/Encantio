import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import myApp from "../../assets/images/myApp.png";
import paycon from "../../assets/images/paycon.png";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={2}
      loop
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: -20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: -40,
        },
      }}
    >
      <SwiperSlide style={{ textAlign: "left" }}>
        <img
          src={myApp}
          alt="my app"
          style={{ display: "block", width: "90%" }}
        />
      </SwiperSlide>

      <SwiperSlide style={{ textAlign: "left" }}>
        <img
          src={paycon}
          alt="my app"
          style={{ display: "block", width: "90%" }}
        />
      </SwiperSlide>

      <SwiperSlide style={{ textAlign: "left" }}>
        <img
          src={myApp}
          alt="my app"
          style={{ display: "block", width: "90%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
