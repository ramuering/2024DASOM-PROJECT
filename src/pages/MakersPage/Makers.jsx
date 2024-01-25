import React from 'react'
import './Makers.css'

const Member = ({ profile, name, gi }) => {
  return (
    <div className='makers-profileBox'>
      <div className='makers-profile'>
        <img src={profile} alt='프로필사진'></img>
      </div>
      <p className='makers-name'>
        {name}</p>
      <p className='makers-gi'>
        {gi}</p>
    </div>
  );
};

function Makers() {
  return (
    <div className='makers-contents'>
      <div className='makers-member'><div className='makers-read'>Lead
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>
        </div>
      
      <div className='makers-member'><div className='makers-pm'>Pm
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>
        </div>

      <div className='makers-member'><div className='makers-back'>Back</div>Back
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

      <div className='makers-member'><div className='makers-front'>front</div>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

      <div className='makers-member'><div className='makers-design'>Design</div>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>
    </div>
  )
}

export default Makers