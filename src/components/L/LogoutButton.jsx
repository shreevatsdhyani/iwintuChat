import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout functionality here (e.g., clearing tokens)
        
        // Redirect to login page
        navigate('/'); // Use navigate instead of history.push
    };

    return (
        <div className="flex flex-col justify-between  p-4"> {/* Ensure it takes the full height */}
            <div className="flex-grow">
                {/* Other content can go here */}
            </div>
            <button 
                type="button" 
                onClick={handleLogout} 
                className="bg-[#6944a4] hover:bg-[#9c44a4]  text-white font-medium rounded-lg px-5 py-2.5"
            >
                Logout
            </button>
        </div>
    );
};

export default LogoutButton;
