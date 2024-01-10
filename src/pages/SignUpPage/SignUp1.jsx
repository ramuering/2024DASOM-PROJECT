import React from 'react'
import "./SignUp1.css";

export default function SignUp1() {
  
  return (
    <div className="SignUp1page">
      <div className="SignUp1titleWrap">
        DASOM
      </div>
      <div className="SignUp1check">이미 회원이신가요?</div>
      <button className="SignUp1loginbutton">로그인 하기</button>
      <div className="SignUp1contentWrap">
        <div className="SignUp1inputWrap">
          <input
            type="text"
            className="SignUp1input"
            placeholder="인증 번호를 입력하세요"/>
          <div>
            <button className="SignUp1bottomButton">다솜 부원 인증하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
