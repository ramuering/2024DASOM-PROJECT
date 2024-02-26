import Footer from '../../components/Footer';
import styled from 'styled-components';
import "./Study.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Study = () => {
  const [studys, setStudys] = useState([]);

  useEffect(() => {
    const fetchStudys = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/board/study');
        if (response.data.success) {
          setStudys(response.data.data); // setStudys로 수정
          console.log("회원이 보는 프로젝트 페이지 == > 스터디 리스트 받아오기 성공");
          console.log(response);
        }
      } catch (error) {
        console.error('Error fetching study:', error);
      }
    };

    fetchStudys(); 
  }, []);

  return (
    <Container>
      <div className='study-title'>study</div>
      <div className="study-list">
        <div className="study-box-container">
          {studys.map((study, index) => (
            <Link to={`/studyInfo/${study.studyNo}`} key={index} className="study-link">
              <div className="study-box">
                 <div className="study-img" style={{ backgroundImage: `url(${study.thumbnailPic})` }}></div>
                <div className="study-content">
                  <div className="study-content-title-wrapper">
                    <div className="study-content-title">{study.studyTitle}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="study-footer">
        <Footer />
      </div>
    </Container>
  );
}

export default Study; 

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
