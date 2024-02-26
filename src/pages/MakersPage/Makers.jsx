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

      <img src='./images/dasom-logo-header.png' className='makers-logo' />
      <div className='makers-dasom'>
        <p>DASOM makers는</p>
        <p>DASOM 구성원들이 가진 불편함을 제품을 통해 해결하여,</p>
        <p>구성원들에게 더 많은 가치를 연결하기 위해 신설된 특수 기구예요.</p>
      </div>

      <div className='makers-body'>
        <div className='makers-position'>Lead</div><div className='makers-line1'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/hosungProfile.jpg' name='남호성' gi='29기'></Member>
        </div>

        <div className='makers-position'>Pm</div><div className='makers-line2'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/hosungProfile.jpg' name='남호성' gi='29기'></Member>


        </div>

        <div className='makers-position'>Back</div><div className='makers-line3'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/basicProfile.jpeg' name='김나리' gi='32기'></Member>
          <Member profile='./images/myPage/sinyoungProfile.png' name='김신영' gi='32기'></Member>
          <Member profile='./images/myPage/hosungProfile.jpg' name='남호성' gi='29기'></Member>
          <Member profile='./images/myPage/basicProfile.jpeg' name='송영민' gi='32기'></Member>
          <Member className='five' profile='./images/myPage/basicProfile.jpeg' name='이권희' gi='32기'></Member>
          <Member profile='./images/myPage/basicProfile.jpeg' name='우승원' gi='32기'></Member>
          <Member profile='./images/myPage/seonghwanProfile.jpeg' name='유승완' gi='32기'></Member>
          <Member profile='./images/myPage/dohunProfile.jpeg' name='윤도훈' gi='32기'></Member>
        </div>

        <div className='makers-position'>Front</div><div className='makers-line4'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/suhyunProfile.jpeg' name='김수현' gi='32기'></Member>
          <Member profile='./images/myPage/aramProfile.jpeg' name='김아람' gi='32기'></Member>
          <Member profile='./images/myPage/solmiProfile.webp' name='신솔미' gi='32기'></Member>

          <Member profile='./images/myPage/yewonProfile.jpeg' name='이예원' gi='32기'></Member>
          <Member classNams='five' profile='./images/myPage/jeongminProfile.jpeg' name='유정민' gi='32기'></Member>
        </div>

        <div className='makers-position'>Design</div><div className='makers-line5'></div>
        <div className='makers-member'>
          <Member profile='./images/myPage/hosungProfile.jpg' name='남호성' gi='29기'></Member>
          <Member profile='./images/myPage/yewonProfile.jpeg' name='이예원' gi='32기'></Member>
          <Member profile='./images/myPage/basicProfile.jpeg' name='우승원' gi='32기'></Member>
        </div>
      </div>
    </div>
  )
}

export default Makers