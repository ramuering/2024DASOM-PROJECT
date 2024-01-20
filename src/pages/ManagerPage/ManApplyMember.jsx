import React, { useState } from 'react'
import './ManApplyMember.css'
import Header from '../../components/Header'

function ManApplyMember() {

  const applyMembers = [
    { id: 1, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '31' },
    { id: 3, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '31' },
    { id: 2, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '31' },
    { id: 4, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 5, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 6, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 7, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 8, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 9, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 10, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 11, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 12, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
    { id: 13, department: '컴퓨터소프트웨어공학과', name: '홍길동', gen: '32' },
  ]

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
        <div>
          <div className='manAM-ApplyMember-title'>

          </div>
          <ul>

          </ul>
        </div>
      </div>
    </div>
  );
};




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