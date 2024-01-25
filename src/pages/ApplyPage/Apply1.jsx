import React, { useEffect } from 'react';
import Header from '../../components/LimitHeader'
import "./Apply1.css"
import styled from "styled-components";
import Footer from '../../components/Footer';

const Ap1_NullBox = styled.div`
    width: 100%;
    height: 350px;
`;


function Apply1() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id="Ap1_main">
      <Header></Header>
      {/*1번 문단*/}
      <div id="Ap1_first_form" class="Ap1_form">

        <div>
        <p id="Ap1_form_title">지원서 작성</p>
        <br></br>
        <p id="Ap1_sub_title">32기 신입부원 모집</p>
        </div>
        

      </div>
      {/*2번 문단*/}
      <div id="Ap1_second_form" class="Ap1_form">
        <form id="Ap1_club_join_form "action="../apply02">
          {/*이름*/}
        <label for="Ap1_name"><p class="Ap1_form_text">이름 <span class="Ap1_red_text">*</span></p></label>
          <input class="Ap1_form_input" id="Ap1_name" required></input>

          {/*학번*/}
          <label for="Ap1_gradecode"><p class="Ap1_form_text">학번 <span class="Ap1_red_text">*</span></p></label>
          <input class="Ap1_form_input" id="Ap1_gradecode" required></input>

          {/*학년*/}
          <fieldset id="Ap1_grade_field">
            <legend><p class="Ap1_form_text">학년 <span class="Ap1_red_text">*</span></p></legend>

            <div class ="Ap1_div_box">
              <div class="Ap1_radio_box">
                <input type="radio" id="Ap1_1grade" name="grade" value="1" required/>
                <label for="Ap1_1grade">1학년</label>
              </div>

              <div class="Ap1_radio_box">
                <input type="radio" id="Ap1_2grade" name="grade" value="2" required/>
                <label for="Ap1_2grade">2학년</label>
              </div>

              <div>
                <input type="radio" id="Ap1_3grade" name="grade" value="3" required/>
                <label for="Ap1_3grade">3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="Ap1_major_field">
            <legend><p class="Ap1_form_text">학과 <span class="Ap1_red_text">*</span></p></legend>
            <div class ="Ap1_div_box">
              <div class="Ap1_radio_box">
                <input type="radio" id="Ap1_comso" name="major" value="comso"/>
                <label for="Ap1_comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="Ap1_radio_box">
                <input type="radio" id="Ap1_inso" name="major" value="inso" />
                <label for="Ap1_inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="Ap1_radio_box">
                <input type="radio" id="Ap1_comim" name="major" value="comim" />
                <label for="Ap1_comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>

          <label for="Ap1_tel"><p class="Ap1_form_text">전화번호 <span class="Ap1_red_text">*</span></p></label>
          <input class="Ap1_form_input" id="Ap1_tel"></input>

          <p class="Ap1_form_text">학교 계정 이메일 <span class="Ap1_red_text">*</span></p>
          <input class="Ap1_form_input"></input>

          <label for="Ap1_motivation"><p class="Ap1_form_text">지원동기 <span class="Ap1_red_text">*</span></p></label>
          <textarea id="Ap1_motivation" name="motivation" required></textarea>

          <p class="Ap1_form_text">지원분야</p>
          <input class="Ap1_form_input"></input>

          <label for="Ap1_Dasomtalk"><p class="Ap1_form_text">DASOM에게 하고 싶은 말</p></label>
          <textarea id="Ap1_Dasomtalk" name="Dasomtalk" required></textarea>\
          
          <input type="submit" value="DASOM 지원하기"/>
          
        </form>
      </div>
      <Ap1_NullBox></Ap1_NullBox>
      <Footer></Footer>
    </div>
  )
}

export default Apply1