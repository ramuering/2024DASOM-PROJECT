import React from 'react'
import Header from '../../components/LimitHeader'
import "./Apply2.css"
import styled from 'styled-components';

const Ap2_NullBox = styled.div`
    height: 70px;
`;

function Apply2() {
  return (
    <div id="Ap2_main">
      <Header></Header>
      <div id="Ap2_first_forms" class="form">

        <div>
        <p id="Ap2_form_title">DASOM <span class="Ap2_mini_text">32</span>nd</p>
        <Ap2_NullBox></Ap2_NullBox>
        <p id="Ap2_sub_title">
          다솜 32기에 지원해 주셔서 감사합니다.,<br></br>
          작성해 주신 지원서는 검토 후<br></br>
          서류 결과 발표일에 <b>문자로 연락</b>드리겠습니다.<br></br><br></br>
          감사합니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Apply2