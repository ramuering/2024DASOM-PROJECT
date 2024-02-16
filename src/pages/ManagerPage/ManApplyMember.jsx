import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import './ManApplyMember.css';
import Header from '../../components/Header';
import { useAppContext } from '../../contexts/AppContext';

function ManApplyMember() {
  const [applyMembers, setApplyMembers] = useState([
    { id: 1, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1', status: '' },
    { id: 3, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1', status: '' },
    { id: 2, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1', status: '' },
    { id: 4, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 5, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 6, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 7, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 8, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 9, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 10, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 11, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 12, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
    { id: 13, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2', status: '' },
  ]);

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(applyMembers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'dasom_applicant_data.xlsx');
  };

  const [editable, setEditable] = useState(false);

  const [dates, setDates] = useState({
    applyStart: '',
    applyEnd: '',
    firstAnnounce: '',
    interviewStart: '',
    interviewEnd: '',
    secondAnnounce: '',
  });

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = async () => {
    setEditable(false);
    try {
      // 서버로 선택된 날짜를 전송
      const response = await axios.post('http://localhost:8090/recruit', { 
        applyStart,
        applyEnd,
        firstAnnounce,
        interviewStart,
        interviewEnd,
        secondAnnounce,
       });
      if (response.status === 201) {
        alert('날짜가 성공적으로 저장되었습니다!');
      } else {
        alert('날짜 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('날짜 저장 중 오류 발생:', error);
    }
  };

  const handleDateChange = (fieldName, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: value,
    }));
  };

  const { closeApplication, isApplicationOpen } = useAppContext();

  const handleButtonClick = (id, status) => {
    const updatedApplyMembers = applyMembers.map((applyMember) => {
      if (applyMember.id === id) {
        return { ...applyMember, status: status };
      }
      return applyMember;
    });
    setApplyMembers(updatedApplyMembers);
  };

  const handleSendPassMembersToBackend = async () => {
    const passMembers = applyMembers.filter((applyMember) => applyMember.status === 'pass');
  
    console.log('Pass Members:', passMembers);
    
    try {
      const response = await fetch('http://localhost:8090/recruit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passMembers),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // 서버 응답을 기다린 후에 alert를 표시
      alert("합격자 정보를 전송하였습니다!");
    } catch (error) {
      console.error('Error sending data to the server:', error);
      alert('서버와의 통신 중 오류가 발생했습니다.');
    }
  };


  return (
    <div className='manAM'>
      <Header />
      <div className='manAM-only'>
        <p className='manAM-title'>모집 관리</p>
        <div className='manAM-date'>
          <div className='manAM-date-row'>
            <p>서류 접수</p>
            <DateRangeInput
              startDate={dates.applyStart}
              endDate={dates.applyEnd}
              onChangeStart={(value) => handleDateChange('applyStart', value)}
              onChangeEnd={(value) => handleDateChange('applyEnd', value)}
              readOnly={!editable}
            />
          </div>
          <div className='manAM-date-row'>
            <p>서류 결과 발표</p>
            <DateInput 
              value={dates.firstAnnounce}
              onChange={(value) => handleDateChange('firstAnnounce', value)}
              readOnly={!editable}
               />
          </div>
          <div className='manAM-date-row'>
            <p>대면 면접</p>
            <DateRangeInput
              startDate={dates.interviewStart}
              endDate={dates.interviewEnd}
              onChangeStart={(value) => handleDateChange('interviewStart', value)}
              onChangeEnd={(value) => handleDateChange('interviewEnd', value)}
              readOnly={!editable}
            />
          </div>
          <div className='manAM-date-row'>
            <p>최종 발표</p>
            <DateInput 
              value={dates.secondAnnounce}
              onChange={(value) => handleDateChange('secondAnnounce', value)}
              readOnly={!editable}
               />
          </div>
        </div>
        {editable ? (
          <button className='manAM-editBtn' onClick={handleSaveClick}>저장</button>
        ) : (
          <button className='manAM-editBtn' onClick={handleEditClick}>모집 일정 변경</button>
        )}
        {isApplicationOpen ? (
          <button className='manAM-magamBtn' onClick={closeApplication}>모집 마감</button>
        ) : (
          <button className='manAM-magamBtn' onClick={closeApplication}>모집 열기</button>)}
        <p className='manAM-applyCount'>{`신청 인원 : ${applyMembers.length}`}</p>
        <div className='manAM-list'>
          <div className='manAM-listTitle'>
            <p className='manAM-department'>학과</p>
            <p className='manAM-name'>이름</p>
            <p className='manAM-grade'>학년</p>
            <p className='manAM-pass'>합격</p>
            <p className='manAM-nonPass'>불합격</p>
          </div>
          <ul>
            {applyMembers.map((applyMember) => (
              <li key={applyMember.id}>
                <div className='manAM-infodepartment'>{`${applyMember.department}`}</div>
                <div className='manAM-infoname'>{`${applyMember.name}`}</div>
                <div className='manAM-infograde'>{`${applyMember.grade}`}</div>
                <button
                  className={`manAM-infopass ${applyMember.status === 'pass' ? 'manAM-selected' : ''}`}
                  onClick={() => handleButtonClick(applyMember.id, 'pass')}
                >
                  합격
                </button>
                <button
                  className={`manAM-infononPass ${applyMember.status === 'nonPass' ? 'manAM-selected' : ''}`}
                  onClick={() => handleButtonClick(applyMember.id, 'nonPass')}
                >
                  불합격
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='manAM-excelPassBtn'>
          <button className='manAM-excel' onClick={handleExportExcel}>엑셀 추출</button>
          <button className='manAM-passMembersBtn' onClick={handleSendPassMembersToBackend}>합격자 전송</button>
        </div>
      </div>
    </div>
  );
}

const DateInput = ({ value, onChange, readOnly, editable }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      className={editable ? 'manAM-date-customInput-editable' : 'manAM-date-customInput'}
    />
  );
};

const DateRangeInput = ({ startDate, endDate, onChangeStart, onChangeEnd, readOnly }) => {
  const handleStartChange = (value) => {
    onChangeStart(value);
  };

  const handleEndChange = (value) => {
    onChangeEnd(value);
  };

  return (
    <div>
      <DateInput value={startDate} onChange={handleStartChange} readOnly={readOnly} />
      {' ~ '}
      <DateInput value={endDate} onChange={handleEndChange} readOnly={readOnly} />
    </div>
  );
};

export default ManApplyMember;