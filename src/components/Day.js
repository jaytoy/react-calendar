import React, { useContext }from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';

export default function Day({day, rowIdx}) {
    const {
        setDaySelected,
        setShowEventModal,
      } = useContext(GlobalContext);
    
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
        </div>
    );
}
