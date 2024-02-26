import React, {useEffect} from 'react'
import "./Apply2.css"
import styled from 'styled-components';

const Ap2NullBox = styled.div`
    height: 40px;
`;

function Apply2() {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="Ap2-main">
      <div id="Ap2-first-forms" class="form">
        <div>
        <p id="Ap2-form-title">DASOM <span class="Ap2-mini-text">33</span>nd</p>
        <Ap2NullBox></Ap2NullBox>
        <p id="Ap2-sub-title">
          다솜 33기에 지원해 주셔서 감사합니다.,<br></br>
          작성해 주신 지원서는 검토 후<br></br>
          서류 결과 발표일에 <b>개별로 연락</b>드리겠습니다.<br></br><br></br>
          감사합니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Apply2