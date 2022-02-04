import dayjs from 'dayjs';
import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import GlobalContext from '../context/GlobalContext';

export default function CalendarHeader() {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1)
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1)
    }
    function handleReset() {
        setMonthIndex(dayjs().month())
    }

    return (
        <header className="px-4 py-2 flex items-center">
            <img src={logo} alt="calendar" className='mr-2 w-16 h-16' />
            <h1 className='mr-10 text-xl font-bold'>Calendar</h1>
            <button onClick={handleReset} className="border rounded py-2 px-4 mr-5 hover:bg-gray-200">
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 text-gray-600 hover:bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button onClick={handleNextMonth}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 text-gray-600 hover:bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <h2 className='ml-4 text-xl text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    );
}
