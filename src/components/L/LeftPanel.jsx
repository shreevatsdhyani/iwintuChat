import React from 'react'
import LogoutButton from './LogoutButton'
import SearchUser from './SearchUser'
import UserList from './UserList'

const LeftPanel = () => {
  return (
    <div className=' h-screen bg-[#1f1031] text-white'>
      <div>
      <div>
        <div className=''>
        {/* <LoggedinUser /> */}
        <SearchUser />
        </div>
        <UserList />
      </div>
      <div className='fixed bottom-0 w-1/3'>
        <LogoutButton />
      </div>
      </div>
    </div>
  )
}

export default LeftPanel