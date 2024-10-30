// Header.jsx
import React from 'react';

const Header = ({ username }) => {
    return (
        <div className="bg-[#1f1031] p-4 text-white text-2xl font-semibold flex justify-center">
            {username || "Select a User"}
        </div>
    );
};

export default Header;
