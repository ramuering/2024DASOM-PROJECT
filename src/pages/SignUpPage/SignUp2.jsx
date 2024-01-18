import React, { useState } from 'react';  // Import useState from React
import "./SignUp2.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'




const SignUp2 = () => {
const [name, setName] = useState(''); // 추가: 이름 상태 추가
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [grade, setGrade] = useState('');
const [major, setMajor] = useState('');


  const [agreement, setAgreement] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
    agree4: false,
  });

  const navigate = useNavigate();

  const handleAgreementChange = (checkboxId) => {
    if (checkboxId === 'agree1') {
      // If the first checkbox is checked, set all checkboxes to true
      setAgreement({
        agree1: !agreement.agree1,
        agree2: !agreement.agree1,
        agree3: !agreement.agree1,
        agree4: !agreement.agree1,
      });
    } else {
      // If any other checkbox is checked, toggle its state
      setAgreement((prevAgreement) => ({
        ...prevAgreement,
        [checkboxId]: !prevAgreement[checkboxId],
      }));
    }
  };

  const handleSubmit = async () => {
    try {
          const response = await axios.post('http://localhost:8090/signup02', {
            name, email, password, grade , major
          });

          if (response.data === '회원가입 성공') {
            console.log('회원가입 성공');
            navigate('/SignUp02');  // Use navigate instead of history.push
          } else {
            console.error('회원가입 실패');
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.error('서버에서 404 응답이 왔습니다. 해당 엔드포인트를 확인하세요.');
          } else {
            console.error('에러:', error);
          }
        }
  };
  return ( 
    
    <div className='SignUp2Page'>
     {/*  <div className="Element">
      <div className="subtract"></div>
      <div className="line10"></div>
      <div className="rectangle929"></div>
      <div className="ellipse40"></div>
      <div className="ellipse39"></div>
      <div className="one">1</div>
      <div className="certification">부원 인증</div>
      <div className="inputInfo">부원 정보 입력</div>
      </div> */}
    <div className='SignUp2Title'>DASOM</div>
    <div className='SignUp2_form'>
    <div className='SignUp2_check'>이미 회원이신가요?</div>
    <Link to='/Login' className='SignUp2_login'>로그인 하기</Link>
    <input
          className="SignUp2_input0"
          type='text' name="name"
          placeholder='이름을 입력하세요.'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

    <input
        class="SignUp2_input1"
        type='text' name="email"
        placeholder='@email.com.'
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
    </input>
    <input
        class="SignUp2_input2"
        type='text' name="password"
        placeholder='비밀번호를 입력하세요.'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>

    </div>
     {/*학년*/}
     <fieldset id="grade_field" value={grade} onChange={(e) => setGrade(e.target.value)}>
            <legend><p class="form_text">학년 <span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="check_box">
                <input type="radio" id="1grade" name="grade" value="1학년" required/>
                <label for="1grade">1학년</label>
              </div>

              <div class="check_box">
                <input type="radio" id="2grade" name="grade" value="2학년" required/>
                <label for="2grade">2학년</label>
              </div>

              <div class="check_box">
                <input type="radio" id="3grade" name="grade" value="3학년" required/>
                <label for="3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="major_field" value={major} onChange={(e) => setMajor(e.target.value)}>
            <legend><p class="form_text">학과 <span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="check_box">
                <input type="radio" id="comso" name="major" value="컴퓨터소프트웨어공학과"/>
                <label for="comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="check_box">
                <input type="radio" id="inso" name="major" value="인공지능소프트웨어공학과" />
                <label for="inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="check_box">
                <input type="radio" id="comim" name="major" value="컴퓨터정보공학과" />
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