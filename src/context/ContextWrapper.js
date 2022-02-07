import dayjs from 'dayjs';
import React, {useState} from 'react';
import GlobalContext from './GlobalContext';

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] =useState(false);

    return (
        <GlobalContext.Provider 
            value={{
                monthIndex, 
                setMonthIndex,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
