import React from 'react';
import { useDispatch } from 'react-redux';
import { setOpenSidebar } from '../redux/slices/authSlice';
import { MdOutlineSearch } from 'react-icons/md';
import { IoReorderThree } from 'react-icons/io5';
import UserAvatar from './UserAvatar';
import NotificationPanel from './NotificationPanel';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center bg-white px-4 py-3 md:py-5 2xl:py-8 sticky z-10 top-0'>
      <div className='flex items-center gap-4'>
        <button 
          onClick={() => {
            dispatch(setOpenSidebar(true));
          }}
          className='text-2xl text-gray-500 block md:hidden'
        >
          <IoReorderThree />
        </button>
        <div className='w-full md:w-64 flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
          <input
            type='text'
            placeholder='Search'
            className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
          />
          <MdOutlineSearch className='text-gray-500 text-xl' />
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <NotificationPanel/>
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
