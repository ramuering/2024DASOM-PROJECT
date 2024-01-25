import React from 'react'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import "./Project.css"
import { Link } from 'react-router-dom'

const Project = ()=>  {
  return (
    <Container>
      <div className='project-title'>PROJECT</div>
      <div className="project-list">
        <div className="project-box-container">

        
        <div className="project-box">
          <div className="project-img"></div>
          <div className="project-content">
          <div className="project-content-title-wrapper">
                <div className="project-content-title">다솜플젝</div>
                <div className="project-content-part">WEB</div>
                <div className="project-content-gener">32기</div>
              </div>
            <div className="project-content-sub">다솜플젝상세</div>
          </div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="project-content">
              <div className="project-content-title-wrapper">
              <div className="project-content-title">다솜플젝</div>
                <div className="project-content-part">WEB</div>
                <div className="project-content-gener">32기</div>
              </div>
            <div className="project-content-sub">다솜플젝상세</div>
          </div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="project-content">
          <div className="project-content-title-wrapper">
          <div className="project-content-title">다솜플젝</div>
                <div className="project-content-part">WEB</div>
                <div className="project-content-gener">32기</div>
              </div>
            <div className="project-content-sub">다솜플젝상세</div>
          </div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="project-content">
          <div className="project-content-title-wrapper">
          <div className="project-content-title">다솜플젝</div>
                <div className="project-content-part">WEB</div>
                <div className="project-content-gener">32기</div>
              </div>
            <div className="project-content-sub">다솜플젝상세</div>
          </div>
          </div>
          </div>
      </div>
      <Link to="/projectInfo" className="project-move-button">
        <div className="project-move-font">더보기</div>
      </Link>
      <div className="project-footer">
        <Footer/>
      </div>
    </Container>
    
  )
}

export default Project

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;