import React from 'react';
import profilePic from '../../assets/profilePic.png';
import UserMessage from './UserMessage';

const UserList = () => {
    return (
        <div className="flex justify-center p-3 bg-transparent">
            <div className="w-full max-w-md space-y-2">
                <div className="bg-[#6944a4] rounded-lg shadow-lg">
                    <UserMessage
                        profilePic={profilePic}
                        username="John Doe"
                        lastMessage="Hey, are you coming?"
                        timestamp="2:30 PM"
                    />
                </div>
                <div className="bg-[#6944a4] rounded-lg shadow-lg">
                    <UserMessage
                        profilePic={profilePic}
                        username="Jane Smith"
                        lastMessage="Thanks for the update!"
                        timestamp="1:15 PM"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserList;
