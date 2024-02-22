import React, { useState, useEffect } from 'react';
import './ManStudy.css';
import Header from '../../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManStudy() {
  const [studys, setStudys] = useState([]);

  useEffect(() => {
    const fetchStudys = async () => {
      try {
        const response = await axios.get('http://dmu-dasom.or.kr:8090/board/study');
        if (response.data.success) {
          setStudys(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching studys:', error);
      }
    };

    fetchStudys();
  }, []);

  const navigate = useNavigate();

  const handleWithdrawal = async (studyId) => {
    try {
      const response = await axios.delete(`http://dmu-dasom.or.kr:8090/board/study/${studyId}`);
      if (response.data.success) {
        // 스터디 삭제 후, 스터디 목록을 다시 불러올 수 있도록 갱신
        const updatedStudys = studys.filter((study) => study.studyNo !== studyId);
        setStudys(updatedStudys);
      } else {
        console.error('Failed to delete study:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting study:', error);
    }
  };

  return (
    <div className='manStudy'>
      <Header />
      <div className='manStudy-only'>
        <p className='manStudy-title'>스터디 관리</p>
        <a className='manStudy-a' href='./manStudyApply'>
          <button className='manStudy-button'>스터디 등록</button>
        </a>
        <div className='manStudy-studyList'>
          <div className='manStudy-listTitle'>
            <p className='manStudy-name'>이름</p>
            <p className='manStudy-modify'>수정</p>
            <p className='manStudy-withdraw'>삭제</p>
          </div>
          <ul>
            {studys.map((study) => (
              <li key={study.studyNo}>
                <div className='manStudy-infoname'>{study.studyTitle}</div>
                <a href={`./ManStudyModify/${study.studyNo}`}>
                  <button className='manStudy-btn-modify'>수정</button>
                </a>
                <button
                  className='manStudy-btn-withdraw'
                  onClick={() => handleWithdrawal(study.studyNo)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManStudy;
