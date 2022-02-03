import React from 'react';
import dayjs from 'dayjs';

export default function Day({day}) {
    function getCurrentDay() {
        if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
            return "bg-blue-600 text-white rounded-full w-7";
        } else {
            return "";
        }
    }

    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center'>
                <p className="text-sm t-1">{day.format('ddd').toUpperCase()}</p>
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>
                    {day.format('DD')}
                </p>
            </header>
        </div>
    );
}
