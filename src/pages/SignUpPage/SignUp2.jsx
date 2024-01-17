import React from 'react'
import "./SignUp2.css";

const SignUp2 = () => {
  return ( 
    
    <div className='SignUp2Page'>
     {/*  <div className="Element">
      <div className="subtract"></div>
      <div className="line10"></div>
      <div className="rectangle929"></div>
      <div className="ellipse40"></div>
      <div className="ellipse39"></div>
      <div className="one">1</div>
      <div className="certification">부원 인증</div>
      <div className="inputInfo">부원 정보 입력</div>
      </div> */}
    <div className='SignUp2Title'>DASOM</div>
    <div className='SignUp2_form'>
    <div className='SignUp2_check'>이미 회원이신가요?</div>
    <p className='SignUp2_login'>로그인 하기</p>
    </div>
     {/*학년*/}
     <fieldset id="grade_field">
            <legend><p class="form_text">학년 <span class="red_text">*</span></p></legend>

            <div class ="div_box">
              <div class="radio_box">
                <input type="checkbox" id="1grade" name="grade" value="1" required/>
                <label for="1grade">1학년</label>
              </div>

              <div class="radio_box">
                <input type="checkbox" id="2grade" name="grade" value="2" required/>
                <label for="2grade">2학년</label>
              </div>

              <div>
                <input type="checkbox" id="3grade" name="grade" value="3" required/>
                <label for="3grade"> 3학년</label>
              </div>
            </div>

          </fieldset>

          <fieldset id="major_field">
            <legend><p class="form_text">학과 <span class="red_text">*</span></p></legend>
            <div class ="div_box">
              <div class="check_box">
                <input type="checkbox" id="comso" name="major" value="comso"/>
                <label for="comso">컴퓨터소프트웨어공학과</label>
              </div>

              <div class="check_box">
                <input type="checkbox" id="inso" name="major" value="inso" />
                <label for="inso">인공지능소프트웨어공학과</label>
              </div>
            </div>
            <div  class="check_box">
                <input type="checkbox" id="comim" name="major" value="comim" />
                <label for="comim">컴퓨터정보공학과</label>
            </div>
          </fieldset>
          
          <fieldset id="Agree">
            <legend><p class="form_text">약관동의 <span class="red_text">*</span></p></legend>
          </fieldset>
          <button className='SignUp02_final'>다솜 가입 완료하기</button>
    </div>

  );
}
    
export default SignUp2;