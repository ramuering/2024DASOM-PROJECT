import React from 'react'
import './Makers.css'

const Member = ({ profile, name, gi }) => {
  return (
    <div className='makers-profileBox'>
      <div className='makers-profile'>
        <img src={profile} alt='프로필사진'></img>
      </div>
      <div className='makers-name'>
        {name}</div>
      <div className='makers-gi'>
        {gi}</div>
    </div>
  );
};

function Makers() {
  return (
    <div className='makers-contents'>
      <div className='makers-position'>Lead</div>
      <div className='makers-member'>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
      </div>

      <div className='makers-position'>Pm</div>
      <div className='makers-member'>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
      </div>

      <div className='makers-position'>Back</div>
      <div className='makers-member'>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
      </div>

      <div className='makers-position'>Front</div>
      <div className='makers-member'>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
      </div>

      <div className='makers-position'>Design</div>
      <div className='makers-member'>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
      </div>
    </div>
  )
}

export default Makers