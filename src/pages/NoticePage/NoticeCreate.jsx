import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer';
import data from './data.js';
import { Link } from 'react-router-dom';
import "./NoticeCreate.css"

function NoticeCreate(){

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, [])
    return(
        <div>
            <div id='NoCr-main'>
            <div id='NoCr-box'>
            <p id='NoCr-title'>공지사항 등록</p>
            
            <form action="../noticeadmin">
                <input id="NoCr-Cr-title" placeholder='글 제목을 입력하세요*'></input>
                <br></br>
                <br></br>
                <br></br>
                <textarea id="NoCr-Cr-text" name="motivation" required placeholder='본문  내용을 입력하세요*'></textarea>

                <div class="filebox">
                    <p id='filebox-titles'>사진</p>
                    <label for="file">사진 선택</label> 
                    <input type="file" id="file"></input>
                </div>

                <input type='submit' id="NoCr-submit" value={"공지사항 등록"}></input>
            </form>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default NoticeCreate;