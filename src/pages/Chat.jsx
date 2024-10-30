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
        "John Doe": [{ text: "Hey, are you coming?", sender: "John Doe", timestamp: "2:30 PM" }],
        "Jane Smith": [{ text: "Thanks for the update!", sender: "Jane Smith", timestamp: "1:15 PM" }],
    });

    // Handler to update messages for each user
    const handleSendMessage = (text) => {
        if (selectedUser.username && selectedUser.username !== 'Select a user') {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [selectedUser.username]: [
                    ...(prevMessages[selectedUser.username] || []),
                    { text, sender: 'You', timestamp: new Date().toLocaleTimeString() },
                ],
            }));
        }
    };

    return (
        <div className="flex bg-[#1f1031] h-screen">
            <div className="w-1/3 h-full overflow-hidden">
                <LeftPanel onUserSelect={setSelectedUser} />
            </div>
            <div className="w-2/3 h-full">
                <RightPanel
                    selectedUser={selectedUser}
                    messages={messages[selectedUser.username] || []}
                    onSendMessage={handleSendMessage}
                />
            </div>
        </div>
    );
};

export default Chat;
