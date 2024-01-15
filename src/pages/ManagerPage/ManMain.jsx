import React from 'react'
import './ManMain.css';
import Header from "../../components/Header"

function ManMain() {
  return (
    <div className='manMain'>
      <Header />
      <p className='manMain-title'>관리자</p>
      <button className='manMain-button'><a className='manMain-a' href="./ManMember">회원 관리</a></button>
      <button className='manMain-button'><a className='manMain-a' href="./ManStudy">스터디 관리</a></button>
      <button className='manMain-button'><a className='manMain-a' href="./ManProject">프로젝트 관리</a></button>
      <button className='manMain-button'><a className='manMain-a' href="./ManApply">모집 관리</a></button>
    </div>
  )
}

export default ManMain