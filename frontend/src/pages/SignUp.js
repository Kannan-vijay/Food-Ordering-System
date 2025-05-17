import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        if(formData.password.length < 8){
            return alert("pasword must contain 8 letters");
        }
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URI}/users/adduser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    name : formData.name,
                    email: formData.email,
                    password: formData.password,
                    location : formData.location
                })
            });

            const data = await response.json();
            console.log("Server Response:", data);
            if (!data.sucess) {
                return alert(data.message)
            }
            navigate("/login")

        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card bg-dark text-white p-4" style={{ width: "400px", borderRadius: "10px" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control bg-secondary text-white" id="name" name="name" placeholder="Enter your name" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control bg-secondary text-white" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control bg-secondary text-white" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control bg-secondary text-white" id="location" name="location" placeholder="Enter your location" onChange={handleChange} required />
                    </div>
                    <div className="d-flex gap-3">
                        <button type="submit" className="btn btn-success w-50">Sign Up</button>
                        <button type="button" className="btn btn-outline-light w-50" onClick={() => { navigate("/login") }}>
                            I Have an Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
