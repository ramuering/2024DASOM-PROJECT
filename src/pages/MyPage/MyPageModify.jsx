import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './MyPageModify.css'

function MyPageModify() {
  const [data, setData] = useState({github:'', profileImg:''})
  const [newGithub, setNewGithub] = useState('')
  const [newProfileImg, setNewProfileImg] = useState('')

  /*useEffect(() => {
    axios.get('/api/hello') //백엔드에서 받아온 주소
    .then(response => setData(response.data))
    .catch(error => console.log(error))
  }, []);

  const handleGithubChange =()=>{
    axios.put('/api/hello',{newGithub}) //백엔드에서 받아온 주소
    .then(response => setData({...data, github: response.data.github}))
    .catch(error => console.log(error))
  }

  const handleProfileImgChange =()=>{
    axios.put('/api/hello',{newProfileImg}) //백엔드에서 받아온 주소
    .then(response => setData({...data, profileImg: response.data.profileImg}))
    .catch(error => console.log(error))
  }
*/
  return (
    <div className='myPageModify-content'>
      <Header />
      <div className='title'>내 정보 수정</div>
      
      <input type='text' 
      className='gitHub' 
      placeholder='깃허브 주소'
      value={newGithub}
      onChange={(e)=> setNewGithub(e.target.value)} />

      <div className='MyPageModify-choice'>
      <div className='profile'>프로필 사진</div>

      <label className='MyPageModify-choicePicture'
        htmlFor='input-file'><p>사진 선택</p></label>
      
      <input type='file'
        id='input-file'
        className='myPageModify-choiceFile'
        accept='image/*'
        onChange={(e) => setNewProfileImg(e.target.files[0])}
        />

      <div className='MyDataButtonBorder'>
        <div className='MyDataButtonFont'
        //onClick={()=>{
          //{handleGithubChange}
          //{handleProfileImgChange}
        //}}
        >내 정보 수정</div>
      </div>
    </div>
    </div>
  )
}

export default MyPageModify