import React, { useState } from 'react';
import '../styles/Login.css';
import {useNavigate} from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // 간단한 로그인 검증 예제 (추후 백엔드 연동 가능)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            navigate('/products');
            onLogin(true); // 부모 컴포넌트에 로그인 상태 전달
        } else {
            alert('Invalid username or password!');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
