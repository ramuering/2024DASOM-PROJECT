// import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/pagination";
// import styled from "styled-components";

// const Slider = () => {
//   const images = [
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg',
//     '/images/study-sample.jpeg'
//   ];

//   return (
//     <Container>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         loop={true} 
//         navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
//         pagination={{ clickable: true }} 
//         spaceBetween={40} // 사이의 거리
//         slidesPerGroup={3}
//         slidesPerView={3}
//         centeredSlides={true} // 가운데 정렬
//         initialSlide={1} // 초기에 화면에 가운데 슬라이드가 보이도록 설정
//       >
//         <Content>
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <Wrap>
//                 <img src={image} alt={`Slide ${index + 1}`} />
//               </Wrap>
//             </SwiperSlide>
//           ))}
//         </Content>
//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//       </Swiper>
//     </Container>
//   );
// };

// export default Slider;

// const Container = styled.div`
//   padding: 0 0 26px;
// `;

// const Content = styled.div``;

// const Wrap = styled.div` 
//   height: 500px;  
//   border-radius: 50px;
//   cursor: pointer;
//   position: relative;
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

//   img {
//     inset: 0px;
//     display: block;
//     height: 422px;
//     object-fit: cover;
//     opacity: 1;
//     border-radius: 50px;
//     position: absolute;
//     width: 540px;
//     transition: opacity 500ms ease-in-out;
//     z-index: 1;
//   }

//   &:hover {
//     box-shadow: 10px 10px 24px 5px rgba(0, 0, 0, 0.50);
//     transform: scale(1.15);
//     border-color: rgba(249, 249, 249, 0.8);
//   }
// `;
