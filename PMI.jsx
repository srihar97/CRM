import React, { useState } from 'react';
import axios from 'axios';

const ProjectManagement = () => {
    const [projectName, setProjectName] = useState('');

    const createProject = async () => {
        try {
            const response = await axios.post('http://localhost:5000/projects', {
                name: projectName,
            });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Project creation failed!');
        }
    };

    return (
        <div>
            <h2>Create Project</h2>
            <input type="text" placeholder="Project Name" onChange={(e) => setProjectName(e.target.value)} />
            <button onClick={createProject}>Create</button>
        </div>
    );
};

export default ProjectManagement;
