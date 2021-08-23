import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import styled from "styled-components";

import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

console.log(process.env.PUBLIC_URL);

export default () => {
  const items = [
    {
      img: "/2.png",
      title: "Social media",
      desc: "Social media website with modern style adaptable to all devices, chating, call , post ...  (MERN)",
      link: "https://clvansa.de",
    },
    {
      img: "/office.jpg",
      title: "Portfolio",
      desc: "Website  adaptable to all devices, with ui components and animated interactions",
      link: "https://portfolio.clvansa.de",
    },
    {
      img: "/agency.png",
      title: "Agency Template",
      desc: "Website  adaptable to all devices, with ui components and animated interactions",
      link: "https://agency.clvansa.de",
    },
    {
      img: "/financy.png",
      title: "Financy",
      desc: "Website  adaptable to all devices, with ui components and animated interactions for accouting",
      link: "https://financy.clvansa.de",
    },
  ];

  const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  {
    items.map((item, i) => {
      slides.push(
        <SwiperSlide
          key={`slide-${i}`}
          tag="li"
          style={{ borderRadius: "20px", listStyle: "none" }}
        >
          <Box style={{ padding: "40px 5px", marginTop: 10 }}>
            <img
              // src={`https://picsum.photos/id/${i + 1}/500/300`}
              src={item.img}
              style={{
                // listStyle: "none",
                borderRadius: "20px",
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
              alt={`Slide ${i}`}
            />
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link href={item.link} target="_blank">
              Demo
            </Link>
          </Box>
        </SwiperSlide>
      );
    });
  }
  // }

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

const Box = styled.div`
  padding: 40px 5px;
  margin-top: 10;
  color: #2b2a30;
  text-align: center;
`;

const Title = styled.h1``;
const Desc = styled.p`
  text-align: left;
  padding: 0 5px;
`;
const Link = styled.a`
  color: blue;
  font-weight: 900;
`;
