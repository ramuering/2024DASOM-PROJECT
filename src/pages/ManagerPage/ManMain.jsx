import React from 'react'
import './ManMain.css';
import Header from "../../components/Header"

function ManMain() {
  return (
    <div className='manMain'>
      <Header />
      <p className='manMain-title'>관리자</p>
      <a className='manMain-a' href="./manMember"><button className='manMain-button'>회원 관리</button></a>
      <a className='manMain-a' href="./manStudy"><button className='manMain-button'>스터디 관리</button></a>
      <a className='manMain-a' href="./manProject"><button className='manMain-button'>프로젝트 관리</button></a>
      <a className='manMain-a' href="./manApply"><button className='manMain-button'>모집 관리</button></a>
    </div>
  )
}

export default ManMain