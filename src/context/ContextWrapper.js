import dayjs from 'dayjs';
import React, { useState, useReducer, useEffect } from 'react';
import GlobalContext from './GlobalContext';

function savedEventsReducer(state, { type, payload }) {
    switch (type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map((evt) => evt.id === payload.id ? payload : evt);
        case "delete":
            return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return parsedEvents;
}

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] =useState(false);
    const [savedEvents, dispatchCalledEvent] = useReducer(
        savedEventsReducer,
        [],
        initEvents
    );

    useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
      }, [savedEvents]);

    return (
        <GlobalContext.Provider 
            value={{
                monthIndex, 
                setMonthIndex,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal,
                savedEvents,
                dispatchCalledEvent,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
