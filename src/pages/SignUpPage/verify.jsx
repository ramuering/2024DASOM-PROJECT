import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./SignUp1.css";

export default function SignUp1() {
  const [uniqueCode, setUniqueCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8090/signup/verify', {
         uniqueCode : uniqueCode,
      });
    if (response.status === 200 ) {
          navigate('/SignUp02');
        }
      } catch (error) {
      alert('Dasom 부원 인증에 실패 하였습니다. 관리자에게 문의해주세요.')

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
        className='SignUp1_input'
        type='text'
        placeholder='인증번호를 입력하세요.'
        value={uniqueCode}
        onChange={(e) => setUniqueCode(e.target.value)}
        onKeyPress={handleKeyPress} // 엔터 키 입력 이벤트 핸들러 연결
      />
      <button className='SignUp01_certification' onClick={handleSubmit}>
        다솜 부원 인증하기
      </button>
    </div>
  );
}
