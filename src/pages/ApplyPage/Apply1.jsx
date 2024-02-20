import React, { useEffect, useState, useRef   } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Apply1.css"
import styled from "styled-components";
import Footer from '../../components/Footer';
import axios from 'axios';

const Ap1NullBox = styled.div`
    width: 100%;
    height: 350px;
`;

const recNo=323;

function Apply1() {

  const navigate = useNavigate(); 

  const acStudentNoRef = useRef(null);
  const acNameRef = useRef(null);
  const acContactRef = useRef(null);
  const acEmailRef = useRef(null);
  const acDepartmentRef = useRef(null);
  const acGradeRef = useRef(null);
  const reasonForApplyRef = useRef(null);

  const [acStudentNo, setacStudentNo] = useState('');
  const [acName, setacName] = useState('');
  const [acContact, setacContact] = useState('');
  const [acEmail, setacEmail] = useState('');
  const [acDepartment, setacDepartment] = useState('');
  const [acGrade, setacGrade] = useState('');
  const [reasonForApply, setreasonForApply] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const applydate = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const applyStart = "2024-01-08";
  const applyEnd= "2024-01-16";
  const firstAnnounce = "2024-01-17";
  const interviewStart= "2024-01-18";
  const interviewEnd = "2024-01-22";
  const secondAnnounce= "2024-01-25";

  const focusInput = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Consolidated validation checks
    if (!acStudentNo || !acName || !acContact || !acEmail || !acDepartment || !acGrade || !reasonForApply) {
      alert('해당 항목을 입력해주세요.');

      // Move focus to the first input field that is not filled
      if (!acStudentNo) acStudentNoRef.current.focus();
      else if (!acName) acNameRef.current.focus();
      else if (!acContact) acContactRef.current.focus();
      else if (!acEmail) acEmailRef.current.focus();
      else if (!acDepartment) acDepartmentRef.current.focus();
      else if (!acGrade) acGradeRef.current.focus();
      else if (!reasonForApply) reasonForApplyRef.current.focus();

      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/recruit', {
        acStudentNo,
        acName,
        acContact,
        acEmail,
        acDepartment,
        acGrade,
        reasonForApply,
        recNo,
        applydate,
        applyStart,
        applyEnd,
        firstAnnounce,
        interviewStart,
        interviewEnd,
        secondAnnounce
      });

      if (response && response.status === 201) {
        console.log(response.data.message);
        // 페이지 이동
        navigate('/apply02');
        recNo +=1;
      }
    } catch (error) {
      console.error('Error submitting application:', error.response);

      if (error.response.status === 409) {
        alert('이미 지원한 학번입니다.');
      } else {
        // Handle other errors as needed
        alert('지원서 제출에 실패했습니다.');
      }
    }
  };

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id="Ap1-main">
      {/*1번 문단*/}
      <div id="Ap1-first-form" class="Ap1-form">

        <div>
        <p id="Ap1-form-title">지원서 작성</p>
        <br></br>
        <p id="Ap1-sub-title">32기 신입부원 모집</p>
        </div>
        

      </div>
      {/*2번 문단*/}
      <div id="Ap1-second-form" class="Ap1-form">
        <form id="Ap1-club-join-form "action="../apply02">
          {/*이름*/}
        <label for="Ap1-name"><p class="Ap1-form-text">이름 <span class="Ap1-red-text">*</span></p></label>

          <input 
          class="Ap1-form-input" 
          id="Ap1-name" 
          placeholder='이름'
          value={acName} 
          onChange={(e) => setacName(e.target.value)}
          ></input>

          {/*학번*/}
          <label for="Ap1-gradecode"><p class="Ap1-form-text">학번 <span class="Ap1-red-text">*</span></p></label>

          <input 
          ref={acStudentNoRef}
          class="Ap1-form-input" 
          id="Ap1-gradecode" 
          placeholder='학번'
          value={acStudentNo} 
          onChange={(e) => setacStudentNo(e.target.value)}>
          </input>

          {/*학년*/}
          <fieldset id="Ap1-grade-field" class="fieldset" value={acGrade} onChange={(e) => setacGrade(e.target.value)}>
            <legend><p class="Ap1-form-text">학년 <span class="Ap1-red-text">*</span></p></legend>

            <div class ="Ap1-div-box">
              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-1grade" name="grade" value="1" />
                <label for="Ap1-1grade">1학년</label>
              </div>

              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-2grade" name="grade" value="2" />
                <label for="Ap1-2grade">2학년</label>
              </div>

              <div>
                <input type="radio" id="Ap1-3grade" name="grade" value="3" />
                <label for="Ap1-3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="Ap1-major-field" class="fieldset" value={acDepartment} onChange={(e) => setacDepartment(e.target.value)}>
            <legend><p class="Ap1-form-text">학과 <span class="Ap1-red-text">*</span></p></legend>
            <div class ="Ap1-div-box">
              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-comso" name="major" value="comso"/>
                <label for="Ap1-comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-inso" name="major" value="inso" />
                <label for="Ap1-inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="Ap1-radio-box">
                <input type="radio" id="Ap1-comim" name="major" value="comim" />
                <label for="Ap1-comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>

          <label for="Ap1-tel"><p class="Ap1-form-text">전화번호 <span class="Ap1-red-text">*</span></p></label>
          <input class="Ap1-form-input" id="Ap1-tel"value={acContact} 
          onChange={(e) => setacContact(e.target.value)}></input>

          <p class="Ap1-form-text">학교 계정 이메일 <span class="Ap1-red-text">*</span></p>
          <input class="Ap1-form-input"value={acEmail} 
          onChange={(e) => setacEmail(e.target.value)}></input>

          <label for="Ap1-motivation"><p class="Ap1-form-text">지원동기 <span class="Ap1-red-text">*</span></p></label>
          <textarea id="Ap1-motivation" name="motivation" value={reasonForApply} 
          onChange={(e) => setreasonForApply(e.target.value)}></textarea>

          <p class="Ap1-form-text">지원분야</p>
          <input class="Ap1-form-input"></input>

          <label for="Ap1-Dasomtalk"><p class="Ap1-form-text">다솜에게 하고 싶은 말</p></label>
          <textarea id="Ap1-Dasomtalk" name="Dasomtalk"></textarea>
          
          <input type="submit" value="다솜 지원하기" id='Ap1-submit' onClick={handleSubmit}/>
          
        </form>
      </div>
      <div>
      <Ap1NullBox></Ap1NullBox>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Apply1

/*
  테스트 코드
*/