import React, { useState } from 'react';
import LeftPanel from '../components/L/LeftPanel';
import RightPanel from '../components/R/RightPanel';

const Chat = () => {
    // State to hold selected user and their messages
    const [selectedUser, setSelectedUser] = useState({
        username: 'Select a user',
    });

    // State to hold messages for each user
    const [messages, setMessages] = useState({
        "John Doe": [{ text: "Hey, are you coming?", timestamp: "2:30 PM" }],
        "Jane Smith": [{ text: "Thanks for the update!", timestamp: "1:15 PM" }],
    });

    // Get messages for the selected user
    const userMessages = messages[selectedUser.username] || [];

    return (
        <div className="flex bg-[#1f1031] h-screen">
            <div className="w-1/3 h-full overflow-hidden">
                <LeftPanel onUserSelect={setSelectedUser} />
            </div>
            <div className="w-2/3 h-full">
                <RightPanel selectedUser={selectedUser} messages={userMessages} />
            </div>
        </div>
    );
};

export default Chat;
