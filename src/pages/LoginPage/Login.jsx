import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8090/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        // 로그인 성공 시 토큰 저장
        localStorage.setItem('token', response.data.token);
        console.log(response.status);
        // 토큰을 헤더에 추가하여 요청 보내기
        const config = {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        };

       // navigate('/Main');
      }
    } catch (error) {
      console.error("로그인 오류: ", error);
      // 로그인 실패 시 처리할 내용 추가
      alert("로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <div className='login-content'>
      <Header />
      <div className='dasom'>DASOM</div>
      <div className='login-member'>
        <div className='noMember'>회원이 아니신가요?</div>
        <Link to='/signup01' className='goMember'>
          <div>회원가입 하기</div>
        </Link>
      </div>
      <input
        type='email'
        className='login-id'
        placeholder='아이디'
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type='password'
        className='login-password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button className='login-complet' onClick={handleSubmit}>
        로그인 하기
      </button>
    </div>
  );
};

export default Login;
