import Footer from '../../components/Footer'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./ProjectInfo.css"

const ProjectInfo = () => {
  const { projectNo } = useParams();
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const response = await axios.get(`https://dmu-dasom.or.kr:8090/board/project/${projectNo}`);
        if (response.data.success) {
          setProjectInfo(response.data.data);
        }
      } catch (error) {
        console.error('프로젝트 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchProjectInfo();
  }, [projectNo]);

  return (
    <Container>
      {projectInfo ? (
        <>
          <div className="projectInfo-title">
          {projectInfo.projectTitle}
          </div>
          <div className="projectInfo-box-info">
          <div className='projectInfo-image' style={{ backgroundImage: `url(${projectInfo.thumbnailPic})` }}/>

            <div className="projectInfo-info-title">프로젝트 설명</div>
            <div className="projectInfo-info-content">{projectInfo.projectContent}</div>
          </div>
          <div className="projectInfo-box">
            <div className="projectInfo-box-sum">
              <div className="projectInfo-sum-title">프로젝트 요약</div>
              <div className="projectInfo-sum-content">프로젝트 기간</div>
              <div className="projectInfo-start-date">{projectInfo.startDate} ~ </div>
              <div className="projectInfo-end-date">{projectInfo.endDate}</div>


            </div>
            <div className='projectInfo-box-link'>
            <div className='projectInfo-link-title'>프로젝트 링크</div>
            <a href={projectInfo.gitUrl} onClick={() => console.log('Clicked GitHub link:', projectInfo.gitUrl)}>
                <img className='projectInfo-link-content1' src='../../images/myPage/github.png' alt='깃허브로고' />
            </a>
            <a href='https://instagram.com/dasom___official'>{() => console.log('Clicked Instagram link:', projectInfo.instagramUrl)}
                <img className='projectInfo-link-content2' src='../../images/myPage/instagram.png' alt='인스타로고' />
            </a>
            <a href={projectInfo.notionUrl} onClick={() => console.log('Clicked Notion link:', projectInfo.notionUrl)}>
                <img className='projectInfo-link-content3' src='../../images/myPage/notion2.png' alt='노션링크로고' />
            </a>
        </div>


          </div>
          {/* 팀원 정보 등의 내용 */}
        </>
      ) : (
        <div>프로젝트 정보를 불러오는 중...</div>
      )}
      <div className="projectInfo-footer">
        <Footer />
      </div>
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.main`
    position: relative;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
