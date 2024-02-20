import React, { useState } from 'react'
import "./ManMemberModify.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManMemberModify() {
  const [formData, setFormData] = useState({
    memDepartment: '',
    memName: '',
    memGrade: 1
  });
  const navigate = useNavigate();
  // 입력 필드의 변경 사항을 처리합니다.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/members/{memNo}', formData);
      if (response.status === 200) {
        console.log(response.status)
        navigate('/manApply');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className='ManMemberModify'>
      <p className='ManMemberModify-title'>회원 수정</p>
      <form onSubmit={handleSubmit}className='ManMemberModify'>
        <div onSubmit={handleSubmit}className="horizontal-line-container">
        <p>학과</p>
        <div className="horizontal-line"></div>
    </div>
    <div className='ManMemberModify-checkbox'>
    <div className='ManMemberModify-button1'>
          <input type='radio'
            value="컴소"
            name='memDepartment'
            onChange={handleChange}
          ></input>
      <label for="comso">컴퓨터소프트웨어공학과</label></div>
      <div className='ManMemberModify-button2'>
          <input type='radio'
            value="컴정"
            onChange={handleChange}
            name="memDepartment"
          ></input>
      <label for="comin">컴퓨터정보공학과</label></div>
      <div className='ManMemberModify-button3'>
          <input type='radio'
            value="인소"
            name='memDepartment'
            onChange={handleChange}
          ></input>
      <label for="inso">인공지능소프트웨어공학과</label></div>
      </div>
        <div className='ManMemberModify-box1'>
        <input class="ManMemberModify-name" 
                type='text' 
          placeholder='이름'
          name="memName"
          onChange={handleChange}
          autofocus></input></div>

        <div className='ManMemberModify-box2'>
        <input class="ManMemberModify-phone" 
          type='text' 
          name="memGrade"
          placeholder='학년'
          onChange={handleChange}
          autofocus></input>
      </div>
        
        <button type="submit" className='ManMemberModify-button'>회원 정보 수정</button>
        </form>
    </div>

  )
}

export default ManMemberModify