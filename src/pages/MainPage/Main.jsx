import React from 'react'
import Footer from '../../components/Footer'
import styled from "styled-components"
import "./Main.css"
import { Link } from 'react-router-dom'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const images = [
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" },
    { src: '/images/study-sample.jpeg', alt: "image" }
  ];

  const renderImage = (image) => {
    const { src, alt } = image;
    return (
      <div className="slide-item">
        <img src={src} alt={alt} />
      </div>
    )
  }
  return (
    <Container>
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
            <div className='main-background-image'></div>
              <div className="main-text">STUDY</div>
            </div>
            <div className="content-box">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad autem, non consequatur tenetur voluptate iste. Consequuntur, quaerat! Natus recusandae rem corrupti quisquam neque consequuntur quod, minus magnam ipsa quia.
            </div>
          </div>
          <div className="activity-box">
            <div className="image-box">
              <div className='main-pro-background-image'></div>
              <div className="main-text">PROJECT</div>
            </div>
            <div className="content-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laudantium. Impedit, maiores molestiae quis a mollitia accusamus veritatis molestias? Optio libero totam minima. Officiis ipsa deleniti architecto fugiat rem illo.</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
            <div className='main-mt-background-image'></div>
              <div className="main-text">MT</div>
            </div>
            <div className="content-box">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil, et eligendi reiciendis vero id sit quidem cumque harum at sunt impedit voluptatem, voluptatibus consectetur culpa distinctio, expedita dolores sed.</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
            <div className='main-tu-background-image'></div>
              <div className="main-text">TUTORING</div>
            </div>
            <div className="content-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam mollitia libero ut quis iure necessitatibus, quae saepe! Vero quaerat voluptas incidunt odio commodi possimus, nostrum temporibus ex eligendi eius!</div>
          </div>
        </div>
      </div>
      <div className="slider-part">
        <div className="slider-title">활동 사진</div>
        {/* <Slider /> */}
        <Wrap>
          <Slider {...settings}>
            {images.map((image, index) => (
            <React.Fragment key={index}>{renderImage(image)}</React.Fragment>
          ))}
          </Slider>
        </Wrap>
      </div>
      <div className="main-about">
        <div className="main-about-title">DASOM 둘러보기</div>
        <div className="main-about-box-container">
          <div className="main-about-box">
            <div className="main-about-img"></div>
            <Link to="/about">
            <div className="main-about-link-tag">ABOUT &gt;</div>
            </Link>
          </div>
          <div className="main-about-box">
            <div className="main-about-img"></div>
            <div className="main-about-link">FAQ &gt;</div>
          </div>
          <div className="main-about-box">
            <div className="main-about-img"></div>
            <a href='https://github.com/DASOM-GitHub'>
              <div className="main-about-link">GitHub &gt;</div>
              </a>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <Footer/>
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
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10% auto;
  width: 100%;
  `;