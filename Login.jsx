import React from 'react'

const Login = ()=>
{
    const Rest_api_key='03962c2c3a5cd86de893848c8e2ddcff' //REST API KEY
    const redirect_uri = 'http://127.0.0.1:5500/src/pages/LoginPage/Login.jsx' //Redirect URI
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <button onClick={handleLogin}>카카오 로그인</button>
    )
}

export default Login