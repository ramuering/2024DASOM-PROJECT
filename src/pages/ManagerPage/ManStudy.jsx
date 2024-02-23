import React, { useState, useEffect } from 'react';
import './ManStudy.css';
import Header from '../../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManStudy() {
  const [studys, setStudys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudys = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/board/study');
        if (response.data.success) {
          setStudys(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching studys:', error);
      }
    };
    

    fetchStudys();
  }, []);

  const handleWithdrawal = async (studyId) => {
    const confirmDelete = window.confirm('스터디를 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`https://dmu-dasom.or.kr:8090/board/study/${studyId}`);
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

  const handleModify = (studyId) => {
    // 선택된 스터디 정보 가져오기
    const selectedStudy = studys.find((study) => study.studyNo === studyId);
    // 스터디 수정 페이지로 이동 및 선택된 스터디 정보 전달
    navigate(`/ManStudyModify/${studyId}`, { state: { study: selectedStudy } });
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
                <button className='manStudy-btn-modify' onClick={() => handleModify(study.studyNo)}>수정</button>
                <button className='manStudy-btn-withdraw' onClick={() => handleWithdrawal(study.studyNo)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ManStudy;
