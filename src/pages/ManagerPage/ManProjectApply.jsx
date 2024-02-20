import React, { useState } from 'react';
import "./ManStudyApply.css"
import axios from 'axios';

function ManProjectApply() {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectContent, setProjectContent] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [thumbnailPic, setThumbnailPic] = useState(null);
    const [studyPic, setStudyPic] = useState(null);

    const handleThumbnailPicChange = (event) => {
        const file = event.target.files[0];
        setThumbnailPic(file);
    };

    const handleStudyPicChange = (event) => {
        const file = event.target.files[0];
        setStudyPic(file);
    };

    const handleProjectRegistration = async () => {
        const formData = new FormData();
        formData.append('projectTitle', projectTitle);
        formData.append('projectContent', projectContent);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('thumbnailPic', thumbnailPic);
        formData.append('studyPic', studyPic);

        console.log('studyPic', studyPic)

        try {
            const axiosInstance = axios.create({
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const response = await axiosInstance.post('http://dmu-dasom.or.kr:8090/board/project', formData);

            if (response.status === 200) {
                console.log("성공")
                //navigate('/SignUp02');
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

            <div className='ManStudyApply-picture'>썸네일 사진</div>
            <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailPicChange}
                style={{ display: 'none' }}
                id="thumbnailPicInput"
            />
            <label htmlFor="thumbnailPicInput" className='ManStudyApply-select'>사진 선택</label>

            <div className='ManStudyApply-activ'>활동 사진</div>
            <input
                type="file"
                accept="image/*"
                onChange={handleStudyPicChange}
                style={{ display: 'none' }}
                id="studyPicInput"
            />
            <label htmlFor="studyPicInput" className='ManStudyApply-select'>사진 선택</label>

            <button className='ManStudyApply-button' onClick={handleProjectRegistration}>프로젝트 등록</button>
        </div>
    );
}

export default ManProjectApply;
