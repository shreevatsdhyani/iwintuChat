// Chat.jsx
import React, { useState } from 'react';
import LeftPanel from '../components/L/LeftPanel';
import RightPanel from '../components/R/RightPanel';

const Chat = () => {
    const [selectedUser, setSelectedUser] = useState({
        username: 'John Doe',
    });

    return (
        <div className="flex bg-[#1f1031] h-screen">
            <div className="w-1/3 h-full overflow-hidden">
                <LeftPanel onSelectUser={setSelectedUser} />
            </div>
            <div className="w-2/3 h-full">
                <RightPanel selectedUser={selectedUser} />
            </div>
        </div>
    );
};

export default Chat;
