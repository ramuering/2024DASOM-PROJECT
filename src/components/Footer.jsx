import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className='footer'>
      <div className='footer-logo-container'>
        <img className='footer-img-logo' src='./images/myPage/dasom-logo-noname.png' alt='다솜로고'></img>
        <p className='footer-logo-text'>DASOM</p>
      </div>

      <p className='footer-full-meaning'>
        <span style={{color : '#54Ecc4'}}>D</span>evelopment
        <span style={{color : '#54Ecc4'}}> A</span>lgorithm
        <span style={{color : '#54Ecc4'}}> S</span>oftware
        inn<span style={{color : '#54Ecc4'}}>O</span>vation
        <span style={{color : '#54Ecc4'}}> M</span>entorship
      </p>

      <div className='footer-info'>
        <div className='footer-icon-text-container'>
          <img className='footer-img-mail' src={'./images/myPage/mail.png'} alt='메일아이콘'></img>
          <p className='footer-mail'>dmu_dasom@naver.com</p>
        </div>
        <div className='footer-icon-text-container'>
          <img className='footer-img-human' src='./images/myPage/human.png' alt='사람아이콘'></img>
          <p>회장 남호성</p>
        </div>
      </div>
     
      </div>
      <div className="footer-bottom">
      <div className='footer-location'>
        <img className='footer-img-map' src='images/myPage/map-pin.png' alt='맵핀이미지'></img>
        <p>3호관 5층</p>
      </div>

      <div className='footer-sns'>
        <p>DASOM 채널 바로가기</p>
        <a href='https://github.com/DASOM-GitHub'>
          <img className='footer-img-github' src='./images/myPage/github.png' alt='깃허브로고'></img>
        </a>
        <a href='https://instagram.com/dasom___official'>
          <img className='footer-img-instagram' src='./images/myPage/instagram.png' alt='인스타로고'></img>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Footer