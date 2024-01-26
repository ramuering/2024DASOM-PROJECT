import React from 'react'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import "./Study.css"
import { Link } from 'react-router-dom'

const Study = ()=>  {
  return (
    <Container>
      <div className='study-title'>STUDY</div>
      <div className="study-list">
        <div className="study-box-container">

        
        <div className="study-box">
          <div className="study-img"></div>
          <div className="study-content">
          <div className="study-content-title-wrapper">
                <div className="study-content-title">Spring</div>
                <div className="study-content-gener">32기</div>
              </div>
            <div className="study-content-sub">Back-End 희망자를 위한 Spring 스터디</div>
          </div>
        </div>
        <div className="study-box">
          <div className="study-img"></div>
          <div className="study-content">
              <div className="study-content-title-wrapper">
                <div className="study-content-title">Figma</div>
                <div className="study-content-gener">32기</div>
              </div>
            <div className="study-content-sub">UI / UX 기초 디자인</div>
          </div>
        </div>
        <div className="study-box">
          <div className="study-img"></div>
          <div className="study-content">
          <div className="study-content-title-wrapper">
                <div className="study-content-title">React</div>
                <div className="study-content-gener">32기</div>
              </div>
            <div className="study-content-sub">Front-End 희망자를 위한 React 스터디</div>
          </div>
        </div>
        <div className="study-box">
          <div className="study-img"></div>
          <div className="study-content">
          <div className="study-content-title-wrapper">
                <div className="study-content-title">Algorithm</div>
                <div className="study-content-gener">32기</div>
              </div>
            <div className="study-content-sub">코딩테스트를 위한 Algorithm 스터디</div>
          </div>
          </div>
          </div>
      </div>
      <Link to="/studyinfo" className="study-move-button">
        <div className="study-move-font">더보기</div>
      </Link>
      <div className="study-footer">
        <Footer/>
      </div>
    </Container>
    
  )
}

export default Study

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;