import React from 'react';
import logo from '../assets/logo.png';

export default function CalendarHeader() {
  return (
      <header className="px-4 py-2 flex items center">
          <img src={logo} alt="calendar" className='mr-2 w-16 h-16' />
          <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
      </header>
  );
}
