import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer';
import data from './data.js';
import { Link } from 'react-router-dom';
import "./NoticeCreate.css"

function NoticeCreate(){
    return(
        <div>
            <div id='NoCr_main'>
            <div id='NoCr_box'>
            <p id='NoCr_title'>공지사항 등록</p>
            
            <form action="../noticeadmin">
                <input id="NoCr_Cr_title" placeholder='글 제목을 입력하세요*'></input>
                <br></br>
                <br></br>
                <br></br>
                <textarea id="NoCr_Cr_text" name="motivation" required placeholder='본문  내용을 입력하세요*'></textarea>

                <div class="filebox">
                    <p id='filebox_titles'>사진</p>
                    <label for="file">사진 선택</label> 
                    <input type="file" id="file"></input>
                </div>

                <input type='submit' id="NoCr_submit" value={"공지사항 등록"}></input>
            </form>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default NoticeCreate;