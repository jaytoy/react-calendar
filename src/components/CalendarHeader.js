import React from 'react';
import logo from '../assets/logo.png';

export default function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
        <img src={logo} alt="calendar" className='mr-2 w-16 h-16' />
        <h1 className='mr-10 text-xl font-bold'>Calendar</h1>
        <button className="border rounded py-2 px-4 mr-5">Today</button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </header>
  );
}
