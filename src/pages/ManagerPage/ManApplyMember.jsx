import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import './ManApplyMember.css';
import Header from '../../components/Header';

function getCookie(name) {
        const cookieString = document.cookie;
        const cookies = cookieString.split('; ');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

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

  const postPass = async () => {
    try {
      const response = await axios.post('https://dmu-dasom.or.kr:8090/recruit/32/applicants/accept-proc');
      if (response.data.success) {
        console.log("합격자 인증코드 api 성공")
        console.log(response)
      }
    } catch (error) {
      console.error('Error fetching studys:', error);
    }
  };

  const [recruitMember, setRecruitMember] = useState([]);
  const [isPassButtonClicked, setIsPassButtonClicked] = useState(false);
  const [isFailButtonClicked, setIsFailButtonClicked] = useState(false);

  useEffect(() => {
    const fetchStudys = async () => {
      try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = getCookie('refreshToken');
       const response = await axios.get('https://dmu-dasom.or.kr:8090/recruit/33/applicants', {
                               headers: {
                                   Authorization: ` ${accessToken}`,
                                   Cookie: `${refreshToken}`
                               }
                           });
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
        const response = await axios.get('https://dmu-dasom.or.kr:8090/33');
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
      const response = await axios.put('https://dmu-dasom.or.kr:8090/recruit/33', {
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

  const handleButtonClick = async (index, isPass) => {
    const updatedRecruitMember = [...recruitMember];
    updatedRecruitMember[index].acStatus = isPass ? 'pass' : 'fail';
    setRecruitMember(updatedRecruitMember);

    const updatedMember = updatedRecruitMember[index];

    if (isPass) {
      // 합격인 경우
      updatedMember.isAccepted = true;
      sendMemberStatusToBackend(updatedMember);
      setIsPassButtonClicked(true);
    } else {
      // 불합격인 경우
      updatedMember.isAccepted = false;
      sendMemberStatusToBackend(updatedMember);
      setIsFailButtonClicked(true);
    }
  };

  const sendMemberStatusToBackend = async (updatedMember) => {
    try {
    const accessToken = localStorage.getItem('accessToken');
                        const refreshToken = getCookie('refreshToken');
      const response = await axios.patch(`https://dmu-dasom.or.kr:8090/recruit/33/applicants/${updatedMember.acStudentNo}`, {
        headers: {
            Authorization: ` ${accessToken}`,
            Cookie: `${refreshToken}`
        },
        isAccepted: updatedMember.isAccepted
      });
      if (response.status === 200) {
        alert(`${updatedMember.acName} 님의 상태를 업데이트하였습니다!`);
      } else {
        alert('상태 업데이트에 실패하였습니다.');
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
      alert('상태 업데이트 중 오류가 발생하였습니다.');
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
            <p className='manAM-status'>상태</p>
          </div>
          <ul>
            {recruitMember.map((recruit, index) => (
              <li key={index}>
                <div className='manAM-infodepartment'>{recruit.acDepartment}</div>
                <div
                  className={`manAM-infoname ${
                    recruit.isAccepted ? 'green' : 'red'
                  } ${
                    isPassButtonClicked && recruit.isAccepted ? 'clicked' : ''
                  } ${
                    isFailButtonClicked && !recruit.isAccepted ? 'clicked' : ''
                  }`}
                >
                  {recruit.acName}
                </div>
                <div className='manAM-infograde'>{recruit.acGrade}</div>
                <button
                  className={`true-button ${isPassButtonClicked ? 'clicked' : ''}`}
                  onClick={() => handleButtonClick(index, true)}
                >
                  합격
                </button>
                <button
                  className={`false-button ${isFailButtonClicked ? 'clicked' : ''}`}
                  onClick={() => handleButtonClick(index, false)}
                >
                  불합격
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='manAM-excelPassBtn'>
          <button className='manAM-excel' onClick={handleExportExcel}>엑셀 추출</button>
          <button className='manAM-excel' onClick={postPass}>합격자 디비에 전송</button>
        </div>
      </div>
    </div>
  );
}

const DateInput = ({ value, onChange, readOnly }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      className='manAM-date-customInput'
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
