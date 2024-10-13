import React from 'react';
import Register from './components/Register';
import ProjectManagement from './components/ProjectManagement';
import Feedback from './components/Feedback';

function App() {
    return (
        <div className="App">
            <h1>Client Relationship Management System</h1>
            <Register />
            <ProjectManagement />
            <Feedback />
        </div>
    );
}

export default App;
