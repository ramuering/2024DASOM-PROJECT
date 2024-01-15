
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import About from "./pages/AboutPage/About";
import Project from "./pages/ProjectPage/Project";
import NewMember from "./pages/ApplyPage/NewMember";
import ManMain from "./pages/ManagerPage/ManMain";
import MyPage from "./pages/MyPage/MyPage";
import LimitHeader from "./components/LimitHeader";
import Login from "./pages/LoginPage/Login";
import SignUp1 from "./pages/SignUpPage/SignUp1";
import SignUp2 from "./pages/SignUpPage/SignUp2";
import Apply1 from "./pages/ApplyPage/Apply1";
import Apply2 from "./pages/ApplyPage/Apply2";
import Notice from "./pages/NoticePage/Notice";
import Study from "./pages/StudyPage/Study";
import ManMemberModify from "./pages/ManagerPage/ManMemberModify";
import ManStudyApply from "./pages/ManagerPage/ManStudyApply";
import ManStudyModify from "./pages/ManagerPage/ManStudyModify";
import ManProjectApply from "./pages/ManagerPage/ManProjectApply";
import ManProjectModify from "./pages/ManagerPage/ManProjectModify";
import ManMember from "./pages/ManagerPage/ManMember";
import ManStudy from "./pages/ManagerPage/ManStudy";
import ManProject from "./pages/ManagerPage/ManProject";
import ManApply from "./pages/ManagerPage/ManApply";


const Layout = () => {
  return (
    <div>
      <LimitHeader />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="recruit" element={<NewMember />} />
          <Route path="admin" element={<ManMain />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="signup01" element={<SignUp1 />} />
          <Route path="signup02" element={<SignUp2 />} />
          <Route path="apply01" element={<Apply1 />} />
          <Route path="apply02" element={<Apply2 />} />
          <Route path="notice" element={<Notice />} />
          <Route path="study" element={<Study />} />
          <Route path="ManMemberModify" element={<ManMemberModify />} />
          <Route path="ManStudyApply" element={<ManStudyApply />} />
          <Route path="ManStudyModify" element={<ManStudyModify />} />
          <Route path="ManProjectApply" element={<ManProjectApply/>} />
          <Route path="ManProjectModify" element={<ManProjectModify/>} />
          <Route path="ManMember" element={<ManMember />} />
          <Route path="ManStudy" element={<ManStudy />} />
          <Route path="ManProject" element={<ManProject />} />
          <Route path="ManApply" element={<ManApply />} />
        </Route>
      </Routes>
    </div>
  );
}


/*
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}
*/


export default App;
