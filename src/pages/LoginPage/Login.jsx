import React from 'react'
import LimitHeader from "../../components/LimitHeader"
import './Login.css';
import { Link } from 'react-router-dom'

const Login = ()=>
{
    const Rest_api_key='03962c2c3a5cd86de893848c8e2ddcff' //REST API KEY
    const redirect_uri = 'http://127.0.0.1:5500' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL;
        <Link to = '/redirection'>이동</Link>
    }
    return(
      <div>
        <LimitHeader />
        <h1>1</h1>
        <div className='dasom'>DASOM</div>
        <button className='loginButton' onClick={handleLogin}>로그인 하기</button>
        <div className='noMember'>회원이 아니신가요?</div>
        <div className='goMember'>회원가입 하기</div>
      </div>
    )
}

export default Login;
