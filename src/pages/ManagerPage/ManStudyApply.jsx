import React, { useState } from 'react';
import './ManStudyApply.css';

function ManStudyApply() {
    const [studyTitle, setStudyTitle] = useState('');
    const [studyContent, setStudyContent] = useState('');
    const [referencesUrl, setReferencesUrl] = useState('');
    const [notionUrl, setNotionUrl] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activityWeeks, setActivityWeeks] = useState(["1주차"]);
    const [thumbnailPic, setThumbnailPic] = useState(null); // 썸네일 사진 상태 추가
    const [studyPic, setStudyPic] = useState(null); // 활동 사진 상태 추가

    const addWeek = () => {
        const newWeek = `${activityWeeks.length + 4}주차`;
        setActivityWeeks([...activityWeeks, newWeek]);
    };

    const handleThumbnailPicChange = (event) => {
        const file = event.target.files[0];
        setThumbnailPic(file);
    };

    const handleStudyPicChange = (event) => {
        const file = event.target.files[0];
        setStudyPic(file);
    };

    const handleStudyRegistration = () => {
            // 스터디 등록 버튼 클릭 시 실행되는 함수
            console.log('스터디 제목:', studyTitle);
            console.log('스터디 내용:', studyContent);
            console.log('교재 및 강의자료 URL:', referencesUrl);
            console.log('노션 URL:', notionUrl);
            console.log('시작 날짜:', startDate);
            console.log('종료 날짜:', endDate);
            console.log('활동 주차:', activityWeeks);
            console.log('썸네일 사진:', thumbnailPic);
            console.log('활동 사진:', studyPic);
        };

    return (
        <div className='ManStudyApply'>
            <div className='ManStudyApply-title'>스터디 등록</div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-name"
                    type='text'
                    value={studyTitle}
                    onChange={(e) => setStudyTitle(e.target.value)}
                    placeholder='스터디 이름을 입력하세요'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-content"
                    type='text'
                    value={studyContent}
                    onChange={(e) => setStudyContent(e.target.value)}
                    placeholder='스터디 내용을 입력하세요 *'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-book"
                    type='text'
                    value={referencesUrl}
                    onChange={(e) => setReferencesUrl(e.target.value)}
                    placeholder='교재 및 강의자료를 입력하세요 '
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-book"
                    value={notionUrl}
                    onChange={(e) => setNotionUrl(e.target.value)}
                    type='text'
                    placeholder='노션 주소를 입력하세요'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-book"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    type='text'
                    placeholder='스터디 시작하는 날짜를 입력하세요.   ex) 2024-04-04'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-book"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    type='text'
                    placeholder='스터디 끝나는 날짜를 입력하세요.   ex) 2024-04-04 '
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-subtitle'>주차 별 활동 내역</div>

            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-1weeks"

                    type='text'
                    placeholder='1주차'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-2weeks"
                    type='text'
                    placeholder='2주차'
                    autoFocus
                />
            </div>
            <div className='ManStudyApply-box'>
                <input
                    className="ManStudyApply-3weeks"
                    type='text'
                    placeholder='3주차'
                    autoFocus
                />
            </div>
            {activityWeeks.map((week, index) => (
                <div className='ManStudyApply-box' key={index}>
                    <input
                        className={`ManStudyApply-${index + 1}weeks`}
                        type='text'
                        placeholder={`${index + 4}주차`}
                        autoFocus
                    />
                </div>
            ))}
            <button className='plus' onClick={addWeek}>+</button>

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

            <button className='ManStudyApply-button' onClick={handleStudyRegistration}>스터디 등록</button>
        </div>
    );
}

export default ManStudyApply;
