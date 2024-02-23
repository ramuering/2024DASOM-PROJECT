import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 추가
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import "./StudyInfo.css"


console.log("여기는 들어옴")
const StudyInfo = () => {
  console.log("상세페이지 들어옴")
  const { studyNo } = useParams(); // studyNo로 수정
  const [studyInfo, setStudyInfo] = useState(null); // StudyInfo로 수정

  useEffect(() => {
    const fetchStudyInfo = async () => {
      try {
        const response = await axios.get(`https://dmu-dasom.or.kr:8090/board/study/${studyNo}`);
        if (response.data.success) {
          setStudyInfo(response.data.data);
        }
      } catch (error) {
        console.error('스터디 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchStudyInfo();
  }, [studyNo]);

  return (
    <Container>
      <div className="studyInfo-title-wrapper">
        <div className="studyInfo-title">{studyInfo.studyTitle}</div>
        <div className="studyInfo-start-date">{studyInfo.startDate} ~ </div>
        <div className="studyInfo-end-date">{studyInfo.endDate}</div>
      </div>
      <div className="studyInfo-content-wrapper">
        <div className="studyInfo-content">{studyInfo.studyContent}</div>
        <div className='studyInfo-image' />
      </div>
      <div className="studyInfo-refer">
        <div className="studyInfo-refer-title">기타 자료</div>
        <table>
          <thead >
            <tr>
              <th className="studyInfo-table-head">종류</th>
              <th className="studyInfo-table-head">내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="studyInfo-table-content1">참고 자료</td>
              <td className="studyInfo-table-content2">{studyInfo.referencesUrl}</td>
            </tr>
            <tr>
              <td className="studyInfo-table-content1">노션</td>
              <td className="studyInfo-table-content2">{studyInfo.notionUrl}</td>
            </tr>
            <tr>
              <td className="studyInfo-table-content1">StartDate</td>
              <td className="studyInfo-table-content2">{studyInfo.startDate}</td>
            </tr>
            <tr>
              <td className="studyInfo-table-content1">EndDate</td>
              <td className="studyInfo-table-content2">{studyInfo.endDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="studyInfo-weekly">
        <div className="studyInfo-weekly-title">주차 별 활동</div>
        <hr/>
        <div className="studyInfo-weekly-content">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
        <hr/>
        <div className="studyInfo-weekly-content">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
        <hr/>
        <div className="studyInfo-weekly-content">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
        <hr/>
        <div className="studyInfo-weekly-content">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
        <hr/>
        <div className="studyInfo-weekly-content">Lorem ipsum dolor sit amet, consectetur adipisicing </div>
      </div>
      <div className="studyInfo-footer">
        <Footer/>
      </div>
    </Container>
  )
}

export default StudyInfo;

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
