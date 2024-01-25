import React from 'react'
import "./ManMemberModify.css";

function ManMemberModify() {
  return (
    <div className='ManMemberModify'>
    <p className='ManMemberModify-title'>회원 수정</p>
    <div className="horizontal-line-container">
        <p>학과</p>
        <div className="horizontal-line"></div>
    </div>
    <div className='ManMemberModify-checkbox'>
    <div className='ManMemberModify-button1'>
      <input type='radio'></input>
      <label for="comso">컴퓨터소프트웨어공학과</label></div>
      <div className='ManMemberModify-button2'>
      <input type='radio'></input>
      <label for="comin">컴퓨터정보공학과</label></div>
      <div className='ManMemberModify-button3'>
      <input type='radio'></input>
      <label for="inso">인공지능소프트웨어공학과</label></div>
      </div>
        <div className='ManMemberModify-box1'>
        <input class="ManMemberModify-name" 
                type='text' 
                placeholder='이름' autofocus></input></div>

        <div className='ManMemberModify-box2'>
        <input class="ManMemberModify-phone" 
                type='text' 
                placeholder='전화번호'autofocus></input></div>
        
    <button className='ManMemberModify-button'>회원 정보 수정</button>
    </div>

  )
}

export default ManMemberModify