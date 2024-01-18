import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp1.css";

export default function SignUp1() {
  const [authCode, setAuthCode] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8090/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authCode }),
      });

      if (response.ok) {
        // 인증 성공
        console.log('인증 성공');
      } else {
        // 인증 실패 처리
        console.error('인증 실패');
      }
    } catch (error) {
      // 네트워크 또는 기타 오류 처리
      console.error('에러:', error);
    }
  };

  return (
    <div className='SignUp1Page'>
      {/* <div className="Element">
      <div className="subtract"></div>
      <div className="line10"></div>
      <div className="rectangle929"></div>
      <div className="ellipse40"></div>
      <div className="ellipse39"></div>
      <div className="one">1</div>
      <div className="certification">부원 인증</div>
      <div className="inputInfo">부원 정보 입력</div>
      </div> */}
      <div className='SignUp1Title'>DASOM</div>
      <div className='SignUp1_form'>
        <div className='SignUp1_check'>이미 회원이신가요?</div>
        <Link to='/Login' className='SignUp1_login'>
          로그인 하기
        </Link>
      </div>
      <input
        className='SignUp1_input'
        type='text'
        placeholder='인증번호를 입력하세요.'
        value={authCode}
        onChange={(e) => setAuthCode(e.target.value)}>
        </input>
      <button
        className='SignUp01_certification'
        onClick={handleSubmit}
      >
        다솜 부원 인증하기
      </button>
    </div>
  );
}
