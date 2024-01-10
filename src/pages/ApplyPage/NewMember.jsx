import React, { useEffect } from 'react';
import "./NewMember.css"
import Footer from "../../components/Footer"
import styled from "styled-components";
import Apply1 from './Apply1';
import { Link } from "react-router-dom";

const VideoDiv = styled.div`
  width:100vw;
  height:100vh;
  position: relative;
`;

const VideoTag = styled.div`
  width:100vw;
  height:100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NullBox = styled.div`
    width: 100%;
    height: 700px;
`;

const NullBox2 = styled.div`
    width:285px;
    height:145px;
    p{
      text-align:left;
    }
`

const NullBox3 = styled.div`
    width:285px;
    height:330px;
`
const LeftBox = styled.div`
    width:285px;
    height:400px;
    
    p{
      text-align:right;
    }
`;

const RightBox = styled.div`
    width:285px;
    height:430px;
    
    p{
      text-align:left;
    }
`;

const QuesAlign = styled.div`
display: flex; /* flex 컨테이너로 설정 */
justify-content: space-between; /* 자식 요소들 사이의 간격을 최대로 설정 */
align-items: center; /* 세로 방향에서 중앙 정렬 */
height:120px;
width:1200px;
margin-bottom:50px;
`

const Quesbox = styled.div`
    width:585px;
    height:114px;
    background:#323232;
    border-radius:16px;
    display: flex; /* flex 컨테이너로 설정 */
    align-items: center; /* 세로 방향에서 중앙 정렬 */
`

const Quesboxs = styled.div`
width:1200px;
height:114px;
background:#323232;
border-radius:16px;
display: flex; /* flex 컨테이너로 설정 */
align-items: center; /* 세로 방향에서 중앙 정렬 */
`
const styles ={
  Footer:{
    marign:500
  }
}

function NewMember() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>

      <VideoDiv>
        <VideoTag>
          <Video muted autoPlay loop>
            <source src={require("./Video/2024DASOM.mp4")} type="video/mp4" />
          </Video>
        </VideoTag>
      </VideoDiv>
      <NullBox></NullBox>

      <div id="club_join">
        <div id="text_box">
          <p id="Main_text">지원방법</p>

          <div id="bgstyle">
            <p class="text_title">모집기간</p>
            <p class="sub_text">다솜에서는 1년에 한 번, 열정을 가지고 함께 동아리를 꾸려갈 부원을 모집합니다. <br></br> 동아리 부원으로 다양한 프로젝트에 참여해 자신을 발전시켜 보세요. <br></br>학교 주변 맛집부터 시험 꿀팁까지! 선배와 동기들이 무엇이든 알려드립니다.</p>
          </div>

          <div class="big_box">
            <div class="small_box">
              <p class="text_title">지원 자격</p>
              <p class="sub_text">동양미래대학교 컴퓨터공학부 재학생이라면<br></br> 누구나 지원 가능합니다.<br></br><br></br> 실력을 키우기 위해<br></br> 튜터링, 스터디, 프로젝트에 참여해 배우려는 <br></br>의지가 넘치시는 분들에게 지원을 추천합니다.</p>
            </div>
            <div id="null_box2">
            </div>
            <div class="small_box">
              <p class="text_title">지원 방법</p>
              <p class="sub_text">1차 서류 - 신입부원 모집 지원서 작성<br></br> <br></br>2차 면접 - 대면 면접 이후 최종 합격</p>
            </div>
          </div>
        </div>
      </div>

      <NullBox></NullBox>

      <div>
        <p id="Main_text">모집 일정</p>
          <div id="center_box">
            <div class="align_box">
              <NullBox2></NullBox2>
              <LeftBox>
                <p class="text_titles">서류접수</p>
                <p class="sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </LeftBox>
              <LeftBox>
                <p class="text_titles">대면면접</p>
                <p class="sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </LeftBox>
            </div>
            <div class="align_box">
              <img src="images/apply.png"></img>
            </div>
            <div class="align_box">
              <NullBox3></NullBox3>
              <RightBox>
                <p class="text_titles">서류 결과 발표</p>
                <p class="sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
                </RightBox>
              <NullBox2>
              <p class="text_titles">서류 결과 발표</p>
                <p class="sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NullBox2>
            </div>
          </div>
        <div id="center_button">
        <button><Link to="../apply01" className="linkButton">지원하기</Link></button>
        </div>
      </div>

      <NullBox></NullBox>
      
      <div id="ques">
          <div>
          <div id="ques_title">
          <p id="ques_text" style={{ marginBottom: '30px' }}>자주 묻는 질문</p>
          <p>FAQ</p>
          </div>

          <QuesAlign>
          <Quesbox><p class="ques_text">Q. DASOM은 어떤 동아리인가요?</p></Quesbox> 
            <Quesbox><p class="ques_text">Q. 경험과 실력이 부족해도 괜찮을까요?</p></Quesbox>
          </QuesAlign>

          <QuesAlign>
            <Quesboxs><p class="ques_text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></Quesboxs>
          </QuesAlign>

          <QuesAlign>
            <Quesbox><p class="ques_text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></Quesbox>
            <Quesbox><p class="ques_text">Q. DASOM의 방향성을 소개해 주세요!</p></Quesbox>
          </QuesAlign>
          </div>
        </div>
        <NullBox></NullBox>
        <div id="footer_box">
        <Footer></Footer>
        </div>
    </div>
  )
}

export default NewMember