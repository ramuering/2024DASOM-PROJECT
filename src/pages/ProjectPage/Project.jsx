import Footer from '../../components/Footer'
import styled from 'styled-components'
import "./Project.css"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Project = ()=>  {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://dmu-dasom.or.kr:8090/board/project');
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <div className='project-title'>PROJECT</div>
      <div className="project-list">
        <div className="project-box-container">
          {projects.map((project, index) => (
            <Link to={`/ProjectInfo/${project.projectNo}`} key={index} className="project-link">
              <div className="project-box">
                <div className="project-img" style={{ backgroundImage: `url(${project.thumbnailPic})` }}></div>
                <div className="project-content">
                  <div className="project-content-title-wrapper">
                    <div className="project-content-title">{project.projectTitle}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="project-footer">
        <Footer/>
      </div>
    </Container>
  );
}

export default Project

const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
