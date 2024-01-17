import React, { useEffect } from 'react'
import LimitHeader from "../../components/LimitHeader"
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'

const Login = ()=>{

    const Rest_api_key='03962c2c3a5cd86de893848c8e2ddcff' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/oauth2/callback/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
  
    const navigate = useNavigate();
    const handleLogin = ()=>{
        window.location.href = kakaoURL;
    }
    useEffect(() =>{
      if(window.location.pathname === '3000/login/oauth2/callback/kakao'){
        console.log('카카오 로그인 완료');
        navigate.push('/redirection')
      }
    },[navigate]);
       

    return(
      <div>
      <div className='content'>
        <LimitHeader />
        <div className='dasom'>DASOM</div>
        <button className='loginButton' onClick={handleLogin}>로그인 하기</button>
        <div className='noMember'>회원이 아니신가요?</div>
        <Link to='/signup01' className='goMember'>회원가입 하기</Link>
      </div>
      </div>
    )
}

export default Login;
