import React, {useState} from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import firebase from 'firebase/app'; // Import firebase from npm instead of using external scripts
import 'firebase/auth'; // Import firebase/auth module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import Header from '../../components/Header';

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

  const onClick = async () => {
    const result = await Login(username, password);
    console.log(result);
    const { accessToken, refreshToken } = result;
    localStorage.setItem('access', accessToken); 
    localStorage.setItem('refresh', refreshToken);
  }
    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:8090/login', {

                username : username ,
                password : password
          });

          if (response.status === 200) {
          console.log(response.status)
            console.log('부원 인증 성공');
            const accessToken = response.headers['Authorization'];
                     localStorage.setItem("accessToken", accessToken);
            localStorage.setlitem("Authorizationrefresh", ["Authorizationrefresh"]);
            //navigate('/main');  // Use navigate instead of history.push
            
          } else {
          console.log(response.status)
            console.error('부원 인증 실패');
          }
        } catch (error) {
          if (error.response && error.response.status === 200) {
            console.error('인증완료.');
          } else {
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