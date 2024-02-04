import React from 'react'
import styled from 'styled-components';
import "./ProjectInfo.css"
import Footer from '../../components/Footer';

const Member = ({ profile, name, gi }) => {
  return (
    <div className='projectInfo-profileBox'>
      <div className='projectInfo-profile'>
        <img src={profile} alt='프로필사진'></img>
      </div>
      <div className='projectInfo-name'>
        {name}</div>
      <div className='projectInfo-gi'>
        {gi}</div>
    </div>
  );
};

const ProjectInfo = () => {
  return (
    <Container>
      <div className="projectInfo-title">생생한 동아리 소식을 빠르게 전해듣는<br />학생 서비스 'DASOM' </div>
      <div className="projectInfo-video-wrapper">
        <div className="projectInfo-video">
        <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="1532"
        height="857"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8zY28ay5FPZk0BcKI7q5Q1%2FDASOM%3Fpage-id%3D0%253A1%26node-id%3D1060-141%26scaling%3Dcontain%26starting-point-node-id%3D1060%253A716%26show-proto-sidebar%3D1%26mode%3Ddesign%26t%3D09dqcWW5YUo8f3Vd-1"
        allowFullScreen
        title="Figma Embed"
        >
        </iframe>
        </div>
      </div>
      <div className="projectInfo-box-info">
         <div className="projectInfo-info-title">프로젝트 설명</div>
          <div className="projectInfo-info-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus unde aliquam. Repudiandae architecto alias libero, cumque dolorem vitae nobis dolor ipsam placeat iusto animi sequi omnis incidunt qui quas.
          </div>
        </div>
        <div className="projectInfo-box">
          <div className="projectInfo-box-sum">
            <div className="projectInfo-sum-title">프로젝트 요약</div>
            <div className="projectInfo-sum-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime odio repellat magnam optio sunt temporibus ut accusantium culpa corrupti eligendi quasi recusandae rem cupiditate error sint, aut enim exercitationem eum?</div>
          </div>
          <div className="projectInfo-box-link">
          <div className="projectInfo-link-title">프로젝트 링크</div>
          <div className="projectInfo-link-img">
              <div className="projectInfo-link-content1"></div>
              <div className="projectInfo-link-content2"></div>
              <div className="projectInfo-link-content3"></div>
            </div>
          </div>
        </div>
      <div className="projectInfo-teamMember">
        <div className="projectInfo-teamMem-title">프로젝트 팀원</div>
        <div className="projectInfo-teamMem-members">
          <Member profile='./images/myPage/profile.jpg' name='홍길동 / Front' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동 / Back' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동 / Design' gi='31기'></Member>
        </div>
      </div>
      <div className="projectInfo-footer">
        <Footer/>
      </div>
    </Container>
  )
}

export default ProjectInfo

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;