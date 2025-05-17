import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URI}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();
            console.log("Server Response:", data);
            if (!data.sucess) {
                return alert(data.message)
            }
            navigate("/")

        } catch (error) {
            console.error("Error during login:", error);
        }

    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card bg-dark text-white p-4" style={{ width: "400px", borderRadius: "10px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control bg-secondary text-white" id="email" name="email"
                                placeholder="Enter your email" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control bg-secondary text-white" id="password" name="password"
                                placeholder="Enter your password" onChange={handleChange} required />
                        </div>
                        <div className="d-flex gap-3">
                            <button type="submit" className="btn btn-success w-50">Login</button>
                            <button type="button" className="btn btn-outline-light w-50" onClick={() => { navigate("/signup") }}>I am a New User</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
