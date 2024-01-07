import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./About.css"

function About() {
  return (
    <div>
      <Header />
      <div className='about'>
        <div className='main'>
          <div className='main-text-box'>
            <p className='main-text1'>DASOM</p>
            <p className='main-text2'>컴퓨터 공학부 IT 전공 동아리</p>
            <p className='main-text3'>32기 DASOM 소개</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About