import React from 'react'
import Header from "../../components/Header"
import styled from "styled-components"
import "./Main.css"


const Main = () =>{
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
            <div className='part-info-title'>Design</div>
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




