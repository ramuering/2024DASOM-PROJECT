import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>

      <div className='logo-container'>
        <img className='img-logo' src='./images/dasom-logo.PNG' alt='다솜로고'></img>
        <p className='logo-text'>DASOM</p>
      </div>

      <p className='full-meaning'>
        <span style={{color : '#54Ecc4'}}>D</span>evelopment
        <span style={{color : '#54Ecc4'}}> A</span>lgorithm
        <span style={{color : '#54Ecc4'}}> S</span>oftware
        inn<span style={{color : '#54Ecc4'}}>O</span>vation
        <span style={{color : '#54Ecc4'}}> M</span>entorship
      </p>

      <div className='info'>
        <div className='icon-text-container'>
          <img className='img-mail' src='./images/mail.PNG' alt='메일아이콘'></img>
          <p className='mail'>hosung60023@naver.com</p>
        </div>
        <div className='icon-text-container'>
          <img className='img-human' src='./images/human.PNG' alt='사람아이콘'></img>
          <p>회장 남호성</p>
        </div>
      </div>

      <div className='location'>
        <img className='img-map' src='./images/map-pin.PNG' alt='맵핀이미지'></img>
        <p>3호관 5층</p>
      </div>

      <div className='sns'>
        <p>DASOM 채널 바로가기</p>
        <img className='img-github' src='./images/github.PNG' alt='깃허브로고'></img>
        <img className='img-instagram' src='./images/instagram.PNG' alt='인스타로고'></img>
      </div>

    </div>
  )
}

export default Footer