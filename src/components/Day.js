import React, { useContext, useState, useEffect }from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';

/**
 * PurgeCSS:
 * bg-green-200
 * bg-red-200
 * bg-yellow-200
 * bg-gray-200
 * bg-purple-200
 * bg-indigo-200
 * bg-blue-200
 * bg-pink-200
 */

export default function Day({day, rowIdx}) {
    const [ dayEvents, setDayEvents ] =useState([]);

    const { setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent } = useContext(GlobalContext);

    useEffect(() => {
        const events = filteredEvents.filter(
            (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [filteredEvents, day]);
    
    
    function getCurrentDay() {
        if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
            return "bg-blue-600 text-white rounded-full w-7";
        } else {
            return "";
        }
    }

    return (
        <div 
            onClick={() => {
                setDaySelected(day);
                setShowEventModal(true);
            }} 
            className='border border-gray-200 flex flex-col cursor-pointer'
        >
            <header className='flex flex-col items-center'>
                {rowIdx === 0 && (
                    <p className="text-sm t-1">{day.format('ddd').toUpperCase()}</p>
                )}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className='flex-1'>
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                    >
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
