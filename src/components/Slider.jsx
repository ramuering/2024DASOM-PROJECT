
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import styled from "styled-components";

const Slider = () => {
  const images = [
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg',
    '/images/study-sample.jpeg'
  ]
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} 
        pagination={{ clickable: true }} 
        spaceBetween={10}
        slidesPerView={1}
      >
        <Content>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Wrap>
              <img src={image} alt={`Slide ${index + 1}`} />
            </Wrap>
          </SwiperSlide>
      ))}
        </Content>
      </Swiper>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width: 630px;  
  height: 500px;  
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 500px;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
