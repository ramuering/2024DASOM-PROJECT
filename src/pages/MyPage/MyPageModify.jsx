import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './MyPageModify.css'

function MyPageModify() {
  return (
    <div>
    <div className='content'>
      <Header />
      <div className='title'>내 정보 수정</div>
      <input type='text' className='gitHub' placeholder='깃허브 주소' />
      <div className='profile'>프로필 사진</div>
      <div className='choiceProfileBorder'>
        <div className='choiceProfileFont'>사진 선택</div>
      </div>
      <div className='MyDataButtonBorder'>
        <div className='MyDataButtonFont'>내 정보 수정</div>
      </div>
    </div>
    </div>
  )
}

export default MyPageModify