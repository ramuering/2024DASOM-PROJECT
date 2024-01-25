import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import axios from 'axios';
import "./SignUp1.css";

export default function SignUp1() {
  const [authCode, setAuthCode] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8090/signup01', {
        uniqueCode: authCode,
      });

      if (response.data === '부원 인증 성공') {
        console.log('부원 인증 성공');
        navigate('/SignUp02');  // Use navigate instead of history.push
      } else {
        console.error('부원 인증 실패');
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
    <div className='SignUp1Page'>
      <div className='SignUp1Title'>DASOM</div>
      <div className='SignUp1_form'>
        <div className='SignUp1_check'>이미 회원이신가요?</div>
        <Link to='/Login' className='SignUp1_login'>
          로그인 하기
        </Link>
      </div>
      <input
        placeholder='인증번호를 입력하세요.' id='SignUp1_input'
        value={authCode}
        onChange={(e) => setAuthCode(e.target.value)}
      />
      <button className='SignUp01_certification' onClick={handleSubmit}>
        다솜 부원 인증하기
      </button>
    </div>
  );
}
