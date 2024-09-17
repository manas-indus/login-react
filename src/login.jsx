/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Auth.css';

function Login() {
    const [email, setEmail] = useState('');
    // console.log(email);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Input:");
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="auth-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            {/* Add a link to the Signup page */}
            <p>
                Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
