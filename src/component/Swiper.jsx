import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";

import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default () => {
  const items = [
    "https://images.unsplash.com/photo-1628329950644-71d16cd278ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  ];

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" style={{ borderRadius: "20px",listStyle: "none" }}>
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: "none", borderRadius: "20px" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides}
    </Swiper>
  );
};
