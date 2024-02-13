import React, { useEffect } from 'react';
import Header from '../../components/LimitHeader'
import "./Apply1.css"
import styled from "styled-components";
import Footer from '../../components/Footer';

const Ap1NullBox = styled.div`
    width: 100%;
    height: 350px;
`;


function Apply1() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id="Ap1-main">
      <Header></Header>
      {/*1번 문단*/}
      <div id="Ap1-first-form" class="Ap1-form">

        <div>
        <p id="Ap1-form-title">지원서 작성</p>
        <br></br>
        <p id="Ap1-sub-title">32기 신입부원 모집</p>
        </div>
        

      </div>
      {/*2번 문단*/}
      <div id="Ap1-second-form" class="Ap1-form">
        <form id="Ap1-club-join-form "action="../apply02">
          {/*이름*/}
        <label for="Ap1-name"><p class="Ap1-form-text">이름 <span class="Ap1-red-text">*</span></p></label>
          <input class="Ap1-form-input" id="Ap1-name" required placeholder='이름'></input>

          {/*학번*/}
          <label for="Ap1-gradecode"><p class="Ap1-form-text">학번 <span class="Ap1-red-text">*</span></p></label>
          <input class="Ap1-form-input" id="Ap1-gradecode" required></input>

          {/*학년*/}
          <fieldset id="Ap1-grade-field" class="fieldset">
            <legend><p class="Ap1-form-text">학년 <span class="Ap1-red-text">*</span></p></legend>

            <div class ="Ap1-div-box">
              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-1grade" name="grade" value="1" required/>
                <label for="Ap1-1grade">1학년</label>
              </div>

              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-2grade" name="grade" value="2" required/>
                <label for="Ap1-2grade">2학년</label>
              </div>

              <div>
                <input type="radio" id="Ap1-3grade" name="grade" value="3" required/>
                <label for="Ap1-3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="Ap1-major-field" class="fieldset">
            <legend><p class="Ap1-form-text">학과 <span class="Ap1-red-text">*</span></p></legend>
            <div class ="Ap1-div-box">
              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-comso" name="major" value="comso"/>
                <label for="Ap1-comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="Ap1-radio-box">
                <input type="radio" id="Ap1-inso" name="major" value="inso" />
                <label for="Ap1-inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="Ap1-radio-box">
                <input type="radio" id="Ap1-comim" name="major" value="comim" />
                <label for="Ap1-comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>

          <label for="Ap1-tel"><p class="Ap1-form-text">전화번호 <span class="Ap1-red-text">*</span></p></label>
          <input class="Ap1-form-input" id="Ap1-tel"></input>

          <p class="Ap1-form-text">학교 계정 이메일 <span class="Ap1-red-text">*</span></p>
          <input class="Ap1-form-input"></input>

          <label for="Ap1-motivation"><p class="Ap1-form-text">지원동기 <span class="Ap1-red-text">*</span></p></label>
          <textarea id="Ap1-motivation" name="motivation" required></textarea>

          <p class="Ap1-form-text">지원분야</p>
          <input class="Ap1-form-input"></input>

          <label for="Ap1-Dasomtalk"><p class="Ap1-form-text">DASOM에게 하고 싶은 말</p></label>
          <textarea id="Ap1-Dasomtalk" name="Dasomtalk" required></textarea>
          
          <input type="submit" value="DASOM 지원하기" id='Ap1-submit'/>
          
        </form>
      </div>
      <div>
      <Ap1NullBox></Ap1NullBox>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Apply1