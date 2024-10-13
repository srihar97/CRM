import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                password,
                role,
            });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Registration failed!');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="client">Client</option>
                <option value="engineer">Engineer</option>
            </select>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
