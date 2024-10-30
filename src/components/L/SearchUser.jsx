import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const SearchUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchRef = useRef(null);
    const users = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]; // Sample usernames

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

        // Filter users based on the search term
        if (e.target.value) {
            setSuggestions(users.filter(user => user.toLowerCase().includes(e.target.value.toLowerCase())));
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (user) => {
        setSearchTerm(user);
        setSuggestions([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search term submitted:", searchTerm);
        setSuggestions([]);
    };

    return (
        <div className="flex justify-center items-center p-4">
            <form ref={searchRef} className="relative w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="flex items-center rounded-full border-2 border-purple-500 bg-transparent">
                    {/* Transparent Search Input with Rounded Edges */}
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="block w-full p-2 pl-4 text-sm text-white bg-transparent placeholder-purple-400 focus:outline-none"
                        placeholder="Search users..."
                        required
                    />

                    {/* Search Button with Icon and Rounded Edges */}
                    <button
                        type="submit"
                        className="p-2 text-[#1f1031] border border-purple-500 bg-[#6b21a8] rounded-full focus:outline-none"
                    >
                        <FaSearch className="w-5 h-5" /> {/* Use the imported search icon */}
                    </button>
                </div>

                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                    <ul className="absolute w-full mt-1 bg-[#9c44a4] border-2 border-purple-500 rounded-lg shadow-lg z-50">
                        {suggestions.map((user, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer text-white hover:bg-[#1f1031] rounded-lg"
                                onClick={() => handleSuggestionClick(user)}
                            >
                                {user}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default SearchUser;
