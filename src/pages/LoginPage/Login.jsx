
import React, { useState } from 'react';
import Header from "../../components/Header"
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import firebase from 'firebase/app'; // Import firebase from npm instead of using external scripts
import 'firebase/auth'; // Import firebase/auth module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

import { useCookies } from 'react-cookie';

const firebaseConfig = {
  apiKey: "AIzaSyAPj6z3yEcXMZnXhfPu1YMFM3zIKwLFdh8",
  authDomain: "dasom-login.firebaseapp.com",
  projectId: "dasom-login",
  storageBucket: "dasom-login.appspot.com",
  messagingSenderId: "595103046458",
  appId: "1:595103046458:web:fa37ce8c8ef7f6bf724e03",
  measurementId: "G-F95JBVQQN7"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const Login = ()=>{

  const [username, setusername] = useState('');
   const [password, setpassword] = useState('');

  const navigate = useNavigate();
  const [, setCookie] = useCookies(['refreshToken']);

//   const onClick = async () => {
//     const result = await Login(username, password);
//     console.log(result);
//     const { accessToken, refreshToken } = result;
//     localStorage.setItem('access', accessToken);
//     localStorage.setItem('refresh', refreshToken);
//   }
    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://dmu-dasom.or.kr:8090/login', {
                username : username ,
                password : password
          });

          if (response.request.status === 200 ) {
             localStorage.setItem("accessToken", response.data.data.accessToken);
             setCookie("refreshToken", response.data.data.refreshToken)
            navigate('/main');
          }
        } catch (error) {
          if (error.response && error.response.status === 200) {
            console.error('인증완료.');
          } else {
          alert("아이디 혹은 비밀번호가 틀렸습니다")
            console.error('에러:', error);
          }
        }
      };

    return(
      <div className='login-content'>
        <Header />
        <div className='dasom'>DASOM</div>
        <div className='login-member'>
        <div className='noMember'>회원이 아니신가요?</div>
        <Link to='/signup01' className='goMember'><div>회원가입 하기</div></Link>
        </div>
        <input
        type='email'
        className="login-id"
        placeholder='아이디'
        value={username}
        onChange={(e) => setusername(e.target.value)}
        />
        <input
        type='password'
        className="login-password"
        placeholder='비밀번호'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        />
        <button className='login-complet' onClick={handleSubmit}>로그인 하기</button>
      </div>
      
    )
       
}

export default Login