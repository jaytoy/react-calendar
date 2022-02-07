import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

export default function EventModal() {
    const { setShowEventModal, daySelected } = useContext(GlobalContext);
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                    <button onClick={() => setShowEventModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-5 items-end gap-y-7'>
                        <div></div>
                        <input 
                            type="text" 
                            name='title' 
                            placeholder='Add title' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className='col-span-4 pt-3 border-0 text-gray-600 text-xl pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' 
                        />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className='col-span-4'>{daySelected.format("dddd, MMMM DD")}</p>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className="col-span-4 pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        
                    </div> 
                </div>
            </form>
        </div>
    );
}
