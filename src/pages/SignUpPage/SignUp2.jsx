import React from 'react'

import "./SignUp2.css";

const SignUp2 = () => {
  return (
    <div className="SignUp2div3">
      <button className="SignUp2button2">
        <b className="SignUp2b4">다솜 가입 완료하기</b>
      </button>
      <div className="SignUp2div4">
        <div className="SignUp2parent">
          <b className="SignUp2b5">약관 동의</b>
          <div className="SignUp2frame-inner" />
        </div>
        <div className="SignUp2frame-group">
          <div className="SignUp2group">
            <div className="SignUp2div5">[필수] 다솜 이용 약관에 동의</div>
            <input className="SignUp2checkbox" type="checkbox" />
          </div>
          <div className="SignUp2container">
            <div className="SignUp2div5">
              [선택] 마켓팅 정보 수신 및 선택적 개인정보 제공
            </div>
            <input className="SignUp2checkbox" type="checkbox" />
          </div>
          <div className="SignUp2frame-div">
            <b className="SignUp2b6">전체 약관 동의</b>
            <input className="SignUp2checkbox" type="checkbox" />
          </div>
          <div className="SignUp2parent1">
            <div className="SignUp2div7">
              <div className="SignUp2child" />
            </div>
            <div className="SignUp2parent2">
              <div className="SignUp2div5">[필수] 개인정보 수집 및 이용에 동의</div>
              <input className="SignUp2checkbox" type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <b className="SignUp2b7">학과</b>
      <div className="SignUp2item" />
      <b className="SignUp2b8">학년</b>
      <div className="SignUp2inner" />
      <div className="SignUp2parent3">
        <div className="SignUp2div9">이미 회원이신가요?</div>
        <button className="SignUp2button3">로그인 하기</button>
      </div>
      <div className="SignUp2div10">
        <div className="SignUp2div11">
          <div className="SignUp2frame-container">
            <div className="SignUp2dasom-group">
              <b className="SignUp2dasom1">DASOM</b>
              <div className="SignUp2subtract-group">
                <img className="SignUp2subtract-icon1" alt="" src="/subtract@2x.png" />
                <div className="SignUp2ellipse-group">
                  <div className="SignUp2ellipse-div" />
                  <b className="SignUp2b9">1</b>
                </div>
              </div>
            </div>
            <b className="SignUp2b10">부원 인증</b>
          </div>
          <b className="SignUp2b11">부원 정보 입력</b>
        </div>
        <div className="SignUp2ellipse-container">
          <div className="SignUp2frame-child1" />
          <b className="SignUp2b12">2</b>
        </div>
      </div>
      <div className="SignUp2parent5">
        <div className="SignUp2div12">컴퓨터소프트웨어공학과</div>
        <input className="SignUp2ellipse-formcontrollabel" type="checkbox"
        />
      </div>
      <div className="SignUp2parent6">
        <div className="SignUp2div12">인공지능소프트웨어공학과</div>
        <input className="SignUp2ellipse-formcontrollabel" type="checkbox"
        />
      </div>
      <div className="SignUp2parent7">
        <div className="SignUp2div12">컴퓨터정보공학과</div>
        <input className="SignUp2ellipse-formcontrollabel" type="checkbox"
        />
      </div>
      <div className="SignUp2parent4">
        <div className="SignUp2div12">1학년</div>
        <input className="SignUp2ellipse-input" type="checkbox" />
      </div>
      <div className="SignUp2parent8">
        <div className="SignUp2div12">2학년</div>
        <input className="SignUp2ellipse-input" type="checkbox" />
      </div>
      <div className="SignUp2parent9">
        <div className="SignUp2div12">3학년</div>
        <input className="SignUp2ellipse-input" type="checkbox" />
      </div>
    </div>
  );
};

export default SignUp2;