import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Project.scss';

function Project(props){
    const [project, setProject] = useState({})

    const id = props.match.params.id;

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/projects/${id}`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => {
                alert('An error occured fetching project')
            })
    },[])
    return (
        <div className='project'>
            <h2>Name: {project.name}</h2>
            <p>Description: {project.description}</p>
            <p>Completed: {project.completed ? 'True' : 'False'}</p>
            <div>
                <h3>Actions</h3>
                {project.actions ?
                project.actions.map(actions => (
                    <div className='action-card'>
                        <p>Description: {actions.description}</p>
                        <p>Notes: {actions.notes}</p>
                        <p>Completed: {actions.completed ? 'True' : 'False'}</p>
                    </div>
                )): null}
            </div>
        </div>
    )
}

export default Project;