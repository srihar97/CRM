import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [content, setContent] = useState('');
    const [projectId, setProjectId] = useState('');

    const addFeedback = async () => {
        try {
            const response = await axios.post('http://localhost:5000/feedback', {
                content,
                project_id: projectId,
            });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Feedback submission failed!');
        }
    };

    return (
        <div>
            <h2>Submit Feedback</h2>
            <input type="text" placeholder="Project ID" onChange={(e) => setProjectId(e.target.value)} />
            <textarea placeholder="Feedback" onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={addFeedback}>Submit</button>
        </div>
    );
};

export default Feedback;
