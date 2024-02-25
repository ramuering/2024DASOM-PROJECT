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
          <NMBVideo muted autoPlay loop>
            <source src={require("./Video/2024DASOM.mp4")} type="video/mp4" />
          </NMBVideo>
        </NMBVideoTag>
      </NMBVideoDiv>
      <NMBNullBox></NMBNullBox>

      <div id="NMB-club-join">
        <div id="NMB-text-box">
          <p id="NMB-Main-text">지원방법</p>

          <div id="NMB-bgstyle">
            <p class="NMB-text-title">모집기간</p>
            <p class="NMB-sub-text">다솜에서는 1년에 한 번, 열정을 가지고 함께 동아리를 꾸려갈 부원을 모집합니다. <br></br> 동아리 부원으로 다양한 프로젝트에 참여해 자신을 발전시켜 보세요. <br></br>학교 주변 맛집부터 시험 꿀팁까지! 선배와 동기들이 무엇이든 알려드립니다.</p>
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
              <p class="NMB-sub-text">1차 서류 - 신입부원 모집 지원서 작성<br></br> <br></br>2차 면접 - 대면 면접 이후 최종 합격</p>
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
                <p class="NMB-text-titles">서류접수</p>
                <p class="NMB-sub-texts">2024.02.27(월) <br></br>~ 03.06(일) 23 : 59</p>
              </NMBLeftBox>
              <NMBLeftBox>
                <p class="NMB-text-titles">대면면접</p>
                <p class="NMB-sub-texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NMBLeftBox>
            </div>
            <div class="NMB-align-box">
              <img src="images/apply.png"></img>
            </div>
            <div class="NMB-align-box">
              <NMBNullBox3></NMBNullBox3>
              <NMBRightBox>
                <p class="NMB-text-titles">서류 결과 발표</p>
                <p class="NMB-sub-texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
                </NMBRightBox>
              <NMBNullBox2>
              <p class="NMB-text-titles">서류 결과 발표</p>
                <p class="NMB-sub-texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NMBNullBox2>
            </div>
          </div>
          <div id="NMB-center-button">
          {isApplicationOpen ? (
            <Link to="../apply01" className="NMB-linkButton">
              지원하러 가기
            </Link>
          ) : (
            <span id='NMB-center-button-closed'>지원 기간이 아닙니다</span>
          )}
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