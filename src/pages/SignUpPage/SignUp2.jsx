import React, { useState } from 'react';
import "./SignUp2.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const SignUp2 = () => {
  const [memEmail, setmemEmail] = useState('');
  const [memPassword, setmemPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [memName, setmemName] = useState('');
  const [memGrade, setmemGrade] = useState('');
  const [memDepartment, setmemDepartment] = useState('');
  const [agreement, setAgreement] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
    agree4: false,
  });
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleAgreementChange = (checkboxId) => {
    if (checkboxId === 'agree1') {
      setAgreement({
        agree1: !agreement.agree1,
        agree2: !agreement.agree1,
        agree3: !agreement.agree1,
        agree4: !agreement.agree1,
      });
    } else {
      setAgreement((prevAgreement) => ({
        ...prevAgreement,
        [checkboxId]: !prevAgreement[checkboxId],
      }));
    }
  };

  const handleSubmit = async () => {
    if (memPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/signup', {
        memEmail,
        memPassword,
        memName,
        memGrade,
        memDepartment
      });
      if (response.status === 201) {
        console.log(response.status)
        navigate('/Main');
      }
    } catch (error) {
      alert('이미 존재하는 이메일입니다 ! ')
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMismatch(memPassword !== event.target.value);
  };

  return (
    <div className='SignUp2Page'>
      <div class="SignUp_step">
        <img src="images/SignUp2.png"></img>
      </div>
      <div className='SignUp2_form'>
        <div className='SignUp2_check'>이미 회원이신가요?</div>
        <Link to='/Login' className='SignUp2_login'>로그인 하기</Link>
        <input
          className={`SignUp2_input0 ${passwordMismatch ? 'invalid' : ''}`}
          type='text'
          name="name"
          autoComplete='off'
          placeholder='이름을 입력하세요.'
          value={memName}
          onChange={(e) => setmemName(e.target.value)}
        ></input>

        <input
          className={`SignUp2_input1 ${passwordMismatch ? 'invalid' : ''}`}
          type='text'
          name="email"
          autoComplete='off'
          placeholder='@email.com.'
          value={memEmail}
          onChange={(e) => setmemEmail(e.target.value)}
        ></input>

        <input
          className={`SignUp2_input2 ${passwordMismatch ? 'invalid' : ''}`}
          type={showPassword ? 'text' : 'password'}
          name="password"
          autoComplete='off'
          placeholder='비밀번호를 입력하세요.'
          value={memPassword}
          onChange={(e) => setmemPassword(e.target.value)}
        ></input>

        <button
          className='SignUp2_toggle-password_1'
          onClick={() => setShowPassword(!showPassword)} // 비밀번호 보이기/숨기기 토글
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
        <input
          className={`SignUp2_input3 ${passwordMismatch ? 'invalid' : ''}`}
          type='password'
          name="confirmPassword"
          autoComplete='off'
          placeholder='비밀번호를 다시 입력하세요.'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>
        <button
          className='SignUp2_toggle-password_2'
          onClick={() => setShowPassword(!showPassword)} // 비밀번호 보이기/숨기기 토글
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>

        {passwordMismatch && <div className='SignUp2_error-message'>비밀번호가 일치하지 않습니다.</div>}
      </div>
     {/*학년*/}
     <fieldset id="grade_field" value={memGrade} onChange={(e) => setmemGrade(e.target.value)}>
            <legend><p class="form_text">학년<span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="check_box">
                <input type="radio" id="1grade" name="grade" value="1" required/>
                <label for="1grade">1학년</label>
              </div>

              <div class="check_box">
                <input type="radio" id="2grade" name="grade" value="2" required/>
                <label for="2grade">2학년</label>
              </div>

              <div class="check_box">
                <input type="radio" id="3grade" name="grade" value="3" required/>
                <label for="3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="major_field" value={memDepartment} onChange={(e) => setmemDepartment(e.target.value)}>
            <legend><p class="form_text">학과<span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="check_box">
                <input type="radio" id="comso" name="major" value="컴소"/>
                <label for="comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="check_box">
                <input type="radio" id="inso" name="major" value="인소" />
                <label for="inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="check_box">
                <input type="radio" id="comim" name="major" value="컴정" />
                <label for="comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>
          
          <fieldset id="Agree">
            <legend><p class="form_text">약관동의 <span class="red_text">*</span></p></legend>
            <div className="check_box">
          <input
            type="checkbox"
            id="agree1"
            name="agree1"
            checked={agreement.agree1}
            onChange={() => handleAgreementChange('agree1')}
          />
          <label htmlFor="agree1">전체 약관 동의</label>
        </div>

        <div className="check_box">
          <input
            type="checkbox"
            id="agree2"
            name="agree2"
            checked={agreement.agree2}
            onChange={() => handleAgreementChange('agree2')}
          />
          <label htmlFor="agree2">[필수] 다솜 이용 약관에 동의</label>
        </div>

        <div className="check_box">
          <input
            type="checkbox"
            id="agree3"
            name="agree3"
            checked={agreement.agree3}
            onChange={() => handleAgreementChange('agree3')}
          />
          <label htmlFor="agree3">[필수] 개인정보 수집 및 이용에 동의</label>
        </div>

        <div className="check_box">
          <input
            type="checkbox"
            id="agree4"
            name="agree4"
            checked={agreement.agree4}
            onChange={() => handleAgreementChange('agree4')}
          />
          <label htmlFor="agree4">[선택] 마켓팅 정보 수신 및 선택적 개인정보 제공</label>
        </div>
          </fieldset>
          <button className='SignUp02_final' onClick={handleSubmit}>다솜 가입 완료하기</button>
    </div>

  );
}
    
export default SignUp2;