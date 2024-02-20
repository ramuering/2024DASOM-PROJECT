import React, { useState } from 'react';
import "./ManStudyApply.css"

function ManProjectApply() {
        const [ProjectTitle, setProjectTitle] = useState('');
        const [ProjectContent, setProjectContent] = useState(''); 
        const [startDate, setStartDate] = useState('');
        const [endDate, setEndDate] = useState('');
        const [activityWeeks, setActivityWeeks] = useState(["1주차"]);
        const [thumbnailPic, setThumbnailPic] = useState(null); 
        const [studyPic, setStudyPic] = useState(null); 
        
        
        const addWeek = () => {
        const newWeek = `${activityWeeks.length + 4}주차`;
                  setActivityWeeks([...activityWeeks, newWeek]);
        };
        const handleThumbnailPicChange = (event) => {
                const file = event.target.files[0];
                setThumbnailPic(file);
         };
                
        const handleStudyPicChange = (event) => {
                const file = event.target.files[0];
                setStudyPic(file);
        };

        const handleProjectRegistration = () => {
                // 스터디 등록 버튼 클릭 시 실행되는 함수
                console.log('프로젝트 제목:', ProjectTitle);
                console.log('프로젝트 내용:', ProjectContent);
                console.log('시작 날짜:', startDate);
                console.log('종료 날짜:', endDate);
                console.log('활동 주차:', activityWeeks);
                console.log('썸네일 사진:', thumbnailPic);
                console.log('활동 사진:', studyPic);
            };
    
                
  return (
    <div className='ManStudyApply'>
        <div className='ManStudyApply-title'>프로젝트 등록</div>
        <div className='ManStudyApply-box'>
                <input 
                class="ManStudyApply-name"
                type='text'
                value={ProjectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder='프로젝트 이름을 입력하세요 *' 
                autoFocus></input>
                </div>

        <div className='ManStudyApply-box'>
      <input 
              class="ManStudyApply-content"
              type='text'
              value={ProjectContent}
              onChange={(e) => setProjectContent(e.target.value)}
              placeholder='프로젝트 내용을 입력하세요 *' 
              autoFocus></input>
              </div>

        <div className='ManStudyApply-box'>
      <input 
              class="ManStudyApply-number"
              type='text'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder='프로젝트 시작하는 날짜를 입력하세요.   ex) 2024-04-04' 
              autoFocus></input>
              </div>

        <div className='ManStudyApply-box'>
      <input class="ManStudyApply-book"
              type='text'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder='프로젝트 끝나는 날짜를 입력하세요.   ex) 2024-04-04 ' 
              autoFocus></input>
              </div>

      <div className='ManStudyApply-subtitle'>프로젝트 팀원</div>

      <div className='ManStudyApply-box'>
      <input class="ManStudyApply-1weeks"
              type='text'
              placeholder='기수, 이름, 파트' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-2weeks"
              type='text'
              placeholder='기수, 이름, 파트' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-3weeks"
              type='text'
              placeholder='기수, 이름, 파트' autoFocus></input></div>
              {activityWeeks.map((week, index) => (
        <div className='ManStudyApply-box' key={index}>
          <input
            className={`ManStudyApply-${index + 1}weeks`}
            type='text'
            placeholder="기수, 이름, 파트"
          autoFocus
          ></input>
        </div>
      ))}
                 <div className='ManStudyApply-picture'>썸네일 사진</div>
            <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailPicChange}
                style={{ display: 'none' }}
                id="thumbnailPicInput"
            />
            <label htmlFor="thumbnailPicInput" className='ManStudyApply-select'>사진 선택</label>

            <div className='ManStudyApply-activ'>활동 사진</div>
            <input
                type="file"
                accept="image/*"
                onChange={handleStudyPicChange}
                style={{ display: 'none' }}
                id="studyPicInput"
            />
            <label htmlFor="studyPicInput" className='ManStudyApply-select'>사진 선택</label>

            <button className='ManStudyApply-button' onClick={handleProjectRegistration}>프로젝트 등록</button>
        </div>
    );
}


export default ManProjectApply