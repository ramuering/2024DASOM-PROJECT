import Footer from '../../components/Footer'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./ProjectInfo.css"

console.log("여기는 들어옴")
const ProjectInfo = () => {
console.log("상세페이지 들어옴")
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
            생생한 동아리 소식을 빠르게 전해듣는<br />
            학생 서비스 'DASOM'
          </div>
          <div className="projectInfo-box-info">
            <div className="projectInfo-info-title">프로젝트 설명</div>
            <div className="projectInfo-info-content">{projectInfo.projectContent}</div>
          </div>
          <div className="projectInfo-box">
            <div className="projectInfo-box-sum">
              <div className="projectInfo-sum-title">프로젝트 요약</div>
              <div className="projectInfo-sum-content">{projectInfo.projectSummary}</div>
            </div>
            {/* 프로젝트 링크 등의 내용 */}
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
