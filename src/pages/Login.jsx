import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/iwintulogo.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log("Email:", email, "Password:", password);
            navigate('/chat'); // Redirect to chat page upon successful login
        } else {
            alert("Please enter both email and password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-fuchsia-400 opacity-20 blur-3xl"></div>

            {/* Form Container */}
            <div className="relative z-10 bg-[#1f1031] text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className='flex justify-center'><img src={logo} alt="iwintu" /></div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 bg-transparent text-gray-200 border border-[#6a00ff]rounded focus:outline-none focus:border-purple-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 bg-transparent text-gray-200 border border-[#6a00ff]rounded focus:outline-none focus:border-fuchsia-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#6944a4] hover:bg-[#9c44a4] text-white font-semibold py-2 rounded transition"
                    >
                        Log In
                    </button>

                    {/* Additional Options */}
                    <div className="flex justify-between text-sm mt-4">
                        <a href="#" className="text-[#6944a4] hover:text-[#9c44a4] hover:underline">Forgot Password?</a>
                        <a href="#" className="text-[#6944a4] hover:text-[#9c44a4] hover:underline">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
