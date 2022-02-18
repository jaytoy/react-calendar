import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

/**
 * PurgeCSS:
 * text-green-400
 * text-red-400
 * text-yellow-400
 * text-gray-400
 * text-purple-400
 * text-indigo-400
 * text-blue-400
 * text-pink-400
 */


export default function Labels() {
    const { labels, updateLabel } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <p className="text-gray-500 font-bold mt-10">Label</p>
            {labels.map(({ label: lbl, checked }, idx) => (
                <label key={idx} className="items-center mt-3 block">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                        updateLabel({ label: lbl, checked: !checked })
                    }
                    className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
                />
                <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
                </label>
            ))}
        </React.Fragment>
    )
}
