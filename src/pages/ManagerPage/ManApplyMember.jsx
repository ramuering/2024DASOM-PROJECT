import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './ManApplyMember.css';
import Header from '../../components/Header';

function ManApplyMember() {
  const applyMembers = [
    { id: 1, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1' },
    { id: 3, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1' },
    { id: 2, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '1' },
    { id: 4, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 5, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 6, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 7, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 8, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 9, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 10, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 11, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 12, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
    { id: 13, department: '컴퓨터소프트웨어공학과', name: '홍길동', grade: '2' },
  ];

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(applyMembers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'dasom_applicant_data.xlsx');
  };

  const [editable, setEditable] = useState(false);
  const [dates, setDates] = useState({
    documentSubmissionStart: '',
    documentSubmissionEnd: '',
    documentResultStart: '',
    documentResultEnd: '',
    InterviewStart: '',
    InterviewEnd: '',
    finalAnnouncementStart: '',
    finalAnnouncementEnd: '',
  });

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
  };

  const handleDateChange = (fieldName, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: value,
    }));
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
              startDate={dates.documentSubmissionStart}
              endDate={dates.documentSubmissionEnd}
              onChangeStart={(value) => handleDateChange('documentSubmissionStart', value)}
              onChangeEnd={(value) => handleDateChange('documentSubmissionEnd', value)}
              readOnly={!editable}
            />
          </div>
          <div className='manAM-date-row'>
            <p>서류 결과 발표</p>
            <DateRangeInput
              startDate={dates.documentResultStart}
              endDate={dates.documentResultEnd}
              onChangeStart={(value) => handleDateChange('documentResultStart', value)}
              onChangeEnd={(value) => handleDateChange('documentResultEnd', value)}
              readOnly={!editable}
            />
          </div>
          <div className='manAM-date-row'>
            <p>대면 면접</p>
            <DateRangeInput
              startDate={dates.InterviewStart}
              endDate={dates.InterviewEnd}
              onChangeStart={(value) => handleDateChange('InterviewStart', value)}
              onChangeEnd={(value) => handleDateChange('InterviewEnd', value)}
              readOnly={!editable}
            />
          </div>
          <div className='manAM-date-row'>
            <p>최종 발표</p>
            <DateRangeInput
              startDate={dates.finalAnnouncementStart}
              endDate={dates.finalAnnouncementEnd}
              onChangeStart={(value) => handleDateChange('finalAnnouncementStart', value)}
              onChangeEnd={(value) => handleDateChange('finalAnnouncementEnd', value)}
              readOnly={!editable}
            />
          </div>
        </div>
        {editable ? (
          <button className='manAM-editBtn' onClick={handleSaveClick}>저장</button>
        ) : (
          <button className='manAM-editBtn' onClick={handleEditClick}>모집 일정 변경</button>
        )}
        <button className='manAM-magamBtn'>모집 마감</button>
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
                <button className='manAM-infopass'>합격</button>
                <button className='manAM-infononPass'>불합격</button>
              </li>
            ))}
          </ul>
        </div>
        <button className='manAM-excel' onClick={handleExportExcel}>엑셀 추출</button>
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