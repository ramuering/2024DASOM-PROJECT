import React from 'react'
import Header from "../../components/Header"
import styled from "styled-components"
import "./Main.css"


const Main = () =>{
  return (
    <Container>
      <Header />
      <div className='video-wrapper'>
        <div className='video'>
        <iframe
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        width="1200"
        height="764"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8zY28ay5FPZk0BcKI7q5Q1%2FDASOM%3Fpage-id%3D0%253A1%26node-id%3D1060-141%26scaling%3Dcontain%26starting-point-node-id%3D1060%253A716%26show-proto-sidebar%3D1%26mode%3Ddesign%26t%3D09dqcWW5YUo8f3Vd-1"
        allowFullScreen
        title="Figma Embed"
        >
        </iframe>
        </div>
      </div>
    </Container>
  )
}

export default Main

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: block;
  text-align: center;
`;

