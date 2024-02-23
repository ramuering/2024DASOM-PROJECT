import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import './ManApplyMember.css';
import Header from '../../components/Header';

function ManApplyMember() {
  const [applyMembers, setApplyMembers] = useState([]);
  const [dates, setDates] = useState({
    applyStart: '',
    applyEnd: '',
    firstAnnounce: '',
    interviewStart: '',
    interviewEnd: '',
    secondAnnounce: '',
  });

  const [recruitMember, setRecruitMember] = useState([]);

  useEffect(() => {
    const fetchStudys = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/recruit/32/applicants');
        if (response.data.success) {
          setRecruitMember(response.data.data);
          console.log("지원자 받기 성공")
          console.log(response)
        }
      } catch (error) {
        console.error('Error fetching studys:', error);
      }
    };

    fetchStudys();
  }, []);

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(recruitMember);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'dasom_applicant_data.xlsx');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/32');
        setDates(response.data);
        if (response.data.success) {
          console.log('스케줄 가져오기 성공');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('Error fetching data: ', error);
          console.log('스케줄 데이터가 없습니다.');
        } else {
          console.error('스케줄 가져오기 실패', error);
        }
      } finally {
        console.log(dates);
      }
    };
    fetchData();
  }, []);

  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };
  const [closeApplication, setCloseApplication ] = useState(localStorage.getItem('closeApplication') === 'true');

  const handleApplicationClose = () => {
    setCloseApplication((prevState) => !prevState);
    localStorage.setItem('closeApplication', !closeApplication);
  }
  const handleSaveClick = async () => {
    setEditable(false);
    try {
      const {
        applyStart,
        applyEnd,
        firstAnnounce,
        interviewStart,
        interviewEnd,
        secondAnnounce,
      } = dates;
      // 서버로 선택된 날짜를 전송
      const response = await axios.put('https://dmu-dasom.or.kr:8090/recruit/32', {
        applyStart,
        applyEnd,
        firstAnnounce,
        interviewStart,
        interviewEnd,
        secondAnnounce,
       });
      if (response.status === 200) {
        alert('날짜가 성공적으로 저장되었습니다!');
      }
    } catch (error) {
      console.error('날짜 저장 중 오류 발생:', error);
    } finally {
      console.log(dates);
    }
  };

  const handleDateChange = (fieldName, value) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: value,
    }));
  };


  // const handleButtonClick = (acStudentNo, acStatus) => {
  //   const updatedrecruitMember = recruitMember.map((applyMember) => {
  //     if (applyMember.acStudentNo === acStudentNo) {
  //       return { ...applyMember, acStatus: acStatus };
  //     }
  //     return applyMember;
  //   });
  //   setRecruitMember(updatedrecruitMember);
  // };

  const handleSendPassMembersToBackend = async () => {
    const passMembers = recruitMember.filter((applyMember) => applyMember.acStatus === 'pass');

    console.log('Pass Members:', passMembers);

    try {
      const response = await axios.post('http://localhost:8090/recruit/32', passMembers, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.acStatus === 200) {
        alert('합격자 정보를 전송하였습니다!');
      } else {
        alert('합격자 정보 전송에 실패하였습니다.');
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
      console.log('합격자 전송 실패');
    } finally {
      console.log(passMembers);
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
        {closeApplication ? (
          <button className='manAM-magamBtn' onClick={handleApplicationClose}>모집 마감</button>
        ) : (
          <button className='manAM-magamBtn' onClick={handleApplicationClose}>모집 열기</button>)}
        <p className='manAM-applyCount'>{`신청 인원 : ${recruitMember.length}`}</p>
        <div className='manAM-list'>
          <div className='manAM-listTitle'>
            <p className='manAM-department'>학과</p>
            <p className='manAM-name'>이름</p>
            <p className='manAM-grade'>학년</p>
          </div>
          <ul>
            {recruitMember.map((recruitMember, index) => (
              <li key={index}>
                <div className='manAM-infodepartment'>{recruitMember.acDepartment}</div>
                <div className='manAM-infoname'>{recruitMember.acName}</div>
                <div className='manAM-infograde'>{recruitMember.acGrade}</div>
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
