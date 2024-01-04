import React from 'react'
import Header from "../../components/Header"
import styled from "styled-components"



const Main = () =>{
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Main

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  
`;
