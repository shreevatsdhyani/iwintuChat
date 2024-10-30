import React from 'react';
import ChatBox from './ChatBox';
import Header from './Header';

const RightPanel = ({ selectedUser, messages, onSendMessage }) => {
    return (
        <div className="flex flex-col h-full bg-[#1f1031] text-white">
            <Header username={selectedUser.username} />
            <ChatBox messages={messages} onSendMessage={onSendMessage} />
        </div>
    );
};

export default RightPanel;
