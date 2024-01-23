import React, { useEffect } from 'react';
import "./NewMember.css"
import Footer from "../../components/Footer"
import styled from "styled-components";
import Apply1 from './Apply1';
import { Link } from "react-router-dom";
import { useAppContext } from '../../contexts/AppContext';

const NMB_VideoDiv = styled.div`
  width:100vw;
  height:100vh;
  position: relative;
`;

const NMB_VideoTag = styled.div`
  width:100vw;
  height:100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NMB_Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const NMB_NullBox = styled.div`
    width: 100%;
    height: 700px;
`;

const NMB_NullBox2 = styled.div`
    width:285px;
    height:145px;
    p{
      text-align:left;
    }
`

const NMB_NullBox3 = styled.div`
    width:285px;
    height:330px;
`
const NMB_LeftBox = styled.div`
    width:285px;
    height:400px;
    
    p{
      text-align:right;
    }
`;

const NMB_RightBox = styled.div`
    width:285px;
    height:430px;
    
    p{
      text-align:left;
    }
`;

const NMB_QuesAlign = styled.div`
display: flex; /* flex 컨테이너로 설정 */
justify-content: space-between; /* 자식 요소들 사이의 간격을 최대로 설정 */
align-items: center; /* 세로 방향에서 중앙 정렬 */
height:120px;
width:1200px;
margin-bottom:50px;
`

const NMB_Quesbox = styled.div`
    width:585px;
    height:114px;
    background:#323232;
    border-radius:16px;
    display: flex; /* flex 컨테이너로 설정 */
    align-items: center; /* 세로 방향에서 중앙 정렬 */
`

const NMB_Quesboxs = styled.div`
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
    <div id="NMB_MAIN_BOX">

      <NMB_VideoDiv>
        <NMB_VideoTag>
          <NMB_Video muted autoPlay loop>
            <source src={require("./Video/2024DASOM.mp4")} type="video/mp4" />
          </NMB_Video>
        </NMB_VideoTag>
      </NMB_VideoDiv>
      <NMB_NullBox></NMB_NullBox>

      <div id="NMB_club_join">
        <div id="NMB_text_box">
          <p id="NMB_Main_text">지원방법</p>

          <div id="NMB_bgstyle">
            <p class="NMB_text_title">모집기간</p>
            <p class="NMB_sub_text">다솜에서는 1년에 한 번, 열정을 가지고 함께 동아리를 꾸려갈 부원을 모집합니다. <br></br> 동아리 부원으로 다양한 프로젝트에 참여해 자신을 발전시켜 보세요. <br></br>학교 주변 맛집부터 시험 꿀팁까지! 선배와 동기들이 무엇이든 알려드립니다.</p>
          </div>

          <div class="NMB_big_box">
            <div class="NMB_small_box">
              <p class="NMB_text_title">지원 자격</p>
              <p class="NMB_sub_text">동양미래대학교 컴퓨터공학부 재학생이라면<br></br> 누구나 지원 가능합니다.<br></br><br></br> 실력을 키우기 위해<br></br> 튜터링, 스터디, 프로젝트에 참여해 배우려는 <br></br>의지가 넘치시는 분들에게 지원을 추천합니다.</p>
            </div>
            <div id="NMB_null_box2">
            </div>
            <div class="NMB_small_box">
              <p class="NMB_text_title">지원 방법</p>
              <p class="NMB_sub_text">1차 서류 - 신입부원 모집 지원서 작성<br></br> <br></br>2차 면접 - 대면 면접 이후 최종 합격</p>
            </div>
          </div>
        </div>
      </div>

      <NMB_NullBox></NMB_NullBox>

      <div>
        <p id="NMB_Main_text">모집 일정</p>
          <div id="NMB_center_box">
            <div class="NMB_align_box">
              <NMB_NullBox2></NMB_NullBox2>
              <NMB_LeftBox>
                <p class="NMB_text_titles">서류접수</p>
                <p class="NMB_sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NMB_LeftBox>
              <NMB_LeftBox>
                <p class="NMB_text_titles">대면면접</p>
                <p class="NMB_sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NMB_LeftBox>
            </div>
            <div class="NMB_align_box">
              <img src="images/apply.png"></img>
            </div>
            <div class="NMB_align_box">
              <NMB_NullBox3></NMB_NullBox3>
              <NMB_RightBox>
                <p class="NMB_text_titles">서류 결과 발표</p>
                <p class="NMB_sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
                </NMB_RightBox>
              <NMB_NullBox2>
              <p class="NMB_text_titles">서류 결과 발표</p>
                <p class="NMB_sub_texts">2023.09.25(월) <br></br>~ 10.01(일) 23 : 59</p>
              </NMB_NullBox2>
            </div>
          </div>
          <div id="NMB_center_button">
          {isApplicationOpen ? (
            <Link to="../apply01" className="NMB_linkButton">
              지원하기
            </Link>
          ) : (
            <span id='NMB_center_button_closed'>지원 마감</span>
          )}
          </div>
      </div>

      <NMB_NullBox></NMB_NullBox>
      
      <div id="NMB_ques">
          <div>
          <div id="NMB_ques_title">
          <p id="NMB_ques_text" style={{ marginBottom: '30px' }}>자주 묻는 질문</p>
          <p id="NMB_ques_subtext">FAQ</p>
          </div>

          <NMB_QuesAlign>
          <NMB_Quesbox><p class="NMB_ques_text">Q. DASOM은 어떤 동아리인가요?</p></NMB_Quesbox> 
            <NMB_Quesbox><p class="NMB_ques_text">Q. 경험과 실력이 부족해도 괜찮을까요?</p></NMB_Quesbox>
          </NMB_QuesAlign>

          <NMB_QuesAlign>
            <NMB_Quesboxs><p class="NMB_ques_text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></NMB_Quesboxs>
          </NMB_QuesAlign>

          <NMB_QuesAlign>
            <NMB_Quesbox><p class="NMB_ques_text">Q. 동아리에서 진행하는 활동이 무엇이 있나요?</p></NMB_Quesbox>
            <NMB_Quesbox><p class="NMB_ques_text">Q. DASOM의 방향성을 소개해 주세요!</p></NMB_Quesbox>
          </NMB_QuesAlign>

          <div id="NMB_ques_footer">
              <p class="NMB_f_text" style={{ color: 'gray' }}>동아리 관련, 튜터링 등 언제든지 문의해 주세요.</p>
              <p class="NMB_f_text" style={{fontWeight:'bold', cursor:'pointer'}}>문의하러 가기 &gt;</p>
            </div>
          </div>
        </div>
        <NMB_NullBox></NMB_NullBox>
        
        <div id="NMB_footer_box">
        <Footer></Footer>
        </div>
    </div>
  )
}

export default NewMember