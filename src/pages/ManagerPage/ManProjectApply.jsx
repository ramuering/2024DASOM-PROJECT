import React from 'react'
import "./ManStudyApply.css"

function ManProjectApply() {
  return (
    <div className='ManStudyApply'>
    <div className='ManStudyApply-title'>프로젝트 등록</div>
    <div className='ManStudyApply-box'>
      <input class="ManStudyApply-name"
              type='text'
              placeholder='프로젝트 이름을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-content"
              type='text'
              placeholder='프로젝트 내용을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-number"
              type='text'
              placeholder='기수을 입력하세요 *' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-book"
              type='text'
              placeholder='기간 입력하세요 ' autoFocus></input></div>
              <div className='ManStudyApply-box'>
      <input class="ManStudyApply-lecture"
              type='text'
              placeholder='프로젝트 형태를 입력하세요 ' autoFocus></input></div>

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

              <button className='plus'></button>

      <div className='ManStudyApply-picture'>썸네일 사진</div>
      <button className='ManStudyApply-select'>사진 선택</button>
      <div className='ManStudyApply-activ'>활동 사진</div>
      <button className='ManStudyApply-select'>사진 선택</button>

      <button className='ManStudyApply-button'>프로젝트 등록</button>
</div>
  )
}

export default ManProjectApply