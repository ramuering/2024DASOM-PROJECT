import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Footer from '../../components/Footer.jsx';
import data from './data.js';
import { Link } from 'react-router-dom';
import "./NoticeUpdate.css"
import axios from 'axios';

function NoticeUpdate(){

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, [])

    const [writerNo, setWriterNo] = useState(0);
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [noticePic, setNoticePic] = useState('');

    const modifyNotice= async() =>{
        try {
            const response = await axios.put('https://dmu-dasom.or.kr:8090/notice',{

                writerNo: writerNo ,
                noticeTitle: noticeTitle,
                noticeContent: noticeContent,
                noticePic: noticePic
            });
            if(response.status === 200){
                console.log('공지사항 수정 성공');
            }
            else if(response.status === 404){
                console.log('공지사항 수정 실패 (수정할 공지사항이 존재하지 않음)');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <div>
            <div id='NoCr-main'>
            <div id='NoCr-box'>
            <p id='NoCr-title'>공지사항 수정</p>
            
            <form action="../noticeadmin">
                <input id="NoCr-Cr-title" placeholder='글 제목을 입력하세요*'
                value={noticeTitle}
                onChange={(e) => setNoticeTitle(e.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>

                <textarea id="NoCr-Cr-text" name="motivation" required placeholder='본문  내용을 입력하세요*'
                value={noticeContent}
                onChange={(e) => setNoticeContent(e.target.value)}></textarea>



                <div class="filebox">
                    <p id='filebox-titles'>사진</p>
                    <label for="file">사진 선택</label> 
                    <input type="file" id="file"
                    onChange={(e) => setNoticePic(URL.createObjectURL(e.target.src))}></input>
                </div>

                <input type='submit' id="NoCr-submit" value={"공지사항 수정"}
                onClick={modifyNotice}></input>
            </form>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default NoticeUpdate;