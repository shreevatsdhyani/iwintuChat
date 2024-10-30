import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai'; // Import the paperclip icon
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon

const ChatBox = ({ messages, onSendMessage, selectedUser }) => {
    const [newMessage, setNewMessage] = useState('');
    const [file, setFile] = useState(null); // State for the selected file

    const handleSend = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage.trim());
            setNewMessage('');
        }

        if (file) {
            // Handle file sending logic here
            console.log("File sent:", file.name);
            // Reset the file state after sending
            setFile(null);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            handleSend(); // Call the send function
        }
    };

    return (
        <div className="relative flex flex-col justify-between h-full p-4 overflow-hidden bg-[#1f1031]">
            {/* Gradient Background */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(156,68,164,0.2),rgba(31,16,49,0))]"></div>
                <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(156,68,164,0.2),rgba(31,16,49,0))]"></div>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto space-y-2 max-h-[calc(100vh-150px)] pr-2 z-10">
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`break-words max-w-xs p-2 rounded-lg text-white ${msg.sender === 'You' ? 'bg-[#9c44a4]' : 'bg-[#734279]'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            {/* Only show input area if a valid user is selected */}
            {selectedUser && selectedUser.username !== 'Select a user' && (
                <div className="flex mt-4 space-x-2 z-10">
                    <input
                        type="text"
                        className="flex-1 p-2 rounded-lg bg-purple-200 text-black placeholder-gray-500 border border-[#a854b5] shadow-md focus:ring-2 focus:ring-[#9c44a4] focus:outline-none"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown} // Add the key down handler here
                    />
                    {/* Hidden file input */}
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        id="file-upload" // Give it an id for the label
                    />
                    {/* Label to trigger file input */}
                    <label htmlFor="file-upload" className="p-2 cursor-pointer bg-[#9c44a4] text-white rounded-lg hover:bg-[#a854b5] flex items-center justify-center">
                        <AiOutlinePaperClip className="w-5 h-5" /> {/* Paperclip Icon */}
                    </label>
                    <button
                        onClick={handleSend}
                        className="p-2 bg-[#9c44a4] text-white rounded-lg hover:bg-[#a854b5]"
                    >
                        <FaPaperPlane /> {/* Use the send icon here */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
