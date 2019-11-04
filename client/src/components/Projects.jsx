import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Projects.scss';

function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/projects')
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => {
                alert("Error occurred fetching projects from DB")
            })
    },[])
    return (
        <div className='projects'>
            <h1>Projects</h1>
            {projects ?
            projects.map(project => (
                <Link to={`/api/projects/${project.id}`}>
                    <div className='project-card'>
                        <h2>Name: {project.name}</h2>
                        <p>Description: {project.description}</p>
                        <p>Completed: {project.completed ? 'True' : 'False'}</p>
                    </div>
                </Link>
            )): null}
        </div>
    )
}

export default Projects;