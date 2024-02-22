import React, { useState } from 'react';
import "./ManStudyApply.css"
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'



function ManProjectApply() {
 const navigate = useNavigate();
    const [projectTitle, setProjectTitle] = useState('');
    const [projectContent, setProjectContent] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [thumbnailPic, setThumbnailPic] = useState(null);
    const [studyPic, setStudyPic] = useState(null);

    const handleProjectRegistration = async () => {

        console.log('studyPic', studyPic)

        try {
            const response = await axios.post(`https://dmu-dasom.or.kr:8090/board/project`,{
                    projectTitle,
                    projectContent,
                    startDate,
                    endDate,
            });
            if (response.status === 201) {
                console.log("프로젝트 생성 성공")
                navigate('/ManProject');
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className='ManStudyApply'>
            <div className='ManStudyApply-title'>프로젝트 등록</div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-name"
                    type='text'
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder='프로젝트 이름을 입력하세요 *'
                    autoFocus
                />
            </div>

            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-content"
                    type='text'
                    value={projectContent}
                    onChange={(e) => setProjectContent(e.target.value)}
                    placeholder='프로젝트 내용을 입력하세요 *'
                />
            </div>

            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-number"
                    type='text'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder='프로젝트 시작하는 날짜를 입력하세요.   ex) 2024-04-04'
                />
            </div>

            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-book"
                    type='text'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder='프로젝트 끝나는 날짜를 입력하세요.   ex) 2024-04-04 '
                />
            </div>



            <button className='ManStudyApply-button' onClick={handleProjectRegistration}>프로젝트 등록</button>
        </div>
    );
}

export default ManProjectApply;
