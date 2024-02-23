import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 추가
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../../components/Footer';


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
        <div className="studyInfo-title">Spring</div>
        <div className="studyInfo-date">2023.12.31 ~ 2024.01.31</div>
      </div>
      <div className="studyInfo-content-wrapper">
        <div className="studyInfo-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ut corrupti officia corporis voluptas tempore molestiae ducimus expedita neque facilis aliquid a vero itaque repellendus! Enim omnis laboriosam blanditiis similique.</div>
        <div className='studyInfo-image' />
      </div>
      <div className="studyInfo-refer">
        <div className="studyInfo-refer-title">참고 자료</div>
        <table>
          <thead >
            <tr>
              <th className="studyInfo-table-head">종류</th>
              <th className="studyInfo-table-head">내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="studyInfo-table-content1">교재</td>
              <td className="studyInfo-table-content2">x</td>
            </tr>
            <tr>
              <td className="studyInfo-table-content1">강의</td>
              <td className="studyInfo-table-content2">모든 국민은 납세의 의무를 띈다</td>
            </tr>
            <tr>
              <td className="studyInfo-table-content1">노션</td>
              <td className="studyInfo-table-content2">https://notion.io</td>
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
