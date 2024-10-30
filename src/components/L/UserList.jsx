// UserList.jsx
import React from 'react';
import profilePic from '../../assets/profilePic.png';
import UserMessage from './UserMessage';

const users = [
    { username: "John Doe", lastMessage: "Hey, are you coming?", timestamp: "2:30 PM" },
    { username: "Jane Smith", lastMessage: "Thanks for the update!", timestamp: "1:15 PM" },
];

const UserList = ({ onUserSelect }) => {
    return (
        <div className="flex justify-center p-3 bg-transparent">
            <div className="w-full max-w-md space-y-2">
                {users.map((user, index) => (
                    <div 
                        key={index} 
                        className="bg-[#6944a4] rounded-lg shadow-lg cursor-pointer" 
                        onClick={() => onUserSelect({ username: user.username })} // Correctly call onUserSelect
                    >
                        <UserMessage
                            profilePic={profilePic}
                            username={user.username}
                            lastMessage={user.lastMessage}
                            timestamp={user.timestamp}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
