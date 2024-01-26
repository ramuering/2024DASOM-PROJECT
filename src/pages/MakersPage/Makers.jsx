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

      <img src='./images/dasom-logo.PNG' className='makers-logo' />
      <div className='makers-dasom'>
        <p>DASOM makers는</p> 
        <p>DASOM 구성원들이 가진 불편함을 제품을 통해 해결하여,</p>
        <p>구성원들에게 더 많은 가치를 연결하기 위해 신설된 특수 기구에요.</p>
      </div>

      <div className='makers-body'>
        <div className='makers-position'>Lead</div><div className='makers-line1'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

        <div className='makers-position'>Pm</div><div className='makers-line2'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

        <div className='makers-position'>Back</div><div className='makers-line3'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

        <div className='makers-position'>Front</div><div className='makers-line4'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>

        <div className='makers-position'>Design</div><div className='makers-line5'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
          <Member profile='./images/myPage/profile.jpg' name='홍길동' gi='31기'></Member>
        </div>
      </div>
    </div>
  )
}

export default Makers