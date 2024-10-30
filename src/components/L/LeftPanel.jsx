// LeftPanel.jsx
import React from 'react';
import LogoutButton from './LogoutButton';
import SearchUser from './SearchUser';
import UserList from './UserList';

const LeftPanel = ({ onUserSelect }) => {
  return (
    <div className='h-screen bg-[#1f1031] text-white'>
      <div>
        {/* Search Component */}
        <SearchUser />
        {/* UserList Component with onUserSelect prop */}
        <UserList onUserSelect={onUserSelect} />
      </div>
      {/* Logout Button fixed at the bottom */}
      <div className='fixed bottom-0 w-1/3'>
        <LogoutButton />
      </div>
    </div>
  );
};

export default LeftPanel;
