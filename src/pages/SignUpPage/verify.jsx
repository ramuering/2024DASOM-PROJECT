import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import axios from 'axios';
import "./SignUp1.css";

export default function SignUp1() {
  const [uniqueCode, setuniqueCode] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8090/signup/verify', {
         uniqueCode : uniqueCode,
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
      <div class="SignUp_step">
              <img src="images/SignUp1.png"></img>
            </div>
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
        value={uniqueCode}
        onChange={(e) => setuniqueCode(e.target.value)}
      />
      <button className='SignUp01_certification' onClick={handleSubmit}>
        다솜 부원 인증하기
      </button>
    </div>
  );
}
