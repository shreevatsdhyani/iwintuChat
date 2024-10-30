// RightPanel.jsx
import React from 'react';
import ChatBox from './ChatBox';
import Header from './Header';

const RightPanel = ({ selectedUser }) => {
    return (
        <div className="flex flex-col h-full bg-[#1f1031] text-white">
            <Header username={selectedUser.username} />
            <ChatBox />
        </div>
    );
};

export default RightPanel;
