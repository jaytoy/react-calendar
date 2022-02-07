import React, { useContext }  from 'react';
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className='pl-3 pr-7'>Create</span>
        </button>
    );
}
