import React from 'react'
import Header from "../../components/Header"
import styled from "styled-components"
// import Slide from "../../components/Slider"
import "./Main.css"
import { Link } from 'react-router-dom'

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Slider from '../../components/Slider';

const Main = () => {

  const images = [
    '/images/dasom-logo.png',
    '/images/dasom-logo.png',
    '/images/dasom-logo.png',
    '/images/dasom-logo.png',
    '/images/dasom-logo.png',
    '/images/dasom-logo.png',
  ]
  return (
    <Container>
      <Header />
      <div className='video-wrapper'>
        <div className='video'>
        <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="1200"
        height="764"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8zY28ay5FPZk0BcKI7q5Q1%2FDASOM%3Fpage-id%3D0%253A1%26node-id%3D1060-141%26scaling%3Dcontain%26starting-point-node-id%3D1060%253A716%26show-proto-sidebar%3D1%26mode%3Ddesign%26t%3D09dqcWW5YUo8f3Vd-1"
        allowFullScreen
        title="Figma Embed"
        >
        </iframe>
        </div>
      </div>
      <div className='main-title'>컴퓨터소프트웨어공학과 전공동아리 DASOM</div>
      <div className='main-title-info'>
        <div className='foundation'>
          <div className='main-title-info-title'>창립연도</div>
          <div className='main-title-info-content'>1992</div>
        </div>
        <div className='member'>
          <div className='main-title-info-title'>누적 회원 수</div>
          <div className='main-title-info-content'>1000+</div>
        </div>
        <div className='operating'>
          <div className='main-title-info-title'>운영기수</div>
          <div className='main-title-info-content'>32기</div>
        </div>
        <div className='expo'>
          <div className='main-title-info-title'>EXPO 수상</div>
          <div className='main-title-info-content'>2+</div>
        </div>
      </div>

      <div className='part'>
        <div className='part-title'>DASOM은 총 4개의 파트로 나뉘어져 있어요</div>
        <div className='box-container'>
          <div className="box">
            <div className='part-info-title'>기획</div>
            <p className='part-info-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio deleniti optio, odio aperiam voluptates mollitia, quis alias iusto maxime ducimus sapiente sed saepe aliquid unde consequatur facilis similique at.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>Server</div>
            <p className='part-info-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptates debitis eligendi, nulla adipisci illo dignissimos obcaecati rerum veniam nihil harum accusamus tempore ut doloremque, facilis doloribus laborum suscipit ex.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>Web</div>
            <p className='part-info-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste, aperiam natus magnam quam temporibus nam quas aspernatur possimus? At nulla quos voluptatibus quia harum dicta voluptates eligendi aut quidem.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>App</div>
            <p className='part-info-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sequi ipsum quas placeat magnam, in consequuntur eos voluptas accusamus. Cum hic eos vero doloribus illo maxime! Iste sequi sit iure.</p>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className='activity-title'>DASOM은 이런 활동을 하고 있어요</div>
        <div className="activity-box-container">
          <div className="activity-box">
            <div className="image-box">
              STUDY
            </div>
            <div className="content-box">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad autem, non consequatur tenetur voluptate iste. Consequuntur, quaerat! Natus recusandae rem corrupti quisquam neque consequuntur quod, minus magnam ipsa quia.
            </div>
          </div>
          <div className="activity-box">
            <div className="image-box">
              PROJECT
            </div>
            <div className="content-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium. Impedit, maiores molestiae quis a mollitia accusamus veritatis molestias? Optio libero totam minima. Officiis ipsa deleniti architecto fugiat rem illo.</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
              MT
            </div>
            <div className="content-box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil, et eligendi reiciendis vero id sit quidem cumque harum at sunt impedit voluptatem, voluptatibus consectetur culpa distinctio, expedita dolores sed.</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
              TUTORING
            </div>
            <div className="content-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam mollitia libero ut quis iure necessitatibus, quae saepe! Vero quaerat voluptas incidunt odio commodi possimus, nostrum temporibus ex eligendi eius!</div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slider-title">활동 사진</div>
      </div>
      <div className="about">
        <div className="about-title">DASOM 둘러보기</div>
        <div className="about-box-container">
          <div className="about-box">
            <div className="about-img"></div>
            <div to="/about" className="about-link-tag">ABOUT &gt;</div>
          </div>
          <div className="about-box">
            <div className="about-img"></div>
            <div className="about-link">FAQ &gt;</div>
          </div>
          <div className="about-box">
            <div className="about-img"></div>
            <div className="about-link">GitHub &gt;</div>
          </div>
        </div>
      
      </div>
    </Container>
  )
}

export default Main

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
