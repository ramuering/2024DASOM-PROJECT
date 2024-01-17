import React from 'react'
import "./SignUp1.css";
import { Link, useNavigate } from 'react-router-dom'



export default function SignUp1() {
  
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
    <Link to='/Login' className='SignUp1_login'>로그인 하기</Link>
    </div>
    <input class="SignUp1_input" type='text' placeholder='인증번호를 입력하세요.'></input>
    <button className='SignUp01_certification'>다솜 부원 인증하기</button>
    
    </div>
   
  );
}
