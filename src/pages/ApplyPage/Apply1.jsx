import React, { useEffect } from 'react';
import Header from '../../components/LimitHeader'
import "./Apply1.css"
import styled from "styled-components";
import Footer from '../../components/Footer';


const styles ={
  Footer:{
    marign:500
  }
}

const NullBox = styled.div`
    width: 100%;
    height: 350px;
`;


function Apply1() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id="Apply1_main">
      <Header></Header>
      {/*1번 문단*/}
      <div id="first_form" class="form">

        <div>
        <p id="form_title">지원서 작성</p>
        <br></br>
        <p id="sub_title">32기 신입부원 모집</p>
        </div>
        

      </div>
      {/*2번 문단*/}
      <div id="second_form" class="form">
        <form id="club_join_form "action="../apply02">
          {/*이름*/}
        <label for="name"><p class="form_text">이름 <span class="red_text">*</span></p></label>
          <input class="form_input" id="name" required></input>

          {/*학번*/}
          <label for="gradecode"><p class="form_text">학번 <span class="red_text">*</span></p></label>
          <input class="form_input" id="gradecode" required></input>

          {/*학년*/}
          <fieldset id="grade_field">
            <legend><p class="form_text">학년 <span class="red_text">*</span></p></legend>

            <div class ="div_box">
              <div class="radio_box">
                <input type="radio" id="1grade" name="grade" value="1" required/>
                <label for="1grade">1학년</label>
              </div>

              <div class="radio_box">
                <input type="radio" id="2grade" name="grade" value="2" required/>
                <label for="2grade">2학년</label>
              </div>

              <div>
                <input type="radio" id="3grade" name="grade" value="3" required/>
                <label for="3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="major_field">
            <legend><p class="form_text">학과 <span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="radio_box">
                <input type="radio" id="comso" name="major" value="comso"/>
                <label for="comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="radio_box">
                <input type="radio" id="inso" name="major" value="inso" />
                <label for="inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="radio_box">
                <input type="radio" id="comim" name="major" value="comim" />
                <label for="comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>

          <label for="tel"><p class="form_text">전화번호 <span class="red_text">*</span></p></label>
          <input class="form_input" id="tel"></input>

          <p class="form_text">학교 계정 이메일 <span class="red_text">*</span></p>
          <input class="form_input"></input>

        <hr></hr>

          <label for="motivation"><p class="form_text">지원동기 <span class="red_text">*</span></p></label>
          <textarea id="motivation" name="motivation" required></textarea>

          <p class="form_text">지원분야</p>
          <input class="form_input"></input>

          <label for="Dasomtalk"><p class="form_text">DASOM에게 하고 싶은 말</p></label>
          <textarea id="Dasomtalk" name="Dasomtalk" required></textarea>
          
          <input type="submit" value="DASOM 지원하기"/>
          
        </form>
      </div>
      <NullBox></NullBox>
      <Footer></Footer>
    </div>
  )
}

export default Apply1