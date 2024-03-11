import React, { useEffect } from 'react';
import "./NewMember.css"
import Footer from "../../components/Footer"
import styled from "styled-components";
import Apply1 from './Apply1';
import { Link } from "react-router-dom";
import { useAppContext } from '../../contexts/AppContext';

const NMBVideoDiv = styled.div`
  width:100vw;
  height:100vh;
  position: relative;
`;

const NMBVideoTag = styled.div`
  width:100vw;
  height:100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NMBVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NMBNullBox = styled.div`
    width: 100%;
    height: 700px;
`;

const NMBNullBox2 = styled.div`
    width:285px;
    height:145px;
    p{
      text-align:left;
    }
`

const NMBNullBox3 = styled.div`
    width:285px;
    height:330px;
`
const NMBLeftBox = styled.div`
    width:285px;
    height:400px;
    
    p{
      text-align:right;
    }
`;

const NMBRightBox = styled.div`
    width:285px;
    height:430px;
    
    p{
      text-align:left;
    }
`;

const NMBQuesAlign = styled.div`
display: flex; /* flex 컨테이너로 설정 */
justify-content: space-between; /* 자식 요소들 사이의 간격을 최대로 설정 */
align-items: center; /* 세로 방향에서 중앙 정렬 */
height:120px;
width:1200px;
margin-bottom:50px;
`

const NMBQuesbox = styled.div`
    width:585px;
    height:114px;
    background:#323232;
    border-radius:16px;
    display: flex; /* flex 컨테이너로 설정 */
    align-items: center; /* 세로 방향에서 중앙 정렬 */
`

const NMBQuesboxs = styled.div`
width:1200px;
height:114px;
background:#323232;
border-radius:16px;
display: flex; /* flex 컨테이너로 설정 */
align-items: center; /* 세로 방향에서 중앙 정렬 */
`
function NewMember() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  const { isApplicationOpen } = useAppContext();

  return (
    <div id="NMB-MAIN-BOX">

      <NMBVideoDiv>
        <NMBVideoTag>
          <NMBVideo muted autoPlay>
            <source src={require("./Video/2024_Dasom_Apply.mp4")} type="video/mp4" />
          </NMBVideo>
        </NMBVideoTag>
      </NMBVideoDiv>
      <NMBNullBox></NMBNullBox>

      <div id="NMB-club-join">
        <div id="NMB-text-box">
          <p id="NMB-Main-text">지원방법</p>
          <div id="NMB-bgstyle">
            <p class="NMB-text-title">모집기간</p>
            <p class="NMB-sub-text">- 서류 모집: 2024.02.27 ~ 2024.03.06 <br></br> - 추가 서류 모집: 2024.03.06 ~ 2024.03.10 <br></br> - 서류 발표: 2024.03.08 - 추가 모집 서류 발표: 2024.03.10
            <br></br>- 대면 면접: 2024.03.11 ~ 2024.03.13
            <br></br>- 최종 발표: 2024.03.15</p>
          </div>

          <div class="NMB-big-box">
            <div class="NMB-small-box">
              <p class="NMB-text-title">지원 자격</p>
              <p class="NMB-sub-text">동양미래대학교 컴퓨터공학부 재학생이라면<br></br> 누구나 지원 가능합니다.<br></br><br></br> 실력을 키우기 위해<br></br> 튜터링, 스터디, 프로젝트에 참여해 배우려는 <br></br>의지가 넘치시는 분들에게 지원을 추천합니다.</p>
            </div>
            <div id="NMB-null-box2">
            </div>
            <div class="NMB-small-box">
              <p class="NMB-text-title">지원 방법</p>
              <p class="NMB-sub-text">다솜 홈페이지 recruit 접속 후 지원서 작성</p>
            </div>
          </div>
        </div>
      </div>

      <NMBNullBox></NMBNullBox>

      <div>
        <p id="NMB-Main-text">모집 일정</p>
          <div id="NMB-center-box">
            <div class="NMB-align-box">
              <NMBNullBox2></NMBNullBox2>
              <NMBLeftBox>
                <p class="NMB-text-titles">서류 모집</p>
                <p class="NMB-sub-texts">2024.02.27(화) <br></br>~ 03.06(수)</p>
                <p class="NMB-text-titles">추가 서류 모집</p>
                <p class="NMB-sub-texts">2024.03.06(수) <br></br>~ 03.10(일)</p>
              </NMBLeftBox>
              <NMBLeftBox>
                <p class="NMB-text-titles">대면 면접</p>
                <p class="NMB-sub-texts">2024.03.11(월) <br></br>~ 03.13(수)</p>
              </NMBLeftBox>
            </div>
            <div class="NMB-align-box">
              <img src="images/apply.png"></img>
            </div>
            <div class="NMB-align-box">
              <NMBNullBox3></NMBNullBox3>
              <NMBRightBox>
                <p class="NMB-text-titles">서류 발표</p>
                <p class="NMB-sub-texts">2024.03.08(금)</p>
                <p class="NMB-text-titles">추가 서류 발표</p>
                <p class="NMB-sub-texts">2024.03.10(일)</p>
                </NMBRightBox>
              <NMBNullBox2>
              <p class="NMB-text-titles">최종 발표</p>
                <p class="NMB-sub-texts">2024.03.15(금)</p>
              </NMBNullBox2>
            </div>
          </div>
          <div id="NMB-center-button">

            <Link  className="NMB-linkButton">
                          지금은 지원기간이 아닙니다
                        </Link>

          </div>
      </div>

      <NMBNullBox></NMBNullBox>
      
      <div id="NMB-ques">
          <div>
          <div id="NMB-ques-title">
          <p id="NMB-ques-text" style={{ marginBottom: '30px' }}>자주 묻는 질문</p>
          <p id="NMB-ques-subtext">FAQ</p>
          </div>

          <NMBQuesAlign>
          <NMBQuesbox><p class="NMB-ques-text">Q. DASOM은 어떤 동아리인가요?</p></NMBQuesbox> 
            <NMBQuesbox><p class="NMB-ques-text">Q. 경험과 실력이 부족해도 괜찮을까요?</p></NMBQuesbox>
          </NMBQuesAlign>

          <NMBQuesAlign>
            <NMBQuesboxs><p class="NMB-ques-text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></NMBQuesboxs>
          </NMBQuesAlign>

          <NMBQuesAlign>
            <NMBQuesbox><p class="NMB-ques-text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></NMBQuesbox>
            <NMBQuesbox><p class="NMB-ques-text">Q. DASOM의 방향성을 소개해 주세요!</p></NMBQuesbox>
          </NMBQuesAlign>

          <div id="NMB-ques-footer">
              <p class="NMB-f-text" style={{ color: 'gray' }}>동아리 관련, 튜터링 등 언제든지 문의해 주세요.</p>
              <a href="https://www.instagram.com/dasom___official" target="_blank" style={{fontWeight: 'bold', cursor: 'pointer'}}>문의하러 가기 &gt;</a>
            </div>
          </div>
        </div>
        <NMBNullBox></NMBNullBox>
        
        <div id="NMB-footer-box">
        <Footer></Footer>
        </div>
    </div>
  )
}

export default NewMember