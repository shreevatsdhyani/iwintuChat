import React from 'react';

const UserMessage = ({ profilePic, username, lastMessage, timestamp }) => {
    return (
        <div className="flex items-center p-4 border-b border-[#9c44a4] hover:bg-[#9c44a4] bg-[#1f1031] text-white">
            {/* Profile Picture */}
            <img
                src={profilePic}
                alt={`${username}'s profile`}
                className="w-12 h-12 rounded-full mr-4 border-2 border-[#9c44a4]"
            />

            {/* Message Details */}
            <div className="flex-1">
                {/* Username */}
                <div className="text-lg font-semibold">
                    {username}
                </div>

                {/* Last Message */}
                <div className="text-sm text-gray-300">
                    {lastMessage}
                </div>
            </div>

            {/* Timestamp */}
            <div className="text-xs text-gray-400 ml-4">
                {timestamp}
            </div>
        </div>
    );
};

export default UserMessage;
