import React, { useState } from 'react';
import '../styles/Join.css';
import {useNavigate} from "react-router-dom";

function Join() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        birthDate: '',
        gender: '',
        phone: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 필수 필드 검증 (기본 예제)
        if (
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.birthDate ||
            !formData.gender ||
            !formData.phone
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Sign-up successful!');
        navigate('/login');
        console.log('User data:', formData);
        // 실제 데이터 제출 코드는 여기에 추가
    };

    return (
        <div className="join-container">
            <h2>Join</h2>
            <form onSubmit={handleSubmit} className="join-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                />

                <label htmlFor="birthDate">Date of Birth</label>
                <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                />

                <label htmlFor="gender">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />

                <button type="submit" className="join-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Join;
