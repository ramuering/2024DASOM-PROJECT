import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SignUp1.css";

export default function SignUp1() {
  const [uniqueCode, setUniqueCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 추가
  const [isCodeValid, setIsCodeValid] = useState(true); // 유효성 검사 결과 상태 추가
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://dmu-dasom.or.kr:8090/signup/verify', {
         uniqueCode : uniqueCode,
      });
      if (response.status === 200) {
            console.log("성공")
            navigate('/SignUp02');
      } else {
              setErrorMessage('로그인 실패'); // 실패 시 에러 메시지 설정
              setIsCodeValid(false); // 유효성 검사 실패 시 상태 업데이트
      }
    } catch (error) {

      setErrorMessage('부원 인증에 실패 하였습니다. 관리자에게 문의해주세요.'); // 실패 시 에러 메시지 설정
      setIsCodeValid(false); // 유효성 검사 실패 시 상태 업데이트
   }
 };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(); // 엔터를 눌렀을 때 handleSubmit 함수 호출
    }
  };

  return (
    <div className='SignUp1Page'>
      <div className="SignUp_step">
        <img src="images/SignUp1.png" alt="Step 1"></img>
      </div>
      <div className='SignUp1_form'>
        <div className='SignUp1_check'>이미 회원이신가요?</div>
        <Link to='/Login' className='SignUp1_login'>
          로그인 하기
        </Link>
      </div>
      <input
        className={isCodeValid ? 'SignUp1_input' : 'SignUp1_input invalid'} // 유효성 검사에 따라 클래스를 동적으로 변경
        type='text'
        placeholder='인증번호를 입력하세요.'
        value={uniqueCode}
        onChange={(e) => {
          setUniqueCode(e.target.value);
          setIsCodeValid(true); // 입력이 변경될 때 유효성 검사를 다시 시도하므로, 유효성 상태를 다시 유효로 설정
        }}
        onKeyPress={handleKeyPress} // 엔터 키 입력 이벤트 핸들러 연결
      />
      <button className='SignUp01_certification' onClick={handleSubmit}>
        다솜 부원 인증하기
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* 에러 메시지 표시 */}
    </div>
  );
}
