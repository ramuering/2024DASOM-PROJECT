import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import styled from "styled-components"
import Slide from "../../components/Slider"
import CountUp from 'react-countup';
import "./Main.css"
import { Link } from 'react-router-dom'
import Slider from '../../components/Slider'

const NMBVideoDiv = styled.div`
  width:100vw;
  height:100vh;
  position: absoute;
`;

const NMBVideoTag = styled.div`
  width:100vw;
  height:100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NMBVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NMBNullBox = styled.div`
    width: 100%;
    height: 700px;
`;

 

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          if (scrollPosition > 100) { 
              setIsVisible(true);
          }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Container>
      <NMBVideoDiv>
              <NMBVideoTag>

                <NMBVideo muted autoPlay>
                  <source src={require("./Video/Dasom_1.mp4")} type="video/mp4" />

                </NMBVideo>
              </NMBVideoTag>
            </NMBVideoDiv>
            <NMBNullBox></NMBNullBox>
      <div className='main-title'>컴퓨터소프트웨어공학과 전공동아리 DASOM</div>
      
      <div className='main-title-info'>
        <div className='foundation'>
          <div className='main-title-info-title'>창립연도</div>
          <div className='main-title-info-content'>1992</div>
        </div>
        <div>
            <div className='member'>
            <div className='main-title-info-title1'>누적 회원 수</div>
            <div className='member-countup-number'>
                {isVisible && <CountUp end={1000} duration={4} />} {/* 누적 회원 수를 나타내는 CountUp 컴포넌트 */}
                +</div>
            </div>
            <div className='operating'>
            <div className='main-title-info-title1'>운영기수</div>
            <div className='operating-countup-number'>
                {isVisible && <CountUp end={32} duration={4} />} {/* 운영기수를 나타내는 CountUp 컴포넌트 */}
            </div>
            </div>
        </div>
        <div className='expo'>
          <div className='main-title-info-title'>EXPO 수상</div>
          <div className='main-title-info-content'>2+</div>
        </div>
      </div>

      <div className='part'>
        <div className='part-title'>DASOM은 총 4개의 파트로 나뉘어져 있어요</div>
        <Link to='/recruit' className='go-recruit'>지원하러 가기</Link>

        <div className='box-container'>
          <div className="box">
            <div className='part-info-title'>기획</div>
            <p className='part-info-content'>개발팀과 협력하여 제품 또는 서비스의 개발 일정과 목표를 설정하고, 기획에 대한 이해를 전달하여 원활한 개발 진행을 돕습니다.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>Server</div>
            <p className='part-info-content'>Spring 프레임 워크, 관계형 데이터베이스와AWS를 기반으로 서버를 구축및 운영하는 과정을 학습합니다. 세미나, 코드리뷰, 스터디를 통해 개발 실력을 증진시킵니다.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>Web</div>
            <p className='part-info-content'>UI 구현, 서버 통신 등 웹 서비스 개발에 필요한 역량들을 학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업 경험을 통해 개발 협업 방식을 익힐 수 있습니다.</p>
          </div>
          <div className="box">
            <div className='part-info-title'>App</div>
            <p className='part-info-content'>설계된 기능과 구조에 따라 애플리케이션을 개발합니다. 프로그래밍 언어 및 프레임워크를 사용하여 코드를 작성하고, 데이터베이스를 구축하고, 사용자 인터페이스를 개발하는 것을 포함합니다</p>
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
            실력을 심도있게 다질 수 있는 스터디와 다양한 동아리원들과 친목을 쌓을 수 있는 네트워킹이 열려요. 자율적으로 개설하고 참여할 수 있어요.            
            </div>
          </div>
          <div className="activity-box">
            <div className="image-box">
              <div className='main-pro-background-image'></div>
              <div className="main-text">PROJECT</div>
            </div>
            <div className="content-box">여러가지 목적과 목표를 설정 후 주로 IT 기술을 배우고 활용하여 프로젝트를 수행하며, 동아리원들 간의 지식 공유와 협업을 통해 기술적 역량을 향상시키는 데 초점을 맞추고 있어요.

</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
            <div className='main-mt-background-image'></div>
              <div className="main-text">MT</div>
            </div>
            <div className="content-box">MT는 학기 중 1번 동아리 내의 친목과 소속감을 형성하고 동아리의 활동에 대한 이해도를 높이고, 동아리 내에서 보다 활발하고 즐겁게 활동할 수 있게 돼요.</div>
          </div>
          <div className="activity-box">
            <div className="image-box">
            <div className='main-tu-background-image'></div>
              <div className="main-text">TUTORING</div>
            </div>
            <div className="content-box">튜터링은 학습자가 어려움을 겪는 학습 분야에서 개인이나 소규모 그룹에게 지원을 제공하는 교육적인 활동이에요. 주로 학업적인 지식이나 기술적인 기술에 대한 지원이 이루어지며, 일반적으로 선배 튜터가 후배 튜티에게 지식을 전달하고 도와줘요.</div>
          </div>
        </div>
      </div>
      <div className="slider">
        <SliderWrapper >
        {/* <Slider /> */}
        </SliderWrapper>
        
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
            <Link to="/Makers">
              <div className="main-about-link">Makers &gt;</div>
              </Link>
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
  height:100vh
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 237px;
  height: 700px;
  width: 100vw;
  `;