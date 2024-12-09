import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // To navigate after successful login

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add validation if necessary
        if (!email || !password) {
            setErrorMessage('Please enter both email and password');
            return;
        }

        // Simulating a login request (replace with actual authentication logic)
        const isValidLogin = await loginUser(email, password);

        if (isValidLogin) {
            navigate('/dashboard'); // Redirect to dashboard after successful login
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    const loginUser = async (email, password) => {
        // Replace this with actual API call or authentication logic
        // Simulate successful login for now
        if (email === 'user@example.com' && password === 'password123') {
            return true; // Simulate successful login
        }
        return false; // Simulate failed login
    };

    return (
        <div className="bg-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Login;
